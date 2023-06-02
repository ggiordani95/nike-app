import Ionicons from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'

export const SearchInput = styled.TextInput.attrs((props) => ({
    placeholderTextColor: props.theme.COLORS.TEXT_SECONDARY,
}))`
    height: 56px;
    background-color: ${({theme}) => theme.COLORS.PRIMARY_900};
    border-radius: ${({theme}) => theme.PIXELS.EXTRALARGE};
    margin-top: 20px;
    padding-left: 20px;
    color: ${({theme}) => theme.COLORS.TEXT_SECONDARY};
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