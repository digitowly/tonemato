import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SearchTypeUpdateWithoutBandPostInput } from "../inputs/SearchTypeUpdateWithoutBandPostInput";
import { SearchTypeWhereUniqueInput } from "../inputs/SearchTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SearchTypeUpdateWithWhereUniqueWithoutBandPostInput {
  @TypeGraphQL.Field(_type => SearchTypeWhereUniqueInput, {
    nullable: false
  })
  where!: SearchTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SearchTypeUpdateWithoutBandPostInput, {
    nullable: false
  })
  data!: SearchTypeUpdateWithoutBandPostInput;
}
