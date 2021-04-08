import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostCreateOrConnectWithoutSearchTypesInput } from "../inputs/BandPostCreateOrConnectWithoutSearchTypesInput";
import { BandPostCreateWithoutSearchTypesInput } from "../inputs/BandPostCreateWithoutSearchTypesInput";
import { BandPostWhereUniqueInput } from "../inputs/BandPostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostCreateNestedOneWithoutSearchTypesInput {
  @TypeGraphQL.Field(_type => BandPostCreateWithoutSearchTypesInput, {
    nullable: true
  })
  create?: BandPostCreateWithoutSearchTypesInput | undefined;

  @TypeGraphQL.Field(_type => BandPostCreateOrConnectWithoutSearchTypesInput, {
    nullable: true
  })
  connectOrCreate?: BandPostCreateOrConnectWithoutSearchTypesInput | undefined;

  @TypeGraphQL.Field(_type => BandPostWhereUniqueInput, {
    nullable: true
  })
  connect?: BandPostWhereUniqueInput | undefined;
}
