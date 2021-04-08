import * as TypeGraphQL from "type-graphql";
import { DeleteBandPostArgs } from "./args/DeleteBandPostArgs";
import { BandPost } from "../../../models/BandPost";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BandPost)
export class DeleteBandPostResolver {
  @TypeGraphQL.Mutation(_returns => BandPost, {
    nullable: true
  })
  async deleteBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteBandPostArgs): Promise<BandPost | null> {
    return getPrismaFromContext(ctx).bandPost.delete(args);
  }
}
