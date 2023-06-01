import Ionicons from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'

export const SearchInput = styled.TextInput.attrs((props) => ({
    placeholderTextColor: props.theme.COLORS.TEXT_PRIMARY,
}))`
    height: ${({theme}) => theme.PIXELS.XXL};
    background-color: ${({theme}) => theme.COLORS.PRIMARY_900};
    border-radius: ${({theme}) => theme.PIXELS.LARGE};
    margin-top: 20px;
    padding-left: 42px;
`
export const StyledIcon = styled(Ionicons)`
    color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
    position: absolute; 
    top:34px;
    left: 18px;
    z-index:2;
`