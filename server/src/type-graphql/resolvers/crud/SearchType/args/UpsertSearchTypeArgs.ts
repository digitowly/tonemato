import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SearchTypeCreateInput } from "../../../inputs/SearchTypeCreateInput";
import { SearchTypeUpdateInput } from "../../../inputs/SearchTypeUpdateInput";
import { SearchTypeWhereUniqueInput } from "../../../inputs/SearchTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSearchTypeArgs {
  @TypeGraphQL.Field(_type => SearchTypeWhereUniqueInput, {
    nullable: false
  })
  where!: SearchTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SearchTypeCreateInput, {
    nullable: false
  })
  create!: SearchTypeCreateInput;

  @TypeGraphQL.Field(_type => SearchTypeUpdateInput, {
    nullable: false
  })
  update!: SearchTypeUpdateInput;
}
