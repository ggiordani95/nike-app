import { View, Text, useWindowDimensions } from 'react-native'
import { Circle, CircleGroup,RowSpace,SelectSection, SelectionView, ViewHeaderSection } from './styles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SetStateAction, useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

interface ISelectOption {
    headerText: string;
    refresh: number | null;
    sendDataToParent: any;
}

const SelectOption = ({...props}: ISelectOption) => {
  const sneakerSizes = ['39','40','41','42','43']; 
  const [selectedSneaker, setSelectedSneaker] = useState<string | null>(sneakerSizes[0]);
  
  const { width, height } = useWindowDimensions();

  const CIRCLE_DIMENSION = height * 0.05;

  const scaleValue = useSharedValue(1);
  
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
    };
  });

  useEffect(()=>{
    setSelectedSneaker(sneakerSizes[0])
  },[props.refresh])

  const selecting = (sizeSelected: any) => {
     setSelectedSneaker(sizeSelected)
     props.sendDataToParent(sizeSelected);
     scaleValue.value = withSpring(0.8, {}, () => {
      scaleValue.value = withSpring(1);
    });
  }

  return (
    <SelectSection style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
          <RowSpace style={{width: '100%'}}>
            <SelectionView>
              <ViewHeaderSection style={{fontSize: RFValue(14)}}>{props.headerText}</ViewHeaderSection>
              <CircleGroup>
                  {sneakerSizes.map((size:string, key: number)=>{
                      return(
                        <Animated.View style={[{width: CIRCLE_DIMENSION,borderRadius: height * 0.02,marginHorizontal: 2,height: CIRCLE_DIMENSION}
                                                , size == selectedSneaker && reanimatedStyle ]} key={key}>
                          <Circle onPress={() => selecting(size)} style={[{width: CIRCLE_DIMENSION, height: CIRCLE_DIMENSION, borderRadius: height * 0.02,backgroundColor: selectedSneaker === size ? '#181818' : '#d3d3d3'}]} key={key}>
                            <Text style={{color: selectedSneaker === size ? '#d3d3d3' : '#181818'}}>
                                {size}
                            </Text>
                          </Circle>
                          </Animated.View>
                      )
                  })
                  }
              </CircleGroup>
            </SelectionView>
          </RowSpace>
    </SelectSection>
  )
}

export default SelectOption

