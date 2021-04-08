import * as TypeGraphQL from "type-graphql";
import { DeleteManySearchTypeArgs } from "./args/DeleteManySearchTypeArgs";
import { SearchType } from "../../../models/SearchType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SearchType)
export class DeleteManySearchTypeResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySearchTypeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).searchType.deleteMany(args);
  }
}
