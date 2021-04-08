import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BandPost } from "../models/BandPost";
import { Intrument } from "../enums/Intrument";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class SearchType {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => Intrument, {
    nullable: false
  })
  instrument!: "GUITAR" | "BASS" | "DRUMS";

  bandPost?: BandPost | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  bandPostId?: number | null;
}
