import { Pressable, Text, View, useWindowDimensions } from 'react-native'
import { ButtonPressable } from './styles'
import { ICustomButton } from './types'
import { RFValue } from 'react-native-responsive-fontsize';


const CustomButton = ({...props}:ICustomButton) => {
  const { height, width } = useWindowDimensions();
  return (
    <ButtonPressable style={{flex: 0.8, backgroundColor: props.background}}>
      <Text style={{color: '#fafafa', fontSize: RFValue(14)}}>{props.text}</Text>
    </ButtonPressable>
  )
}

export default CustomButton
