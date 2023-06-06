import styled from 'styled-components/native'


export const CategorySectionsContainer = styled.View`
    margin-left: 0px;
    margin-top: ${({theme}) => theme.PIXELS.MEDIUM};
    padding-bottom: 10px;
    padding-left: 12px;
    
`

export const SectionText = styled.Text`
    margin: 12px;
    color: ${({theme}) => theme.COLORS.TEXT_SECONDARY};
    font-weight: 400;
`

export const CategorySectionView = styled.View`

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
    top: -65px;
    padding: 12px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    background: ${({theme}) => theme.COLORS.PRIMARY_700};

`
export const ProductTextName = styled.Text`
    font-size: 10px;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.TEXT_PRIMARY};

`