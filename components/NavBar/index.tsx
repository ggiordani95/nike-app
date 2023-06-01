import { GlobalHeaderText } from '../../app/globalStyles'
import { NavBarContainer, PressableTheme, Rounded } from './styles';
import { Image } from 'expo-image';
import { INavBar } from './types';
import logoBlack from '../../assets/nikeblack.png'
import logoWhite from '../../assets/nikewhite.png'
import { View } from 'react-native';
import useThemeStore from '../../stores/theme';
import { useState } from 'react';
import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';


export default function index({...props}: INavBar) {

  const offset = useSharedValue(100);

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 30, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });

  const [isThemeDark, setIsThemeDark] = useState<boolean>(true);

  const handleTheme = useThemeStore(state => state.handleColor);

  function ChangingColorTheme(){
    handleTheme(!isThemeDark)
    setIsThemeDark(!isThemeDark)
    offset.value = Math.random();
  }

  return (
    <NavBarContainer>
        <View style={{flexDirection:'row'}}>
          <View>
            <GlobalHeaderText>Bem vindo,</GlobalHeaderText>
            <GlobalHeaderText style={{fontWeight: 'bold'}}>Gustavo</GlobalHeaderText>
          </View>
            <PressableTheme onPress={() => ChangingColorTheme()}>
              <Rounded/>
            </PressableTheme>
            <Animated.View style={[customSpringStyles,{height:20,width:20,backgroundColor:'red'}]}/>
        </View>

        <Image transition={200} source={props.light ? logoBlack : logoWhite} style={{width: 50, height: 35}}/>
    </NavBarContainer>
  )
}