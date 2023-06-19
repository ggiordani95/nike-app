import { Text, View, useWindowDimensions } from 'react-native'
import { ButtonPressable } from './styles'
import { ICustomLink } from './types'
import { RFValue } from 'react-native-responsive-fontsize';
import { Link } from 'expo-router';


const CustomLink = ({...props}:ICustomLink) => {

  const { width } = useWindowDimensions();

  return (
    <Link href={props.href ? props.href : '(tabs)' } onPress={props.onPress}>
      <View style={{width: props.widthButton,backgroundColor: props.background,justifyContent:"center", alignItems:'center',}} >
        <Text style={{color: '#fafafa', fontSize: RFValue(14), textAlign:'auto',padding: 20}}>{props.text}</Text>
      </View>
    </Link>
  )
}

export default CustomLink
