/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * The `Date` scalar type represents a date. The Date appears in a JSON
   * response as an ISO8601 formatted string, without a time component.
   */
  Date: { input: any; output: any };
  /**
   * The `DateTime` scalar type represents a date and time in the UTC
   * timezone. The DateTime appears in a JSON response as an ISO8601 formatted
   * string, including UTC timezone ("Z"). The parsed date and time string will
   * be converted to UTC if there is an offset.
   */
  DateTime: { input: any; output: any };
};

export type Appearance = {
  __typename?: "Appearance";
  colorMode?: Maybe<ColorMode>;
  id?: Maybe<Scalars["ID"]["output"]>;
  navigationColor?: Maybe<Scalars["String"]["output"]>;
  notificationColor?: Maybe<Scalars["String"]["output"]>;
  presenceColor?: Maybe<Scalars["String"]["output"]>;
  selectedItemsColor?: Maybe<Scalars["String"]["output"]>;
};

export type AppearanceInput = {
  colorMode?: InputMaybe<ColorMode>;
  navigationColor?: InputMaybe<Scalars["String"]["input"]>;
  notificationColor?: InputMaybe<Scalars["String"]["input"]>;
  presenceColor?: InputMaybe<Scalars["String"]["input"]>;
  selectedItemsColor?: InputMaybe<Scalars["String"]["input"]>;
};

export enum ColorMode {
  Dark = "DARK",
  Light = "LIGHT",
  System = "SYSTEM",
}

export type Preferences = {
  __typename?: "Preferences";
  enableEmailNotifications?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  language?: Maybe<Scalars["String"]["output"]>;
  online?: Maybe<Scalars["Boolean"]["output"]>;
  spellcheck?: Maybe<Scalars["Boolean"]["output"]>;
  timeZone?: Maybe<Scalars["String"]["output"]>;
  visibility?: Maybe<Visibility>;
};

export type PreferencesInput = {
  enableEmailNotifications?: InputMaybe<Scalars["Boolean"]["input"]>;
  language?: InputMaybe<Scalars["String"]["input"]>;
  online?: InputMaybe<Scalars["Boolean"]["input"]>;
  spellcheck?: InputMaybe<Scalars["Boolean"]["input"]>;
  timeZone?: InputMaybe<Scalars["String"]["input"]>;
  visibility?: InputMaybe<Visibility>;
};

export type Profile = {
  avatar: string | undefined;
  __typename?: "Profile";
  appearance?: Maybe<Appearance>;
  bio?: Maybe<Scalars["String"]["output"]>;
  birthDate?: Maybe<Scalars["Date"]["output"]>;
  deleteOn?: Maybe<Scalars["Date"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  insertedAt?: Maybe<Scalars["DateTime"]["output"]>;
  isBanned?: Maybe<Scalars["Boolean"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  photoUrl?: Maybe<Scalars["String"]["output"]>;
  preferences?: Maybe<Preferences>;
  suspendedUntil?: Maybe<Scalars["Date"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

export type RootMutationType = {
  __typename?: "RootMutationType";
  deleteMe?: Maybe<Scalars["Boolean"]["output"]>;
  updateMe?: Maybe<Profile>;
};

export type RootMutationTypeUpdateMeArgs = {
  input: UpdateProfileInput;
};

export type RootQueryType = {
  __typename?: "RootQueryType";
  getProfile?: Maybe<Profile>;
  getProfiles?: Maybe<Array<Maybe<Profile>>>;
  me?: Maybe<Profile>;
};

export type RootQueryTypeGetProfileArgs = {
  id: Scalars["ID"]["input"];
};

export type RootSubscriptionType = {
  __typename?: "RootSubscriptionType";
  profileUpdated?: Maybe<Profile>;
};

export type RootSubscriptionTypeProfileUpdatedArgs = {
  id: Scalars["ID"]["input"];
};

export type UpdateProfileInput = {
  appearance?: InputMaybe<AppearanceInput>;
  avatar?: InputMaybe<Scalars["String"]["input"]>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  birthDate?: InputMaybe<Scalars["Date"]["input"]>;
  deleteOn?: InputMaybe<Scalars["Date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  insertedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  isBanned?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  preferences?: InputMaybe<PreferencesInput>;
  suspendedUntil?: InputMaybe<Scalars["Date"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export enum Visibility {
  FriendsOnly = "FRIENDS_ONLY",
  Private = "PRIVATE",
  Public = "PUBLIC",
}
