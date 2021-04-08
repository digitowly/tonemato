import * as TypeGraphQL from "type-graphql";
import { UpdateManySearchTypeArgs } from "./args/UpdateManySearchTypeArgs";
import { SearchType } from "../../../models/SearchType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SearchType)
export class UpdateManySearchTypeResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySearchTypeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).searchType.updateMany(args);
  }
}
