import * as TypeGraphQL from "type-graphql";
import { FindFirstSearchTypeArgs } from "./args/FindFirstSearchTypeArgs";
import { SearchType } from "../../../models/SearchType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SearchType)
export class FindFirstSearchTypeResolver {
  @TypeGraphQL.Query(_returns => SearchType, {
    nullable: true
  })
  async findFirstSearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstSearchTypeArgs): Promise<SearchType | null> {
    return getPrismaFromContext(ctx).searchType.findFirst(args);
  }
}
