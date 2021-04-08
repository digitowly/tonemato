import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BandPostUpdateInput } from "../../../inputs/BandPostUpdateInput";
import { BandPostWhereUniqueInput } from "../../../inputs/BandPostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBandPostArgs {
  @TypeGraphQL.Field(_type => BandPostUpdateInput, {
    nullable: false
  })
  data!: BandPostUpdateInput;

  @TypeGraphQL.Field(_type => BandPostWhereUniqueInput, {
    nullable: false
  })
  where!: BandPostWhereUniqueInput;
}
