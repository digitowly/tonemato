import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SearchTypeOrderByInput } from "../../../inputs/SearchTypeOrderByInput";
import { SearchTypeWhereInput } from "../../../inputs/SearchTypeWhereInput";
import { SearchTypeWhereUniqueInput } from "../../../inputs/SearchTypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSearchTypeArgs {
  @TypeGraphQL.Field(_type => SearchTypeWhereInput, {
    nullable: true
  })
  where?: SearchTypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeOrderByInput], {
    nullable: true
  })
  orderBy?: SearchTypeOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => SearchTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: SearchTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
