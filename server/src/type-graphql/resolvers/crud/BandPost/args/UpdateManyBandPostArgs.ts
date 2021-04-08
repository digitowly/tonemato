import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BandPostUpdateManyMutationInput } from "../../../inputs/BandPostUpdateManyMutationInput";
import { BandPostWhereInput } from "../../../inputs/BandPostWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBandPostArgs {
  @TypeGraphQL.Field(_type => BandPostUpdateManyMutationInput, {
    nullable: false
  })
  data!: BandPostUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BandPostWhereInput, {
    nullable: true
  })
  where?: BandPostWhereInput | undefined;
}
