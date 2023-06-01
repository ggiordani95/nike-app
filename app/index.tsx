import { Pressable, useWindowDimensions } from "react-native";
import { GlobalContainer, GlobalHeaderText } from './globalStyles';
import { ThemeProvider } from 'styled-components/native'
import light from "../theme/light"
import dark from "../theme/dark"
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import useThemeStore from "../stores/theme";

export default function Page() {
  const { width, height } = useWindowDimensions();
  const [isThemeDark, setIsThemeDark] = useState<boolean>(true);
  const theme = useThemeStore(state => state.isDarkMode);

  useEffect(()=>{
    setIsThemeDark(!isThemeDark)
  },[theme])

  return (
    <ThemeProvider theme={theme ? dark : light}>
      <GlobalContainer>
        <NavBar light={theme ? false : true}/>
        <SearchBar/>
      </GlobalContainer>
    </ThemeProvider>
  );
}

