import styled from 'styled-components/native'

export const SearchInput = styled.TextInput`
    height: ${({theme}) => theme.PIXELS.XXL};
    background-color: ${({theme}) => theme.COLORS.PRIMARY_900};
    border-radius: ${({theme}) => theme.PIXELS.LARGE};
    margin-top: 20px;
    padding-left: 40px;
`
