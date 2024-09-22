"use client";

import { ApolloLink, HttpLink, split } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { setContext } from "@apollo/client/link/context";
import { createClient } from "@/utils/supabase/client";
import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { Socket as PhoenixSocket } from "phoenix";
import { getMainDefinition } from "@apollo/client/utilities";
import React, { useEffect, useState } from "react";

const phoenixSocket = new PhoenixSocket(
  `${process.env.NEXT_PUBLIC_CLANWYSE_WS_URL}/rainforest/v1/socket`,
  {
    params: async () => {
      const session = (await supabase.auth.getSession()).data.session;
      return { token: session?.access_token };
    },
  }
);

// Wrap the Phoenix socket in an AbsintheSocket.
const absintheSocket =
  typeof window !== "undefined" && AbsintheSocket.create(phoenixSocket);

// Create an Apollo link from the AbsintheSocket instance.
const websocketLink =
  typeof window !== "undefined" && createAbsintheSocketLink(absintheSocket);

const authLink = setContext(async (_, { headers }) => {
  const supabase = createClient();
  // get the authentication token from local storage if it exists
  const user = await supabase.auth.getSession();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${user.data.session?.access_token}` ?? "",
    },
  };
});

// have a function to create a client for you
function makeClient() {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: `${process.env.NEXT_PUBLIC_CLANWYSE_URL}/rainforest/v1/graphql`,
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    fetchOptions: { cache: "no-store" },
    // you can override the default `fetchOptions` on a per query basis
    // via the `context` property on the options passed as a second argument
    // to an Apollo Client data fetching hook, e.g.:
    // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
  });

  const authedHttpLink = authLink.concat(httpLink);

  // If the query contains a subscription, send it through the
  // websocket link. Otherwise, send it through the HTTP link.
  const link = split(
    (operation) => {
      const definition = getMainDefinition(operation.query);

      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    websocketLink,
    authedHttpLink
  );

  // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
  return new ApolloClient({
    // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
    ssrMode: typeof window === "undefined",
    cache: new InMemoryCache(),
    link: link,
  });
}

// Later in your application code, when you need to reconnect
// the socket.
// phoenixSocket.conn.close();

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
