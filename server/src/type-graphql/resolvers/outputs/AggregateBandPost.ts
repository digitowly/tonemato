import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BandPostAvgAggregate } from "../outputs/BandPostAvgAggregate";
import { BandPostCountAggregate } from "../outputs/BandPostCountAggregate";
import { BandPostMaxAggregate } from "../outputs/BandPostMaxAggregate";
import { BandPostMinAggregate } from "../outputs/BandPostMinAggregate";
import { BandPostSumAggregate } from "../outputs/BandPostSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateBandPost {
  @TypeGraphQL.Field(_type => BandPostCountAggregate, {
    nullable: true
  })
  count!: BandPostCountAggregate | null;

  @TypeGraphQL.Field(_type => BandPostAvgAggregate, {
    nullable: true
  })
  avg!: BandPostAvgAggregate | null;

  @TypeGraphQL.Field(_type => BandPostSumAggregate, {
    nullable: true
  })
  sum!: BandPostSumAggregate | null;

  @TypeGraphQL.Field(_type => BandPostMinAggregate, {
    nullable: true
  })
  min!: BandPostMinAggregate | null;

  @TypeGraphQL.Field(_type => BandPostMaxAggregate, {
    nullable: true
  })
  max!: BandPostMaxAggregate | null;
}
