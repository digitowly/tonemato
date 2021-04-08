import * as TypeGraphQL from "type-graphql";
import { FindManySearchTypeArgs } from "./args/FindManySearchTypeArgs";
import { SearchType } from "../../../models/SearchType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SearchType)
export class FindManySearchTypeResolver {
  @TypeGraphQL.Query(_returns => [SearchType], {
    nullable: false
  })
  async searchTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySearchTypeArgs): Promise<SearchType[]> {
    return getPrismaFromContext(ctx).searchType.findMany(args);
  }
}
