import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostCreateWithoutAuthorInput } from "../inputs/BandPostCreateWithoutAuthorInput";
import { BandPostUpdateWithoutAuthorInput } from "../inputs/BandPostUpdateWithoutAuthorInput";
import { BandPostWhereUniqueInput } from "../inputs/BandPostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => BandPostWhereUniqueInput, {
    nullable: false
  })
  where!: BandPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => BandPostUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: BandPostUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => BandPostCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: BandPostCreateWithoutAuthorInput;
}
