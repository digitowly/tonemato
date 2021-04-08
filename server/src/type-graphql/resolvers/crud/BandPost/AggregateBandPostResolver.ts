import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBandPostArgs } from "./args/AggregateBandPostArgs";
import { BandPost } from "../../../models/BandPost";
import { AggregateBandPost } from "../../outputs/AggregateBandPost";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BandPost)
export class AggregateBandPostResolver {
  @TypeGraphQL.Query(_returns => AggregateBandPost, {
    nullable: false
  })
  async aggregateBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBandPostArgs): Promise<AggregateBandPost> {
    return getPrismaFromContext(ctx).bandPost.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
