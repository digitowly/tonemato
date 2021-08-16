import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import BandPostsList from './BandPostsList';
import style from './PostsList.module.scss';

const PostsList: React.FC = () => {
  return (
    <div className={style['posts-list']}>
      <div className={style['posts-list__header']}>
        <h1>Posts</h1>
        <PrimaryButton label='create' />
      </div>
      {/* {data?.posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          author={post.author}
        />
      ))} */}
      <BandPostsList />
    </div>
  );
};

export default PostsList;