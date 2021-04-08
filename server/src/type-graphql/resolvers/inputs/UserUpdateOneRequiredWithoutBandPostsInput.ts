import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBandPostsInput } from "../inputs/UserCreateOrConnectWithoutBandPostsInput";
import { UserCreateWithoutBandPostsInput } from "../inputs/UserCreateWithoutBandPostsInput";
import { UserUpdateWithoutBandPostsInput } from "../inputs/UserUpdateWithoutBandPostsInput";
import { UserUpsertWithoutBandPostsInput } from "../inputs/UserUpsertWithoutBandPostsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutBandPostsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBandPostsInput, {
    nullable: true
  })
  create?: UserCreateWithoutBandPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBandPostsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBandPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBandPostsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutBandPostsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBandPostsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutBandPostsInput | undefined;
}
