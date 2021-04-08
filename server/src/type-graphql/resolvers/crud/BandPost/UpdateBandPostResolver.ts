import * as TypeGraphQL from "type-graphql";
import { UpdateBandPostArgs } from "./args/UpdateBandPostArgs";
import { BandPost } from "../../../models/BandPost";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BandPost)
export class UpdateBandPostResolver {
  @TypeGraphQL.Mutation(_returns => BandPost, {
    nullable: true
  })
  async updateBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateBandPostArgs): Promise<BandPost | null> {
    return getPrismaFromContext(ctx).bandPost.update(args);
  }
}
