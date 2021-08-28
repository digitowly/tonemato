import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, Float, Int, ObjectType } from 'type-graphql';
import { Post } from './PostEntitiy';
import { Instrument } from './InstrumentEntity';

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  email: string;

  @Column()
  password: string;

  @Column('int', { default: 0 })
  tokenVersion: number;

  @Field(() => [Post])
  @OneToMany(() => Post, (post: Post) => post.author)
  posts: Post[];

  @Field(() => [Instrument])
  @ManyToMany(() => Instrument)
  @JoinTable()
  instruments: Instrument[];
}
