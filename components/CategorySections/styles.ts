import styled from 'styled-components/native'

export const CategorySectionsContainer = styled.View`
    margin-left: 0px;
    padding-bottom: 10px;
    justify-content: center;
    align-items: center;
`

export const SectionText = styled.Text`
    margin: 14px;
    padding: 6px;
    font-size: 13px;
    color: ${({theme}:any) => theme.COLORS.TEXT_SECONDARY};
    font-weight: 400;
`

export const CategorySectionView = styled.TouchableOpacity`
    
    position: relative; 
    height: 200px;
    justify-content: center;
    align-items: center;
    width: width; 
    border-radius: 14px; 
    margin: 10px;

`

export const FlatListCategories = styled.FlatList`
    z-index: 4;
    background-color: #c7c7c7;


`