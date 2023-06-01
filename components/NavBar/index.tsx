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
  withTiming,
} from 'react-native-reanimated';


export default function index({...props}: INavBar) {
  
  const [isThemeDark, setIsThemeDark] = useState<boolean>(true);

  const handleTheme = useThemeStore(state => state.handleColor);

  const translateXValue = useSharedValue(-10);

  const animatedStyle = useAnimatedStyle(() => {
    if(isThemeDark){
      return {
        
        transform: [{ translateX: withSpring(-(translateXValue.value / 2)) }],
      };
    }else{
      return {
        transform: [{ translateX: withSpring(translateXValue.value) }],
      };
    }
  });

  const translating = () => {
    translateXValue.value = withTiming(20, { duration: 500 });
  };

  function ChangingColorTheme(){
    handleTheme(!isThemeDark)
    setIsThemeDark(!isThemeDark)
    translating();
  }

  return (
    <NavBarContainer>
        <View style={{flexDirection:'row'}}>
          <View>
            <GlobalHeaderText>Bem vindo,</GlobalHeaderText>
            <GlobalHeaderText style={{fontWeight: 'bold'}}>Gustavo</GlobalHeaderText>
          </View>
            <PressableTheme onPress={() => ChangingColorTheme()}>
              <Rounded style={animatedStyle}/>
            </PressableTheme>
        </View>
        <Image transition={200} source={props.light ? logoBlack : logoWhite} style={{width: 50, height: 35}}/>
    </NavBarContainer>
  )
}