import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SearchTypeCreateWithoutBandPostInput } from "../inputs/SearchTypeCreateWithoutBandPostInput";
import { SearchTypeWhereUniqueInput } from "../inputs/SearchTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SearchTypeCreateOrConnectWithoutBandPostInput {
  @TypeGraphQL.Field(_type => SearchTypeWhereUniqueInput, {
    nullable: false
  })
  where!: SearchTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SearchTypeCreateWithoutBandPostInput, {
    nullable: false
  })
  create!: SearchTypeCreateWithoutBandPostInput;
}
