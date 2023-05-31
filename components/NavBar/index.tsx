import { GlobalHeaderText } from '../../app/globalStyles'
import { NavBarContainer } from './styles';
import { Image } from 'expo-image';
import { INavBar } from './types';
import logoBlack from '../../assets/nikeblack.png'
import logoWhite from '../../assets/nikewhite.png'
import { View } from 'react-native';

export default function index({...props}: INavBar) {
  return (
    <NavBarContainer>
        <View>
            <GlobalHeaderText>Bem vindo,</GlobalHeaderText>
            <GlobalHeaderText style={{fontWeight: 'bold'}}>Gustavo</GlobalHeaderText>
        </View>

        <Image transition={200} source={props.light ? logoBlack : logoWhite} style={{width: 50, height: 35}}/>
    </NavBarContainer>
  )
}