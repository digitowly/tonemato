import styled from 'styled-components';
import { colors } from '../../styles/globals';

export const FilterWrapper = styled.div`
  max-width: 25rem;
`;

export const FilterForm = styled.div`
  background: ${colors.primary};
  border-radius: 0 0 1rem 1rem;
  padding: 1rem;
`;

export const FilterTabs = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterTab = styled.div<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? colors.primary : colors.lighgrey};
  border-radius: 1rem 1rem 0 0;
  padding: 1rem;
`;
