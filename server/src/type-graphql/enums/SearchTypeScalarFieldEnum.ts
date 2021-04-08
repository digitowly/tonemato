import * as TypeGraphQL from "type-graphql";

export enum SearchTypeScalarFieldEnum {
  id = "id",
  amount = "amount",
  instrument = "instrument",
  bandPostId = "bandPostId"
}
TypeGraphQL.registerEnumType(SearchTypeScalarFieldEnum, {
  name: "SearchTypeScalarFieldEnum",
  description: undefined,
});
