import { Genre } from '../entities/GenreEntity';
import { Instrument } from '../entities/InstrumentEntity';

export const initInstrumentInsert = () => {
    Instrument.insert({ name: 'guitar', category: 'string' });
    Instrument.insert({ name: 'bass', category: 'string' });
    Instrument.insert({ name: 'violin', category: 'string' });
};

export const initGenresInsert = () => {
    Genre.insert({ name: 'rock' });
    Genre.insert({ name: 'metal' });
    Genre.insert({ name: 'jazz' });
    Genre.insert({ name: 'blues' });
    Genre.insert({ name: 'hiphop' });
    Genre.insert({ name: 'pop' });
    Genre.insert({ name: 'folk' });
};
