import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BandPostOrderByInput } from "../../../inputs/BandPostOrderByInput";
import { BandPostWhereInput } from "../../../inputs/BandPostWhereInput";
import { BandPostWhereUniqueInput } from "../../../inputs/BandPostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBandPostArgs {
  @TypeGraphQL.Field(_type => BandPostWhereInput, {
    nullable: true
  })
  where?: BandPostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BandPostOrderByInput], {
    nullable: true
  })
  orderBy?: BandPostOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => BandPostWhereUniqueInput, {
    nullable: true
  })
  cursor?: BandPostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
