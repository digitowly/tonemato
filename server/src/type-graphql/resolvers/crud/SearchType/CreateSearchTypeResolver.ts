import * as TypeGraphQL from "type-graphql";
import { CreateSearchTypeArgs } from "./args/CreateSearchTypeArgs";
import { SearchType } from "../../../models/SearchType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SearchType)
export class CreateSearchTypeResolver {
  @TypeGraphQL.Mutation(_returns => SearchType, {
    nullable: false
  })
  async createSearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSearchTypeArgs): Promise<SearchType> {
    return getPrismaFromContext(ctx).searchType.create(args);
  }
}
