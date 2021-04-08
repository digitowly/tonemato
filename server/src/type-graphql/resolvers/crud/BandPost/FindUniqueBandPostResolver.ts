import * as TypeGraphQL from "type-graphql";
import { FindUniqueBandPostArgs } from "./args/FindUniqueBandPostArgs";
import { BandPost } from "../../../models/BandPost";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BandPost)
export class FindUniqueBandPostResolver {
  @TypeGraphQL.Query(_returns => BandPost, {
    nullable: true
  })
  async bandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueBandPostArgs): Promise<BandPost | null> {
    return getPrismaFromContext(ctx).bandPost.findUnique(args);
  }
}
