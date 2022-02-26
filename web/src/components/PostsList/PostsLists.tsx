import React from 'react';
import { useListMusicianPostsQuery } from '../../generated/codegen_types';
import { displayPostCreatorVar } from '../../lib/apollo/cache';
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import Post from '../Post/Post';
import { H1 } from '../Text/Headline';
import BandPostsList from './BandPostsList';
import style from './PostsList.module.scss';

const PostsList: React.FC = () => {
    // const {} = useList
    const { data, loading, error } = useListMusicianPostsQuery();

    console.log(data);

    return (
        <div className={style['posts-list']}>
            <div className={style['posts-list__header']}>
                <H1>Posts</H1>
                <PrimaryButton
                    label='create'
                    onClick={() => displayPostCreatorVar(true)}
                />
            </div>
            {data?.musicianPosts.map(post => (
                <Post
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    author={post.author}
                />
            ))}
            <BandPostsList />
        </div>
    );
};

export default PostsList;
