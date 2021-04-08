import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BandPostWhereUniqueInput } from "../../../inputs/BandPostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBandPostArgs {
  @TypeGraphQL.Field(_type => BandPostWhereUniqueInput, {
    nullable: false
  })
  where!: BandPostWhereUniqueInput;
}
