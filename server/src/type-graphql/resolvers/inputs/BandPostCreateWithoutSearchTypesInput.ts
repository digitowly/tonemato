import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutBandPostsInput } from "../inputs/UserCreateNestedOneWithoutBandPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BandPostCreateWithoutSearchTypesInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  published?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBandPostsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutBandPostsInput;
}
