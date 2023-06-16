import { Link } from "expo-router"
import { View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import nikelogo from '../assets/nikewhite.png'
import { Image } from 'expo-image'
import { useRouter } from "expo-router";
import { useEffect } from "react"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

export default function Page() {
    const navigation = useRouter();
    
    useEffect(() => {
      scalingLogo();

      const changingScreenTimeout = setTimeout(()=>{
        navigation.push("/(tabs)")
      },600)  

      return () => {
        clearInterval(changingScreenTimeout);
      }
    }, [])

    
    const scale = useSharedValue(1); 

    const scaleStyle = useAnimatedStyle(()=>{
        return {
            transform: [{scale:scale.value}],
        }
    })

    function scalingLogo(){
        scale.value = withTiming(1.5,{duration:500})
    }
    
    return (
        <GestureHandlerRootView style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#131313'}}>
            <Animated.View style={[scaleStyle]}>
                <Image source={nikelogo} style={{height: 80, width: 80}}/>
            </Animated.View>
        </GestureHandlerRootView>
        
    );
  }
  