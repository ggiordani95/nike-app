import { Pressable, View, useWindowDimensions } from "react-native";
import { GlobalContainer, GlobalHeaderText, GlobalMargin } from '../globalStyles';
import { ThemeProvider } from 'styled-components/native'
import light from "../../theme/light"
import dark from "../../theme/dark"
import NavBar from "../../components/NavBar";
import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import useThemeStore from "../../stores/theme";
import CategorySections from "../../components/CategorySections";

export default function Dashboard() {
  const { width, height } = useWindowDimensions();
  const [isThemeDark, setIsThemeDark] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const theme = useThemeStore(state => state.isDarkMode);

  useEffect(()=>{
    setIsThemeDark(!isThemeDark);
    
  },[theme])

  return (
      <ThemeProvider theme={theme ? dark : light}>
        <GlobalContainer>
          <NavBar light={theme ? false : true}/>
          <GlobalMargin>
           <SearchBar/>
          </GlobalMargin>
          <CategorySections/>
          
        </GlobalContainer>
      </ThemeProvider>
  );
}

