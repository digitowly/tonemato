import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BandPostCreateInput } from "../../../inputs/BandPostCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBandPostArgs {
  @TypeGraphQL.Field(_type => BandPostCreateInput, {
    nullable: false
  })
  data!: BandPostCreateInput;
}
