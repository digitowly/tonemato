import * as TypeGraphQL from "type-graphql";

export enum BandPostScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  title = "title",
  body = "body",
  published = "published",
  userId = "userId"
}
TypeGraphQL.registerEnumType(BandPostScalarFieldEnum, {
  name: "BandPostScalarFieldEnum",
  description: undefined,
});
