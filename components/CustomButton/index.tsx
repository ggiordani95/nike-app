import { Pressable, Text, View, useWindowDimensions } from 'react-native'
import { ButtonPressable } from './styles'
import { ICustomButton } from './types'


const CustomButton = ({...props}:ICustomButton) => {
  const { height, width } = useWindowDimensions();
  return (
    <ButtonPressable style={{height: height * 0.1, width: width * 0.9, borderRadius: height * 0.1}}>
      <Text style={{color: '#fafafa'}}>{props.text}</Text>
    </ButtonPressable>
  )
}

export default CustomButton
