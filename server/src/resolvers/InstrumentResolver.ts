import { Query, Resolver } from 'type-graphql';
import { Instrument } from '../entities/InstrumentEntity';

@Resolver()
export class InstrumentResolver {
  @Query(() => [Instrument])
  instruments() {
    return Instrument.find();
  }
}
