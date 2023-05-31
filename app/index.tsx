import { useWindowDimensions } from "react-native";
import { GlobalContainer, GlobalHeaderText } from './globalStyles';
import { ThemeProvider } from 'styled-components/native'
import light from "../theme/light"
import dark from "../theme/dark"
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";


export default function Page() {
  const { width, height } = useWindowDimensions();
  const [isThemeDark, setIsThemeDark] = useState<boolean>(true);

  // useEffect(()=>{

  //   const delay = setInterval(()=>{
  //     setIsThemeDark(!isThemeDark);
  //   },2000)

  //   return () => {
  //     clearInterval(delay);
  //   };
  // },[isThemeDark]);


  return (
    <ThemeProvider theme={isThemeDark ? dark : light}>
      <GlobalContainer>
        <NavBar light={isThemeDark ? false : true}/>
        <SearchBar/>
      </GlobalContainer>
    </ThemeProvider>
  );
}

