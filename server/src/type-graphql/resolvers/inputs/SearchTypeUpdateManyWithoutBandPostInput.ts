import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SearchTypeCreateOrConnectWithoutBandPostInput } from "../inputs/SearchTypeCreateOrConnectWithoutBandPostInput";
import { SearchTypeCreateWithoutBandPostInput } from "../inputs/SearchTypeCreateWithoutBandPostInput";
import { SearchTypeScalarWhereInput } from "../inputs/SearchTypeScalarWhereInput";
import { SearchTypeUpdateManyWithWhereWithoutBandPostInput } from "../inputs/SearchTypeUpdateManyWithWhereWithoutBandPostInput";
import { SearchTypeUpdateWithWhereUniqueWithoutBandPostInput } from "../inputs/SearchTypeUpdateWithWhereUniqueWithoutBandPostInput";
import { SearchTypeUpsertWithWhereUniqueWithoutBandPostInput } from "../inputs/SearchTypeUpsertWithWhereUniqueWithoutBandPostInput";
import { SearchTypeWhereUniqueInput } from "../inputs/SearchTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SearchTypeUpdateManyWithoutBandPostInput {
  @TypeGraphQL.Field(_type => [SearchTypeCreateWithoutBandPostInput], {
    nullable: true
  })
  create?: SearchTypeCreateWithoutBandPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeCreateOrConnectWithoutBandPostInput], {
    nullable: true
  })
  connectOrCreate?: SearchTypeCreateOrConnectWithoutBandPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeUpsertWithWhereUniqueWithoutBandPostInput], {
    nullable: true
  })
  upsert?: SearchTypeUpsertWithWhereUniqueWithoutBandPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: SearchTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeWhereUniqueInput], {
    nullable: true
  })
  set?: SearchTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SearchTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeWhereUniqueInput], {
    nullable: true
  })
  delete?: SearchTypeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeUpdateWithWhereUniqueWithoutBandPostInput], {
    nullable: true
  })
  update?: SearchTypeUpdateWithWhereUniqueWithoutBandPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeUpdateManyWithWhereWithoutBandPostInput], {
    nullable: true
  })
  updateMany?: SearchTypeUpdateManyWithWhereWithoutBandPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SearchTypeScalarWhereInput[] | undefined;
}
