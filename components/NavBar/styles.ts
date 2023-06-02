import Animated from 'react-native-reanimated';
import styled from 'styled-components/native'

export const NavBarContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding-bottom: ${({theme}) => theme.PIXELS.LARGE};
    padding-top: 50px;
    background: ${({theme}) => theme.COLORS.PRIMARY_900};
`;

export const PressableTheme = styled.Pressable`
    width: 60px;
    height: 36px;
    position: relative;
    border-radius: 30px; 
    background: ${({theme}) => theme.COLORS.PRIMARY_700};
    margin-left: 20px;
`;

export const RoundedToggle = styled(Animated.View)`
    height: 30px;
    width: 30px;
    border-radius: 30px;
    top: 3px;
    position: absolute;
    left: 18px;
    z-index: 3;
    background: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
    opacity: 0.6;
`;
export const ProfileImage = styled.Image`
    height: 40px;
    width: 40px;
    border-radius:20px;
`;

export const RowBetween = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: ${({theme}) => theme.PIXELS.LARGE}
    flex: 1;

`;