import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SearchTypeUpdateInput } from "../../../inputs/SearchTypeUpdateInput";
import { SearchTypeWhereUniqueInput } from "../../../inputs/SearchTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSearchTypeArgs {
  @TypeGraphQL.Field(_type => SearchTypeUpdateInput, {
    nullable: false
  })
  data!: SearchTypeUpdateInput;

  @TypeGraphQL.Field(_type => SearchTypeWhereUniqueInput, {
    nullable: false
  })
  where!: SearchTypeWhereUniqueInput;
}
