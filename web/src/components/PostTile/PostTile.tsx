import React from 'react';
import { Colors } from '../../styles/Colors';
import Tag from '../Tag/Tag';
import {
    PostTileAuthorName,
    PostTileLink,
    PostTileLocation,
    PostTileLocationDot,
    PostTileTagsWrapper,
    PostTileTitle,
    PostTileWrapper,
} from './PostTile.style';

export type PostTileType = {
    title: string;
    body: string;
    author: {
        username: string;
        id: number;
    };
    preferredInstruments: {
        name: string;
        id: number;
    }[];
    preferredGenres: {
        name: string;
        id: number;
    }[];
};

interface PostTileProps {
    postTileData: PostTileType;
}

const PostTile: React.FC<PostTileProps> = ({ postTileData }) => {
    const {
        author,
        title,
        preferredGenres,
        preferredInstruments,
    } = postTileData;
    return (
        <PostTileLink>
            <PostTileWrapper>
                <Tag backgroundColor={Colors.white} color={Colors.onyx}>
                    <PostTileLocation>
                        <PostTileLocationDot />
                        <p>Köln</p>
                    </PostTileLocation>
                </Tag>
                <div>
                    <PostTileTagsWrapper>
                        {preferredInstruments.map(instrument => (
                            <Tag
                                backgroundColor={Colors.jimmy}
                                color={Colors.onyx}
                                key={instrument.id}>
                                <p>{instrument.name}</p>
                            </Tag>
                        ))}
                    </PostTileTagsWrapper>
                    <PostTileTagsWrapper>
                        {preferredGenres.map(genre => (
                            <Tag
                                backgroundColor={Colors.onyx}
                                color={Colors.jimmy}
                                key={genre.id}>
                                <p>{genre.name}</p>
                            </Tag>
                        ))}
                    </PostTileTagsWrapper>
                </div>
            </PostTileWrapper>
            <PostTileAuthorName>{author.username}</PostTileAuthorName>
            <PostTileTitle>{title}</PostTileTitle>
        </PostTileLink>
    );
};

export default PostTile;
