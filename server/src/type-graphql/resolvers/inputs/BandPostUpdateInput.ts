import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SearchTypeUpdateManyWithoutBandPostInput } from "../inputs/SearchTypeUpdateManyWithoutBandPostInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBandPostsInput } from "../inputs/UserUpdateOneRequiredWithoutBandPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  body?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  published?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBandPostsInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutBandPostsInput | undefined;

  @TypeGraphQL.Field(_type => SearchTypeUpdateManyWithoutBandPostInput, {
    nullable: true
  })
  searchTypes?: SearchTypeUpdateManyWithoutBandPostInput | undefined;
}
