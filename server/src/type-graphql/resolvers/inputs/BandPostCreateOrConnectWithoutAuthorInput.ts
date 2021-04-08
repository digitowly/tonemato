import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostCreateWithoutAuthorInput } from "../inputs/BandPostCreateWithoutAuthorInput";
import { BandPostWhereUniqueInput } from "../inputs/BandPostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => BandPostWhereUniqueInput, {
    nullable: false
  })
  where!: BandPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => BandPostCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: BandPostCreateWithoutAuthorInput;
}
