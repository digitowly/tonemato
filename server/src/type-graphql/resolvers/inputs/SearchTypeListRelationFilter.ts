import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SearchTypeWhereInput } from "../inputs/SearchTypeWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SearchTypeListRelationFilter {
  @TypeGraphQL.Field(_type => SearchTypeWhereInput, {
    nullable: true
  })
  every?: SearchTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => SearchTypeWhereInput, {
    nullable: true
  })
  some?: SearchTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => SearchTypeWhereInput, {
    nullable: true
  })
  none?: SearchTypeWhereInput | undefined;
}
