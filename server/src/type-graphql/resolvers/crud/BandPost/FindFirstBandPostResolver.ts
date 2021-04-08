import * as TypeGraphQL from "type-graphql";
import { FindFirstBandPostArgs } from "./args/FindFirstBandPostArgs";
import { BandPost } from "../../../models/BandPost";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BandPost)
export class FindFirstBandPostResolver {
  @TypeGraphQL.Query(_returns => BandPost, {
    nullable: true
  })
  async findFirstBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstBandPostArgs): Promise<BandPost | null> {
    return getPrismaFromContext(ctx).bandPost.findFirst(args);
  }
}
