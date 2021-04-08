import * as TypeGraphQL from "type-graphql";
import { FindManyBandPostArgs } from "./args/FindManyBandPostArgs";
import { BandPost } from "../../../models/BandPost";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BandPost)
export class FindManyBandPostResolver {
  @TypeGraphQL.Query(_returns => [BandPost], {
    nullable: false
  })
  async bandPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyBandPostArgs): Promise<BandPost[]> {
    return getPrismaFromContext(ctx).bandPost.findMany(args);
  }
}
