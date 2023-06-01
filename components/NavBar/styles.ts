import styled from 'styled-components/native'

export const NavBarContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const PressableTheme = styled.Pressable`
    width: 74px;
    height: 40px;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 24px; 
    background: ${({theme}) => theme.COLORS.PRIMARY_700};
    margin-left: 20px;
`
export const Rounded = styled.View`
    height: 40px;
    width: 44px;
    border-radius: 24px;
    position: absolute;
    z-index: 3;
    left: 0px;
    background: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
    opacity: 0.6;
`