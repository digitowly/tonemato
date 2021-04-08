import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Intrument } from "../../enums/Intrument";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumIntrumentFilter {
  @TypeGraphQL.Field(_type => Intrument, {
    nullable: true
  })
  equals?: "GUITAR" | "BASS" | "DRUMS" | undefined;

  @TypeGraphQL.Field(_type => [Intrument], {
    nullable: true
  })
  in?: Array<"GUITAR" | "BASS" | "DRUMS"> | undefined;

  @TypeGraphQL.Field(_type => [Intrument], {
    nullable: true
  })
  notIn?: Array<"GUITAR" | "BASS" | "DRUMS"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumIntrumentFilter, {
    nullable: true
  })
  not?: NestedEnumIntrumentFilter | undefined;
}
