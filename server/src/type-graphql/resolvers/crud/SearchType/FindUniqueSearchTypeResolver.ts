import * as TypeGraphQL from "type-graphql";
import { FindUniqueSearchTypeArgs } from "./args/FindUniqueSearchTypeArgs";
import { SearchType } from "../../../models/SearchType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SearchType)
export class FindUniqueSearchTypeResolver {
  @TypeGraphQL.Query(_returns => SearchType, {
    nullable: true
  })
  async searchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueSearchTypeArgs): Promise<SearchType | null> {
    return getPrismaFromContext(ctx).searchType.findUnique(args);
  }
}
