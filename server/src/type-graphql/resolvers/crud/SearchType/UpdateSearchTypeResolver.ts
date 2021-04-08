import * as TypeGraphQL from "type-graphql";
import { UpdateSearchTypeArgs } from "./args/UpdateSearchTypeArgs";
import { SearchType } from "../../../models/SearchType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SearchType)
export class UpdateSearchTypeResolver {
  @TypeGraphQL.Mutation(_returns => SearchType, {
    nullable: true
  })
  async updateSearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSearchTypeArgs): Promise<SearchType | null> {
    return getPrismaFromContext(ctx).searchType.update(args);
  }
}
