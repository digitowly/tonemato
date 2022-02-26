import { Field, Int, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Instrument } from './InstrumentEntity';
import { User } from './UserEntity';

@ObjectType()
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
    @OneToMany(() => Instrument, (instrument: Instrument) => instrument.name)
    preferredInstruments: Instrument[];

    // @Field(() => [String])
    // @Column()
    // preferredGenres: string[];
}
