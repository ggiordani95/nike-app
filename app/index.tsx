import { Link } from "expo-router";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Page() {
    return (
        <GestureHandlerRootView style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Link href="/(tabs)" style={{fontSize:40}}>Entrar</Link>
        </GestureHandlerRootView>
        
    );
  }
  