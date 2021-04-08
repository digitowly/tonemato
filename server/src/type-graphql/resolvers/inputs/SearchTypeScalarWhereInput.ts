import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumIntrumentFilter } from "../inputs/EnumIntrumentFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SearchTypeScalarWhereInput {
  @TypeGraphQL.Field(_type => [SearchTypeScalarWhereInput], {
    nullable: true
  })
  AND?: SearchTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeScalarWhereInput], {
    nullable: true
  })
  OR?: SearchTypeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeScalarWhereInput], {
    nullable: true
  })
  NOT?: SearchTypeScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  bandPostId?: IntNullableFilter | undefined;
}
