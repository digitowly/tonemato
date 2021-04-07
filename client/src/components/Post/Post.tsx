import { User } from '../../generated/types';
import styles from './Post.module.scss';

interface PostProps {
  title: string;
  body: string;
  author: {
    __typename?: 'User';
  } & Pick<User, 'name' | 'image'>;
}

const Post: React.FC<PostProps> = ({ title, body, author }) => {
  return (
    <div className={styles.post}>
      <h1>{title}</h1>
      <p>{body}</p>
      <div className={styles['post__author']}>
        <b>{author.name}</b>
        {author.image ? <img src={author.image} /> : <span>no image</span>}
      </div>
    </div>
  );
};

export default Post;
