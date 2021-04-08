import * as TypeGraphQL from "type-graphql";

export enum Intrument {
  GUITAR = "GUITAR",
  BASS = "BASS",
  DRUMS = "DRUMS"
}
TypeGraphQL.registerEnumType(Intrument, {
  name: "Intrument",
  description: undefined,
});
