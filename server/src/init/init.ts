import { Instrument } from '../entities/InstrumentEntity';

export const initInstrumentInsert = () => {
  Instrument.insert({ name: 'guitar', category: 'string' });
  Instrument.insert({ name: 'bass', category: 'string' });
  Instrument.insert({ name: 'voilin', category: 'string' });
};
