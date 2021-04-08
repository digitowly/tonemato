import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostCreateOrConnectWithoutAuthorInput } from "../inputs/BandPostCreateOrConnectWithoutAuthorInput";
import { BandPostCreateWithoutAuthorInput } from "../inputs/BandPostCreateWithoutAuthorInput";
import { BandPostWhereUniqueInput } from "../inputs/BandPostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [BandPostCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: BandPostCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BandPostCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: BandPostCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [BandPostWhereUniqueInput], {
    nullable: true
  })
  connect?: BandPostWhereUniqueInput[] | undefined;
}
