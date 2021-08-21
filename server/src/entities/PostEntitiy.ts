import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './UserEntity';

@ObjectType()
@Entity('posts')
export class Post extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  body: string;

  @Field({ nullable: true })
  @Column('int', { nullable: true })
  authorId: number;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, (author) => author.posts)
  author: User;
}
