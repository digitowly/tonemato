import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SearchTypeCreateInput } from "../../../inputs/SearchTypeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSearchTypeArgs {
  @TypeGraphQL.Field(_type => SearchTypeCreateInput, {
    nullable: false
  })
  data!: SearchTypeCreateInput;
}
