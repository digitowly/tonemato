import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const PostTileWrapper = styled.div`
    background-color: ${Colors.snow};
    border: 3px solid ${Colors.snow};
    border-radius: 1rem;
    padding: 1.25rem;
    transition: all 0.25s ease-in-out;
    margin-bottom: 0.35rem;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    background: linear-gradient(
        299.63deg,
        #3822b3 0%,
        #333333 47.71%,
        #3e3e3e 100%
    );
    overflow: hidden;
    color: ${Colors.snow};
`;

export const PostTileLink = styled.a`
    cursor: pointer;
    margin-bottom: 2.75rem;
    width: 100%;
    height: 224px;

    &:hover ${PostTileWrapper} {
        border: 3px solid ${Colors.jimmy};
        transform: scale(1.02);
    }
`;

export const PostTileAuthorName = styled.p`
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

export const PostTileTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
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

export const PostTileTitleSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const PostTileFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem;
`;

export const PostTileDate = styled.small`
    color: ${Colors.wolf};
    font-weight: bold;
    font-size: 11px;
`;
export const PostTileLocation = styled.div`
    align-items: center;
    display: flex;

    small {
        font-weight: bold;
    }
`;

export const PostTileLocationDot = styled.div`
    width: 9px;
    height: 9px;
    border-radius: 500px;
    background-color: ${Colors.presley};
    margin-right: 0.5rem;
`;
