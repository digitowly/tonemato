import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBandPostsInput } from "../inputs/UserCreateWithoutBandPostsInput";
import { UserUpdateWithoutBandPostsInput } from "../inputs/UserUpdateWithoutBandPostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutBandPostsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutBandPostsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutBandPostsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBandPostsInput, {
    nullable: false
  })
  create!: UserCreateWithoutBandPostsInput;
}
