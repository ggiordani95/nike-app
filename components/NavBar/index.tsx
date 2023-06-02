import { CenteredRowView, GlobalHeaderText, GlobalPadding } from '../../app/globalStyles'
import { NavBarContainer, PressableTheme, ProfileImage, RoundedToggle, RowBetween } from './styles';
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

  const translateXValue = useSharedValue(15);

  const animatedStyle = useAnimatedStyle(() => {
    if(isThemeDark){
      return {
        transform: [{ translateX: withSpring(-(translateXValue.value)) }],
      };
    }else{
      return {
        transform: [{ translateX: withSpring(translateXValue.value / 2)}],
      };
    }
  });

  const translating = () => {
    translateXValue.value = withTiming(15, { duration: 500 });
  };

  function ChangingColorTheme(){
    handleTheme(!isThemeDark)
    setIsThemeDark(!isThemeDark)
    translating();
  }

  return (
    <NavBarContainer>
        <RowBetween>
          <CenteredRowView>
            <Image source={{uri: 'https://github.com/ggiordani95.png'}} style={{width: 42, height:42, borderRadius: 21, marginRight: 14}}/>
            <View>
              <GlobalHeaderText>Bem vindo,</GlobalHeaderText>
              <GlobalHeaderText style={{fontWeight: 'bold'}}>Gustavo</GlobalHeaderText>
            </View>
              <PressableTheme onPress={() => ChangingColorTheme()}>
                <RoundedToggle style={[animatedStyle]}/>
              </PressableTheme>
          </CenteredRowView>
          <Image transition={200} source={props.light ? logoBlack : logoWhite} style={{width: 50, height: 35}}/>
        </RowBetween>
    </NavBarContainer>
  )
}