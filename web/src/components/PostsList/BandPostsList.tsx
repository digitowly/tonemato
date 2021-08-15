import { useQuery } from '@apollo/client';
import { ListBandPostsQuery } from '../../generated/types';
import LIST_BAND_POSTS from '../../graphql/queries/ListBandPosts.graphql';
import BandPost from '../Post/BandPost';

const BandPostsList: React.FC = () => {
  const { data } = useQuery<ListBandPostsQuery>(LIST_BAND_POSTS);
  return (
    <>
      {data?.bandPosts.map((post) => (
        <BandPost
          key={post.id}
          title={post.title}
          body={post.body}
          author={post.author}
          searchTypes={post.searchTypes}
        />
      ))}
    </>
  );
};

export default BandPostsList;
