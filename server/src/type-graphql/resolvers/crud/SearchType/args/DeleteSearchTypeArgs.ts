import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SearchTypeWhereUniqueInput } from "../../../inputs/SearchTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSearchTypeArgs {
  @TypeGraphQL.Field(_type => SearchTypeWhereUniqueInput, {
    nullable: false
  })
  where!: SearchTypeWhereUniqueInput;
}
