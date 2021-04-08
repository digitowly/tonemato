import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BandPostCreateInput } from "../../../inputs/BandPostCreateInput";
import { BandPostUpdateInput } from "../../../inputs/BandPostUpdateInput";
import { BandPostWhereUniqueInput } from "../../../inputs/BandPostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBandPostArgs {
  @TypeGraphQL.Field(_type => BandPostWhereUniqueInput, {
    nullable: false
  })
  where!: BandPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => BandPostCreateInput, {
    nullable: false
  })
  create!: BandPostCreateInput;

  @TypeGraphQL.Field(_type => BandPostUpdateInput, {
    nullable: false
  })
  update!: BandPostUpdateInput;
}
