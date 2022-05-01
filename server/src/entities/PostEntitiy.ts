import { Field, Int, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Genre } from './GenreEntity';
import { Instrument } from './InstrumentEntity';
import { User } from './UserEntity';

@ObjectType()
@Entity('posts')
export abstract class Post extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    body: string;

    @Field(() => User)
    @ManyToOne(() => User, (author: User) => author.posts)
    author: User;
}

@ObjectType()
@Entity('musician_posts')
export class MusicianPost extends Post {
    @Field(() => [Instrument])
    @ManyToMany(() => Instrument, { eager: true })
    @JoinTable()
    preferredInstruments: Instrument[];

    @Field(() => [Genre])
    @ManyToMany(() => Genre, { eager: true, nullable: true })
    @JoinTable()
    preferredGenres: Genre[];
}
