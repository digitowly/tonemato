import * as TypeGraphQL from "type-graphql";
import { DeleteSearchTypeArgs } from "./args/DeleteSearchTypeArgs";
import { SearchType } from "../../../models/SearchType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SearchType)
export class DeleteSearchTypeResolver {
  @TypeGraphQL.Mutation(_returns => SearchType, {
    nullable: true
  })
  async deleteSearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSearchTypeArgs): Promise<SearchType | null> {
    return getPrismaFromContext(ctx).searchType.delete(args);
  }
}
