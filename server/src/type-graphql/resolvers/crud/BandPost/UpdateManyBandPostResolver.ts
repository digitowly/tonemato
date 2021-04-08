import * as TypeGraphQL from "type-graphql";
import { UpdateManyBandPostArgs } from "./args/UpdateManyBandPostArgs";
import { BandPost } from "../../../models/BandPost";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BandPost)
export class UpdateManyBandPostResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyBandPostArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bandPost.updateMany(args);
  }
}
