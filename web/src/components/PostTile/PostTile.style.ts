import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const PostTileWrapper = styled.div`
    background-color: ${Colors.snow};
    border: 3px solid ${Colors.snow};
    height: 224px;
    width: 300px;
    border-radius: 1rem;
    padding: 1.25rem;
    transition: all 0.25s ease-in-out;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const PostTileLink = styled.a`
    cursor: pointer;
    margin-right: 2.75rem;

    &:hover ${PostTileWrapper} {
        border: 3px solid ${Colors.jimmy};
    }
`;

export const PostTileAuthorName = styled.p`
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

export const PostTileTitle = styled.h3`
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 0.75rem;
`;

export const PostTileBody = styled.p`
    font-size: 12px;
`;

export const PostTileTagsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 0.5rem;
`;

export const PostTileLocation = styled.div`
    align-items: center;
    display: flex;
`;

export const PostTileLocationDot = styled.div`
    width: 9px;
    height: 9px;
    border-radius: 500px;
    background-color: ${Colors.presley};
    margin-right: 0.5rem;
`;
