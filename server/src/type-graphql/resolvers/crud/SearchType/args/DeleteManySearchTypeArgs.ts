import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SearchTypeWhereInput } from "../../../inputs/SearchTypeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySearchTypeArgs {
  @TypeGraphQL.Field(_type => SearchTypeWhereInput, {
    nullable: true
  })
  where?: SearchTypeWhereInput | undefined;
}
