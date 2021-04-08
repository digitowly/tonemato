import * as TypeGraphQL from "type-graphql";
import { BandPost } from "../../../models/BandPost";
import { SearchType } from "../../../models/SearchType";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SearchType)
export class SearchTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => BandPost, {
    nullable: true
  })
  async bandPost(@TypeGraphQL.Root() searchType: SearchType, @TypeGraphQL.Ctx() ctx: any): Promise<BandPost | null> {
    return getPrismaFromContext(ctx).searchType.findUnique({
      where: {
        id: searchType.id,
      },
    }).bandPost({});
  }
}
