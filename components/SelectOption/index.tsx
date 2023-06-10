import { View, Text, useWindowDimensions } from 'react-native'
import { Circle, CircleGroup,RowSpace,SelectSection, SelectionView, ViewHeaderSection } from './styles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';



interface ISelectOption {
    headerText: string;

}

const SelectOption = ({...props}: ISelectOption) => {

  const [selectedSneaker, setSelectedSneaker] = useState<string | null>();
  const sneakerSizes = ['39','40','41','42','43'];  
  const { width, height } = useWindowDimensions();

  const CIRCLE_DIMENSION = height * 0.06;

  const scaleValue = useSharedValue(1);
  
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
    };
  });

  useEffect(()=>{

  },[selectedSneaker])

  return (
    <SelectSection style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
          <RowSpace style={{width: '100%'}}>
            <SelectionView>
              <ViewHeaderSection style={{fontSize: RFValue(14)}}>{props.headerText}</ViewHeaderSection>
              <CircleGroup>
                  {sneakerSizes.map((size:string, key: number)=>{
                      return(
                          <Circle onPress={() => setSelectedSneaker(size)} 
                                  style={[{
                                            width: CIRCLE_DIMENSION, 
                                            height: CIRCLE_DIMENSION, 
                                            borderRadius: height * 0.02,
                                            backgroundColor: selectedSneaker === size ? '#181818' : '#d3d3d3'
                                        }]} 
                                        key={key}
                          >
                            <Text style={{
                                          color: selectedSneaker === size ? '#d3d3d3' : '#181818'   }}>
                                {size}
                            </Text>
                          </Circle>
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

