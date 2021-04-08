import * as TypeGraphQL from "type-graphql";
import { DeleteManyBandPostArgs } from "./args/DeleteManyBandPostArgs";
import { BandPost } from "../../../models/BandPost";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BandPost)
export class DeleteManyBandPostResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyBandPostArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bandPost.deleteMany(args);
  }
}
