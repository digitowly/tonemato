import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostScalarWhereInput } from "../inputs/BandPostScalarWhereInput";
import { BandPostUpdateManyMutationInput } from "../inputs/BandPostUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => BandPostScalarWhereInput, {
    nullable: false
  })
  where!: BandPostScalarWhereInput;

  @TypeGraphQL.Field(_type => BandPostUpdateManyMutationInput, {
    nullable: false
  })
  data!: BandPostUpdateManyMutationInput;
}
