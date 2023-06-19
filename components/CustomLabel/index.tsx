import { Pressable, Text, View } from 'react-native'
import { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ICustomLabel } from './types';
import { RFValue } from 'react-native-responsive-fontsize';
import { Link } from 'expo-router';


const CustomLabel = ({...props}: ICustomLabel) => {

  const opacity = useSharedValue(0.8);
  const zoom = useSharedValue(1);

  const animationStyle = useAnimatedStyle(()=>{
    return {
        opacity: opacity.value,
        transform: [{scale: zoom.value}]
    }
  })

  const handleAnimation = () => {
      opacity.value = withTiming(1, { duration: 700 });
      zoom.value = withTiming(0.9, { duration: 150 }, ()=>{
        zoom.value = withSpring(1);
      });
    
   
  }

  const callToAction = () => {
    handleAnimation();
    props.onPress
  }


  return (
    <Link href={props.href} onPress={callToAction}>
    <View style={{zIndex: 4,justifyContent:'center',alignItems:'center',padding:20,borderRadius:30,backgroundColor: props.backgroundLabel}}> 
      <Animated.View style={[{justifyContent:"center", alignItems:'center',flexDirection:'row', gap: 6},animationStyle]}>
        <Icon name={props.iconName} size={18} color={props.labelColor}/>
        <Text style={{color: props.labelColor, fontSize:RFValue(10)}}>{props.labelName}</Text>
      </Animated.View>
    </View>
    </Link>
  )
}

export default CustomLabel
