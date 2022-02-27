import { displayPostCreatorVar } from '../../lib/apollo/cache';
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import PostsList from '../PostsList/PostsLists';
import { PostViewTopBar } from './PostView.style';

const PostsView: React.FC = () => {
    return (
        <div>
            <PostViewTopBar>
                <PrimaryButton
                    label='create'
                    onClick={() => displayPostCreatorVar(true)}
                />
                <PrimaryButton
                    label='create post'
                    onClick={() => displayPostCreatorVar(true)}
                />
            </PostViewTopBar>
            <PostsList />
        </div>
    );
};

export default PostsView;
