import { Pressable, Text, View, useWindowDimensions } from 'react-native'
import { ButtonPressable } from './styles'
import { ICustomButton } from './types'


const CustomButton = ({...props}:ICustomButton) => {
  const { height, width } = useWindowDimensions();
  return (
    <ButtonPressable style={{flex: 1, height: 70,borderRadius: height * 0.05}}>
      <Text style={{color: '#fafafa', fontSize: 16, fontWeight:'bold'}}>{props.text}</Text>
    </ButtonPressable>
  )
}

export default CustomButton
