import styled from 'styled-components';
import { Colors } from '../../styles/Colors';
import { Spacing } from '../../styles/Spacing';

export const ProfileWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const ProfileSection = styled.section<{ isGrey?: boolean }>`
    padding: ${Spacing.xs};
    background-color: ${({ isGrey }) => (isGrey ? Colors.snow : 'transparent')};
    border-radius: 10px;
`;

export const ProfileSectionInputWrapper = styled.section<{ isGrey?: boolean }>`
    padding-bottom: ${Spacing.xs};
    background-color: ${({ isGrey }) => (isGrey ? Colors.snow : 'transparent')};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;
export const ProfileSectionInputField = styled.section<{ isGrey?: boolean }>`
    height: 30px;
`;
