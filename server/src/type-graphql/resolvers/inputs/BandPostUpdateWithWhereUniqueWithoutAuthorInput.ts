import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostUpdateWithoutAuthorInput } from "../inputs/BandPostUpdateWithoutAuthorInput";
import { BandPostWhereUniqueInput } from "../inputs/BandPostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => BandPostWhereUniqueInput, {
    nullable: false
  })
  where!: BandPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => BandPostUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: BandPostUpdateWithoutAuthorInput;
}
