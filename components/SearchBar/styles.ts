import Ionicons from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'

export const SearchInput = styled.TextInput.attrs((props:any) => ({
    placeholderTextColor: props.theme.COLORS.TEXT_PRIMARY,
}))`
    height: 56px;
    background-color: ${({theme}:any) => theme.COLORS.PRIMARY_700};
    border-radius: ${({theme}:any) => theme.PIXELS.EXTRALARGE};
    margin-top: 20px;
    padding-left: 20px;
    color: ${({theme}:any) => theme.COLORS.TEXT_PRIMARY};
`
export const StyledIconRight = styled(Ionicons)`
    color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};
    position: absolute; 
    top:39px;
    right: 24px;
    z-index:2;
`
export const SearchInputContainer = styled.View`
    position: relative;
`