import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostCreateNestedOneWithoutSearchTypesInput } from "../inputs/BandPostCreateNestedOneWithoutSearchTypesInput";
import { Intrument } from "../../enums/Intrument";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SearchTypeCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => Intrument, {
    nullable: false
  })
  instrument!: "GUITAR" | "BASS" | "DRUMS";

  @TypeGraphQL.Field(_type => BandPostCreateNestedOneWithoutSearchTypesInput, {
    nullable: true
  })
  bandPost?: BandPostCreateNestedOneWithoutSearchTypesInput | undefined;
}
