import { displayPostCreatorVar } from '../../lib/apollo/cache';
import FilterButton from '../Buttons/FilterButton/FilterButton';
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import PostsList from '../PostsList/PostsLists';
import { PostViewTopBar } from './PostView.style';

const PostsView: React.FC = () => {
    return (
        <div>
            <PostViewTopBar>
                <FilterButton
                    label='filter'
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
