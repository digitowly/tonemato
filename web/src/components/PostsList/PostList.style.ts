import styled from 'styled-components';

export const PostListWrapper = styled.div`
    align-items: center;
    display: grid;
    width: 100%;
    margin-top: 2rem;
    grid-gap: 10px;

    @media (min-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;
