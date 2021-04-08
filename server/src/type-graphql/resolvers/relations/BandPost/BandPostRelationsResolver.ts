import * as TypeGraphQL from "type-graphql";
import { BandPost } from "../../../models/BandPost";
import { SearchType } from "../../../models/SearchType";
import { User } from "../../../models/User";
import { BandPostSearchTypesArgs } from "./args/BandPostSearchTypesArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BandPost)
export class BandPostRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() bandPost: BandPost, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).bandPost.findUnique({
      where: {
        id: bandPost.id,
      },
    }).author({});
  }

  @TypeGraphQL.FieldResolver(_type => [SearchType], {
    nullable: false
  })
  async searchTypes(@TypeGraphQL.Root() bandPost: BandPost, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BandPostSearchTypesArgs): Promise<SearchType[]> {
    return getPrismaFromContext(ctx).bandPost.findUnique({
      where: {
        id: bandPost.id,
      },
    }).searchTypes(args);
  }
}
