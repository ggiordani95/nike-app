import styled from 'styled-components/native'

export const GlobalContainer = styled.View`
  flex: 1;
  background-color: ${({theme}:any) => theme.COLORS.BACKGROUND};
`;

export const GlobalHeaderText = styled.Text`
  font-size: ${({theme}:any) => theme.PIXELS.MEDIUM};
  color: ${({theme}:any) => theme.COLORS.TEXT_PRIMARY};
  font-weight: 400;
`

export const GlobalSmallTextSecondary = styled.Text`
  font-size: ${({theme}:any) => theme.PIXELS.SMALL};
  color: ${({theme}:any) => theme.COLORS.TEXT_SECONDARY};
  font-weight: 600;
 
`
export const CenteredView = styled.View`
  justify-content: center;
  align-items: center;
`

export const CenteredRowView = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`


export const GlobalPadding = styled.View`
  padding: ${({theme}:any) => theme.PIXELS.LARGE};
`

export const GlobalMargin = styled.View`
   margin-left: ${({theme}:any) => theme.PIXELS.LARGE};
   margin-right: ${({theme}:any) => theme.PIXELS.LARGE};

`