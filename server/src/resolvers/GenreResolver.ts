import { Query, Resolver } from 'type-graphql';
import { Genre } from '../entities/GenreEntity';

@Resolver()
export class GenreResolver {
    @Query(() => [Genre])
    genres() {
        return Genre.find();
    }
}
