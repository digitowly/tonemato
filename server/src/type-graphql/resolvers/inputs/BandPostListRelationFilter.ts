import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostWhereInput } from "../inputs/BandPostWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostListRelationFilter {
  @TypeGraphQL.Field(_type => BandPostWhereInput, {
    nullable: true
  })
  every?: BandPostWhereInput | undefined;

  @TypeGraphQL.Field(_type => BandPostWhereInput, {
    nullable: true
  })
  some?: BandPostWhereInput | undefined;

  @TypeGraphQL.Field(_type => BandPostWhereInput, {
    nullable: true
  })
  none?: BandPostWhereInput | undefined;
}
