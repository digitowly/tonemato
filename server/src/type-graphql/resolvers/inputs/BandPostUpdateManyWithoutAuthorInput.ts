import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostCreateOrConnectWithoutAuthorInput } from "../inputs/BandPostCreateOrConnectWithoutAuthorInput";
import { BandPostCreateWithoutAuthorInput } from "../inputs/BandPostCreateWithoutAuthorInput";
import { BandPostScalarWhereInput } from "../inputs/BandPostScalarWhereInput";
import { BandPostUpdateManyWithWhereWithoutAuthorInput } from "../inputs/BandPostUpdateManyWithWhereWithoutAuthorInput";
import { BandPostUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/BandPostUpdateWithWhereUniqueWithoutAuthorInput";
import { BandPostUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/BandPostUpsertWithWhereUniqueWithoutAuthorInput";
import { BandPostWhereUniqueInput } from "../inputs/BandPostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostUpdateManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [BandPostCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: BandPostCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BandPostCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: BandPostCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BandPostUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: BandPostUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BandPostWhereUniqueInput], {
    nullable: true
  })
  connect?: BandPostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BandPostWhereUniqueInput], {
    nullable: true
  })
  set?: BandPostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BandPostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BandPostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BandPostWhereUniqueInput], {
    nullable: true
  })
  delete?: BandPostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BandPostUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: BandPostUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BandPostUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: BandPostUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BandPostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BandPostScalarWhereInput[] | undefined;
}
