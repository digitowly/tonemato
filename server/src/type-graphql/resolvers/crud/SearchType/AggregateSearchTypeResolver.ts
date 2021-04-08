import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSearchTypeArgs } from "./args/AggregateSearchTypeArgs";
import { SearchType } from "../../../models/SearchType";
import { AggregateSearchType } from "../../outputs/AggregateSearchType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SearchType)
export class AggregateSearchTypeResolver {
  @TypeGraphQL.Query(_returns => AggregateSearchType, {
    nullable: false
  })
  async aggregateSearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSearchTypeArgs): Promise<AggregateSearchType> {
    return getPrismaFromContext(ctx).searchType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
