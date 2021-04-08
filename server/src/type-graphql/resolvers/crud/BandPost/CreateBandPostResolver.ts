import * as TypeGraphQL from "type-graphql";
import { CreateBandPostArgs } from "./args/CreateBandPostArgs";
import { BandPost } from "../../../models/BandPost";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BandPost)
export class CreateBandPostResolver {
  @TypeGraphQL.Mutation(_returns => BandPost, {
    nullable: false
  })
  async createBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateBandPostArgs): Promise<BandPost> {
    return getPrismaFromContext(ctx).bandPost.create(args);
  }
}
