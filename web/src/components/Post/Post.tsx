import React from 'react';
import LinkButton from '../Buttons/LinkButton/LinkButton';
import { H2 } from '../Text/Headline';
import styles from './Post.module.scss';

interface PostProps {
  title: string;
  body: string;
  author: {
    username: string;
    id: number;
  };
}

const Post: React.FC<PostProps> = ({ title, body, author }) => {
  return (
    <div className={styles.post}>
      <div className={styles['post__author']}>
        {/* {author.image ? <img src={author.image} /> : <span>no image</span>} */}
        <b>{author.username}</b>
      </div>
      <H2>{title}</H2>
      <p>{body}</p>
      <LinkButton label='more' />
    </div>
  );
};

export default Post;
