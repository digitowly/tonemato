import PostsFilter from '../PostsFilter/PostsFilter';
import PostsList from '../PostsList/PostsLists';
import styles from './PostsView.module.scss';

const PostsView: React.FC = () => {
  return (
    <div className={styles['posts-view']}>
      <PostsFilter />
      <PostsList />
    </div>
  );
};

export default PostsView;
