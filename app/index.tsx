import { Link } from "expo-router";
import { View } from "react-native";

export default function Page() {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Link href="/(tabs)" style={{fontSize:40}}>Entrar</Link>
        </View>
        
    );
  }
  