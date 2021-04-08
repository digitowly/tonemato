import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostCreateOrConnectWithoutSearchTypesInput } from "../inputs/BandPostCreateOrConnectWithoutSearchTypesInput";
import { BandPostCreateWithoutSearchTypesInput } from "../inputs/BandPostCreateWithoutSearchTypesInput";
import { BandPostUpdateWithoutSearchTypesInput } from "../inputs/BandPostUpdateWithoutSearchTypesInput";
import { BandPostUpsertWithoutSearchTypesInput } from "../inputs/BandPostUpsertWithoutSearchTypesInput";
import { BandPostWhereUniqueInput } from "../inputs/BandPostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostUpdateOneWithoutSearchTypesInput {
  @TypeGraphQL.Field(_type => BandPostCreateWithoutSearchTypesInput, {
    nullable: true
  })
  create?: BandPostCreateWithoutSearchTypesInput | undefined;

  @TypeGraphQL.Field(_type => BandPostCreateOrConnectWithoutSearchTypesInput, {
    nullable: true
  })
  connectOrCreate?: BandPostCreateOrConnectWithoutSearchTypesInput | undefined;

  @TypeGraphQL.Field(_type => BandPostUpsertWithoutSearchTypesInput, {
    nullable: true
  })
  upsert?: BandPostUpsertWithoutSearchTypesInput | undefined;

  @TypeGraphQL.Field(_type => BandPostWhereUniqueInput, {
    nullable: true
  })
  connect?: BandPostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => BandPostUpdateWithoutSearchTypesInput, {
    nullable: true
  })
  update?: BandPostUpdateWithoutSearchTypesInput | undefined;
}
