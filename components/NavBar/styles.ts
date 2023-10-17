import Animated from 'react-native-reanimated';
import styled from 'styled-components/native'

export const NavBarContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding-top: 50px;
    background: ${({theme}:any) => theme.COLORS.PRIMARY_700};
`;

export const LabelContainer = styled.View`
  background: ${({theme}:any) => theme.COLORS.PRIMARY_700};

`

export const PressableTheme = styled.Pressable`
    width: 60px;
    height: 36px;
    position: relative;
    border-radius: 30px; 
    background: ${({theme}:any) => theme.COLORS.PRIMARY_800};
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
    background: ${({theme}:any) => theme.COLORS.TEXT_PRIMARY};
    opacity: 0.6;
`;
export const ProfileImage = styled.Image`
    width: 42px;
    height:42px;
    border-radius: 21px; 
    margin-right: 14px;
`;

export const RowBetween = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: ${({theme}:any) => theme.PIXELS.LARGE}
    flex: 1;

`;

export const RowLabel = styled.View`

    flex-direction: row;
    width: 100%;
    gap: 14px;
    padding: ${({theme}:any) => theme.PIXELS.LARGE}
    flex: 1;

`