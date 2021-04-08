import * as TypeGraphQL from "type-graphql";
import { UpsertBandPostArgs } from "./args/UpsertBandPostArgs";
import { BandPost } from "../../../models/BandPost";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BandPost)
export class UpsertBandPostResolver {
  @TypeGraphQL.Mutation(_returns => BandPost, {
    nullable: false
  })
  async upsertBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertBandPostArgs): Promise<BandPost> {
    return getPrismaFromContext(ctx).bandPost.upsert(args);
  }
}
