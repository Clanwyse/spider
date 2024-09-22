// codegen.ts
// change the schema's uri with our graphql server end point
module.exports = {
  overwrite: true,
  schema: `https://clever-lunar-turtles.clanwyse.com/rainforest/v1/graphql`,
  // documents: ["graphql/**/*.graphql"],
  generates: {
    "generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};
