import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SearchTypeCreateOrConnectWithoutBandPostInput } from "../inputs/SearchTypeCreateOrConnectWithoutBandPostInput";
import { SearchTypeCreateWithoutBandPostInput } from "../inputs/SearchTypeCreateWithoutBandPostInput";
import { SearchTypeWhereUniqueInput } from "../inputs/SearchTypeWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SearchTypeCreateNestedManyWithoutBandPostInput {
  @TypeGraphQL.Field(_type => [SearchTypeCreateWithoutBandPostInput], {
    nullable: true
  })
  create?: SearchTypeCreateWithoutBandPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeCreateOrConnectWithoutBandPostInput], {
    nullable: true
  })
  connectOrCreate?: SearchTypeCreateOrConnectWithoutBandPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [SearchTypeWhereUniqueInput], {
    nullable: true
  })
  connect?: SearchTypeWhereUniqueInput[] | undefined;
}
