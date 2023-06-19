import { GlobalContainer, GlobalMargin } from '../globalStyles';
import { ThemeProvider } from 'styled-components/native'
import light from "../../theme/light"
import dark from "../../theme/dark"
import NavBar from "../../components/NavBar";
import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import useThemeStore from "../../stores/theme";
import CategorySections from "../../components/CategorySections";
import { Link } from 'expo-router';
import { View, useWindowDimensions } from 'react-native';

export default function Dashboard() {

  const [isThemeDark, setIsThemeDark] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {height} = useWindowDimensions();

  const theme = useThemeStore(state => state.isDarkMode);

  useEffect(()=>{
    setIsThemeDark(!isThemeDark);
    
  },[theme])

  return (
      <ThemeProvider theme={theme ? dark : light}>
        <GlobalContainer>
          <NavBar light={theme ? false : true}/>
          <CategorySections/>
        </GlobalContainer>
      </ThemeProvider>
  );
}

