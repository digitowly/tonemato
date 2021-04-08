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
      <div className={styles['post__author']}>
        {author.image ? <img src={author.image} /> : <span>no image</span>}
        <b>{author.name}</b>
      </div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
