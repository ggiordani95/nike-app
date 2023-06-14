import { Pressable, Text } from 'react-native'
import { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ICustomLabel } from './types';
import { RFValue } from 'react-native-responsive-fontsize';


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
    <>

    
    <Pressable
        style={{
          zIndex: 4,
         justifyContent:'center',
         alignItems:'center',
         padding: 14,
         borderRadius:30,
          backgroundColor: props.backgroundLabel
        }}
        onPress={callToAction}
    >
       
      <Animated.View style={[{justifyContent:"center", alignItems:'center',flexDirection:'row', gap: 6},animationStyle]}>
        <Icon name={props.iconName} size={24} color={props.labelColor}/>
        <Text style={{color: props.labelColor, fontSize:RFValue(12)}}>{props.labelName}</Text>
      </Animated.View>
      
    </Pressable>
    </>
  )
}

export default CustomLabel
