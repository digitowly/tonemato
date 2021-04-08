import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SearchTypeScalarWhereInput } from "../inputs/SearchTypeScalarWhereInput";
import { SearchTypeUpdateManyMutationInput } from "../inputs/SearchTypeUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SearchTypeUpdateManyWithWhereWithoutBandPostInput {
  @TypeGraphQL.Field(_type => SearchTypeScalarWhereInput, {
    nullable: false
  })
  where!: SearchTypeScalarWhereInput;

  @TypeGraphQL.Field(_type => SearchTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: SearchTypeUpdateManyMutationInput;
}
