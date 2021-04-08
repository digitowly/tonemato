import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostCreateWithoutSearchTypesInput } from "../inputs/BandPostCreateWithoutSearchTypesInput";
import { BandPostWhereUniqueInput } from "../inputs/BandPostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostCreateOrConnectWithoutSearchTypesInput {
  @TypeGraphQL.Field(_type => BandPostWhereUniqueInput, {
    nullable: false
  })
  where!: BandPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => BandPostCreateWithoutSearchTypesInput, {
    nullable: false
  })
  create!: BandPostCreateWithoutSearchTypesInput;
}
