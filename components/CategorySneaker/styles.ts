import styled from 'styled-components/native'

export const CategorySectionView = styled.TouchableOpacity`
    position: relative; 
    height: 200px;
    justify-content: center;
    align-items: center;
    width: width; 
    border-radius: 14px; 
    margin: 10px;

`

export const CategoryTextView = styled.View`
    position: absolute;
    justify-content: center;
    z-index: 3;
    top: -10px;
    padding: 12px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    background: ${({theme}) => theme.COLORS.TEXT_SECONDARY};

`

export const ProductTextName = styled.Text`
    font-size: 10px;
    font-weight: 400;
    color: #d3d3d3;

`