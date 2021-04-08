import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostRelationFilter } from "../inputs/BandPostRelationFilter";
import { EnumIntrumentFilter } from "../inputs/EnumIntrumentFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SearchTypeWhereInput {
  @TypeGraphQL.Field(_type => [SearchTypeWhereInput], {
    nullable: true
  })
  AND?: SearchTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeWhereInput], {
    nullable: true
  })
  OR?: SearchTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeWhereInput], {
    nullable: true
  })
  NOT?: SearchTypeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  amount?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumIntrumentFilter, {
    nullable: true
  })
  instrument?: EnumIntrumentFilter | undefined;

  @TypeGraphQL.Field(_type => BandPostRelationFilter, {
    nullable: true
  })
  bandPost?: BandPostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  bandPostId?: IntNullableFilter | undefined;
}
