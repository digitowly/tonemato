import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SearchTypeAvgAggregate } from "../outputs/SearchTypeAvgAggregate";
import { SearchTypeCountAggregate } from "../outputs/SearchTypeCountAggregate";
import { SearchTypeMaxAggregate } from "../outputs/SearchTypeMaxAggregate";
import { SearchTypeMinAggregate } from "../outputs/SearchTypeMinAggregate";
import { SearchTypeSumAggregate } from "../outputs/SearchTypeSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateSearchType {
  @TypeGraphQL.Field(_type => SearchTypeCountAggregate, {
    nullable: true
  })
  count!: SearchTypeCountAggregate | null;

  @TypeGraphQL.Field(_type => SearchTypeAvgAggregate, {
    nullable: true
  })
  avg!: SearchTypeAvgAggregate | null;

  @TypeGraphQL.Field(_type => SearchTypeSumAggregate, {
    nullable: true
  })
  sum!: SearchTypeSumAggregate | null;

  @TypeGraphQL.Field(_type => SearchTypeMinAggregate, {
    nullable: true
  })
  min!: SearchTypeMinAggregate | null;

  @TypeGraphQL.Field(_type => SearchTypeMaxAggregate, {
    nullable: true
  })
  max!: SearchTypeMaxAggregate | null;
}
