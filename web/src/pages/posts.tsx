import PostCreator from '../components/Forms/PostCreator/PostCreator';
import PostsView from '../components/PostsView/PostsView';
import { useDisplayPostCreatorQuery } from '../generated/codegen_types';

const PostsPage: React.FC = () => {
    const { data } = useDisplayPostCreatorQuery();
    return (
        <>
            {data.displayPostCreator && <PostCreator />}
            <PostsView />
        </>
    );
};

export default PostsPage;
