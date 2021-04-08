import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostCreateWithoutSearchTypesInput } from "../inputs/BandPostCreateWithoutSearchTypesInput";
import { BandPostUpdateWithoutSearchTypesInput } from "../inputs/BandPostUpdateWithoutSearchTypesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostUpsertWithoutSearchTypesInput {
  @TypeGraphQL.Field(_type => BandPostUpdateWithoutSearchTypesInput, {
    nullable: false
  })
  update!: BandPostUpdateWithoutSearchTypesInput;

  @TypeGraphQL.Field(_type => BandPostCreateWithoutSearchTypesInput, {
    nullable: false
  })
  create!: BandPostCreateWithoutSearchTypesInput;
}
