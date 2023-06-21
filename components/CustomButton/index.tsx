import { ActivityIndicator, Text, View } from 'react-native'
import { ICustomLink } from './types'
import { RFValue } from 'react-native-responsive-fontsize';
import { Link } from 'expo-router';
import { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


const CustomLink = ({...props}:ICustomLink) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const opacity = useSharedValue(1);

  const textButtonStyle = useAnimatedStyle(() => {
    return {
        opacity: opacity.value
    }
  })

  const onPressingButton = () => {
    setIsLoading(true);
    opacity.value = withTiming(0,{duration: 200})
    setTimeout(()=>{
      props.onPress;
      setIsLoading(false);
      opacity.value = withTiming(1,{duration: 200})
    },800)
  }

  return (
    <Link href={props.href ? props.href : '(tabs)' } onPress={props.cart ? onPressingButton : props.onPress}>
      <View style={{width: props.widthButton,backgroundColor: props.background,justifyContent:"center", alignItems:'center',}} >
        <Animated.View style={[textButtonStyle]}>
         <Text style={{color: '#fafafa', fontSize: RFValue(14), textAlign:'auto',padding: 20}}>{props.text}</Text>
        </Animated.View>
        { isLoading &&
          <ActivityIndicator style={{position:'absolute'}}/>
        }
      </View>
    </Link>
  )
}

export default CustomLink
