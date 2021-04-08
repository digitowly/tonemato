import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumIntrumentFieldUpdateOperationsInput } from "../inputs/EnumIntrumentFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SearchTypeUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  amount?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumIntrumentFieldUpdateOperationsInput, {
    nullable: true
  })
  instrument?: EnumIntrumentFieldUpdateOperationsInput | undefined;
}
