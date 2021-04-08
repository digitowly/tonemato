import * as TypeGraphQL from "type-graphql";
import { UpsertSearchTypeArgs } from "./args/UpsertSearchTypeArgs";
import { SearchType } from "../../../models/SearchType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SearchType)
export class UpsertSearchTypeResolver {
  @TypeGraphQL.Mutation(_returns => SearchType, {
    nullable: false
  })
  async upsertSearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSearchTypeArgs): Promise<SearchType> {
    return getPrismaFromContext(ctx).searchType.upsert(args);
  }
}
