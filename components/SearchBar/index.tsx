import { SearchInput, StyledIcon } from "./styles";
import { GlobalSmallTextSecondary } from '../../app/globalStyles'

import { useState } from "react";
import { View } from "react-native";

export default function index() {

   const [isInputBlur, setIsInputBlur] = useState<boolean>(true);

  return (
    <View style={{position:'relative'}}>
    {isInputBlur && 
        <>
        <StyledIcon size={18} name="search"/>
        </> 
    }
        <SearchInput placeholder={isInputBlur ? 'Pesquisar...' : ''} onFocus={() => setIsInputBlur(false)} onBlur={() => setIsInputBlur(true)} />
    </View>
  )
}