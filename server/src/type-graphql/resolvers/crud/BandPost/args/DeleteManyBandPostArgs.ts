import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BandPostWhereInput } from "../../../inputs/BandPostWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBandPostArgs {
  @TypeGraphQL.Field(_type => BandPostWhereInput, {
    nullable: true
  })
  where?: BandPostWhereInput | undefined;
}
