import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSearchTypeArgs } from "./args/AggregateSearchTypeArgs";
import { CreateSearchTypeArgs } from "./args/CreateSearchTypeArgs";
import { DeleteManySearchTypeArgs } from "./args/DeleteManySearchTypeArgs";
import { DeleteSearchTypeArgs } from "./args/DeleteSearchTypeArgs";
import { FindFirstSearchTypeArgs } from "./args/FindFirstSearchTypeArgs";
import { FindManySearchTypeArgs } from "./args/FindManySearchTypeArgs";
import { FindUniqueSearchTypeArgs } from "./args/FindUniqueSearchTypeArgs";
import { UpdateManySearchTypeArgs } from "./args/UpdateManySearchTypeArgs";
import { UpdateSearchTypeArgs } from "./args/UpdateSearchTypeArgs";
import { UpsertSearchTypeArgs } from "./args/UpsertSearchTypeArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { SearchType } from "../../../models/SearchType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSearchType } from "../../outputs/AggregateSearchType";

@TypeGraphQL.Resolver(_of => SearchType)
export class SearchTypeCrudResolver {
  @TypeGraphQL.Query(_returns => SearchType, {
    nullable: true
  })
  async searchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueSearchTypeArgs): Promise<SearchType | null> {
    return getPrismaFromContext(ctx).searchType.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => SearchType, {
    nullable: true
  })
  async findFirstSearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstSearchTypeArgs): Promise<SearchType | null> {
    return getPrismaFromContext(ctx).searchType.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [SearchType], {
    nullable: false
  })
  async searchTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySearchTypeArgs): Promise<SearchType[]> {
    return getPrismaFromContext(ctx).searchType.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => SearchType, {
    nullable: false
  })
  async createSearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSearchTypeArgs): Promise<SearchType> {
    return getPrismaFromContext(ctx).searchType.create(args);
  }

  @TypeGraphQL.Mutation(_returns => SearchType, {
    nullable: true
  })
  async deleteSearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSearchTypeArgs): Promise<SearchType | null> {
    return getPrismaFromContext(ctx).searchType.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => SearchType, {
    nullable: true
  })
  async updateSearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSearchTypeArgs): Promise<SearchType | null> {
    return getPrismaFromContext(ctx).searchType.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySearchTypeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).searchType.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySearchTypeArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).searchType.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => SearchType, {
    nullable: false
  })
  async upsertSearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSearchTypeArgs): Promise<SearchType> {
    return getPrismaFromContext(ctx).searchType.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateSearchType, {
    nullable: false
  })
  async aggregateSearchType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSearchTypeArgs): Promise<AggregateSearchType> {
    return getPrismaFromContext(ctx).searchType.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
