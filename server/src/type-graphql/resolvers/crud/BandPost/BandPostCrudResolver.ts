import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBandPostArgs } from "./args/AggregateBandPostArgs";
import { CreateBandPostArgs } from "./args/CreateBandPostArgs";
import { DeleteBandPostArgs } from "./args/DeleteBandPostArgs";
import { DeleteManyBandPostArgs } from "./args/DeleteManyBandPostArgs";
import { FindFirstBandPostArgs } from "./args/FindFirstBandPostArgs";
import { FindManyBandPostArgs } from "./args/FindManyBandPostArgs";
import { FindUniqueBandPostArgs } from "./args/FindUniqueBandPostArgs";
import { UpdateBandPostArgs } from "./args/UpdateBandPostArgs";
import { UpdateManyBandPostArgs } from "./args/UpdateManyBandPostArgs";
import { UpsertBandPostArgs } from "./args/UpsertBandPostArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { BandPost } from "../../../models/BandPost";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBandPost } from "../../outputs/AggregateBandPost";

@TypeGraphQL.Resolver(_of => BandPost)
export class BandPostCrudResolver {
  @TypeGraphQL.Query(_returns => BandPost, {
    nullable: true
  })
  async bandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueBandPostArgs): Promise<BandPost | null> {
    return getPrismaFromContext(ctx).bandPost.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => BandPost, {
    nullable: true
  })
  async findFirstBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstBandPostArgs): Promise<BandPost | null> {
    return getPrismaFromContext(ctx).bandPost.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [BandPost], {
    nullable: false
  })
  async bandPosts(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyBandPostArgs): Promise<BandPost[]> {
    return getPrismaFromContext(ctx).bandPost.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BandPost, {
    nullable: false
  })
  async createBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateBandPostArgs): Promise<BandPost> {
    return getPrismaFromContext(ctx).bandPost.create(args);
  }

  @TypeGraphQL.Mutation(_returns => BandPost, {
    nullable: true
  })
  async deleteBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteBandPostArgs): Promise<BandPost | null> {
    return getPrismaFromContext(ctx).bandPost.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => BandPost, {
    nullable: true
  })
  async updateBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateBandPostArgs): Promise<BandPost | null> {
    return getPrismaFromContext(ctx).bandPost.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyBandPostArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bandPost.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyBandPostArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bandPost.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BandPost, {
    nullable: false
  })
  async upsertBandPost(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertBandPostArgs): Promise<BandPost> {
    return getPrismaFromContext(ctx).bandPost.upsert(args);
  }

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
