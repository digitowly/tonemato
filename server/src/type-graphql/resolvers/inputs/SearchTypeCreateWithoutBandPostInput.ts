import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Intrument } from "../../enums/Intrument";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SearchTypeCreateWithoutBandPostInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => Intrument, {
    nullable: false
  })
  instrument!: "GUITAR" | "BASS" | "DRUMS";
}
