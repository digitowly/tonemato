import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';
import { colors, depth } from '../../../styles/globals';

export const PostCreatorWrapper = styled.div`
    background-color: ${colors.snow};
    border-radius: 0.5rem;
    padding: 1rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    z-index: ${depth.modal};
`;

export const PostCreatorHeader = styled.div`
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
`;

export const PostCreatorFooter = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const PostCreatorFormWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PostCreatorFormSection = styled.div`
    width: 50%;
    padding-top: 3rem;
`;

export const PostCreatorFormElement = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
`;
export const PostCreatorFormElementLabel = styled.div`
    width: 100px;
    padding-top: 5px;
    color: ${Colors.presley};
    font-weight: bold;
`;
