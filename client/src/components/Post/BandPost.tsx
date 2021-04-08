import { SearchType, User } from '../../generated/types';
import LinkButton from '../Buttons/LinkButton/LinkButton';
import styles from './Post.module.scss';

interface BandPost {
  title: string;
  body: string;
  author: {
    __typename?: 'User';
  } & Pick<User, 'name' | 'image'>;
  searchTypes: ({
    __typename?: 'SearchType';
  } & Pick<SearchType, 'amount' | 'instrument'>)[];
}

const BandPost: React.FC<BandPost> = ({ title, body, author, searchTypes }) => {
  return (
    <div className={styles.post}>
      <div className={styles['post__author']}>
        {author.image ? <img src={author.image} /> : <span>no image</span>}
        <b>{author.name}</b>
      </div>
      <h2>{title}</h2>
      <p>{body}</p>
      <div>
        {searchTypes.map((searchType, index) => (
          <div key={index}>
            <span>{searchType.amount}</span>
            <span>{searchType.instrument}</span>
          </div>
        ))}
      </div>
      <LinkButton />
    </div>
  );
};

export default BandPost;
