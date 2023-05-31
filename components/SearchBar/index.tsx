import { SearchInput } from "./styles";
import { GlobalSmallTextSecondary } from '../../app/globalStyles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from "react";
import { View } from "react-native";

export default function index() {

   const [isInputBlur, setIsInputBlur] = useState<boolean>(true);

  return (
    <View style={{position:'relative'}}>
    {isInputBlur && 
        <>
        <Ionicons name="search" style={{width: 60, height: 60, position:'absolute', top:37, left: 20,zIndex:2}}/>
        </> 
    }
        <SearchInput placeholder={isInputBlur ? 'Pesquisar...' : ''} onFocus={() => setIsInputBlur(false)} onBlur={() => setIsInputBlur(true)}/>
    </View>
  )
}