import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostWhereInput } from "../inputs/BandPostWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostRelationFilter {
  @TypeGraphQL.Field(_type => BandPostWhereInput, {
    nullable: true
  })
  is?: BandPostWhereInput | undefined;

  @TypeGraphQL.Field(_type => BandPostWhereInput, {
    nullable: true
  })
  isNot?: BandPostWhereInput | undefined;
}
