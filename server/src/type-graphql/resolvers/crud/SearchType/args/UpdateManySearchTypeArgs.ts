import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SearchTypeUpdateManyMutationInput } from "../../../inputs/SearchTypeUpdateManyMutationInput";
import { SearchTypeWhereInput } from "../../../inputs/SearchTypeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySearchTypeArgs {
  @TypeGraphQL.Field(_type => SearchTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: SearchTypeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SearchTypeWhereInput, {
    nullable: true
  })
  where?: SearchTypeWhereInput | undefined;
}
