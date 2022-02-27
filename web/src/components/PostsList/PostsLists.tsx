import React from 'react';
import { useListMusicianPostsQuery } from '../../generated/codegen_types';
import PostTile, { PostTileType } from '../PostTile/PostTile';
import { H1 } from '../Text/Headline';
import { PostListWrapper } from './PostList.style';

const PostsList: React.FC = () => {
    const { data, loading, error } = useListMusicianPostsQuery();

    return (
        <div>
            <div>
                <H1>Suche Band</H1>
            </div>
            <PostListWrapper>
                {data?.musicianPosts.map(post => {
                    console.log(post);
                    return (
                        <PostTile
                            key={post.id}
                            postTileData={post as PostTileType}
                        />
                    );
                })}
            </PostListWrapper>
        </div>
    );
};

export default PostsList;
