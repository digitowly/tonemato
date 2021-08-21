import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { Post } from './PostEntitiy';

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  email: string;

  @Field(() => [Post])
  @OneToMany(() => Post, (post: Post) => post.author)
  posts: Post[];

  @Column()
  password: string;

  @Column('int', { default: 0 })
  tokenVersion: number;
}
