import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Intrument } from "../../enums/Intrument";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumIntrumentFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Intrument, {
    nullable: true
  })
  set?: "GUITAR" | "BASS" | "DRUMS" | undefined;
}
