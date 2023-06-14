import { CenteredRowView, GlobalHeaderText, GlobalPadding } from '../../app/globalStyles'
import { LabelContainer, NavBarContainer, PressableTheme, ProfileImage, RoundedToggle, RowBetween, RowLabel } from './styles';
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
import CustomLabel from '../CustomLabel';


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

  const translatingRounded = () => {
    translateXValue.value = withTiming(15, { duration: 500 });
  };

  function ChangingColorTheme(){
    handleTheme(!isThemeDark)
    setIsThemeDark(!isThemeDark)
    translatingRounded();
  }  

  return (
    <>
   
    <NavBarContainer>
        <RowBetween>
          <CenteredRowView>
            <ProfileImage source={{uri: 'https://github.com/ggiordani95.png'}}/>
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
    <LabelContainer style={{width: '100%', height: 100}}>
      <RowLabel>
        <CustomLabel backgroundLabel={props.light ? '#c9c9c9' : '#191919'} labelColor={props.light ? '#131313' : '#fafafa'} iconName={'cart'} labelName="Carrinho" onPress={() => ''}/>
        <CustomLabel backgroundLabel={props.light ? '#c9c9c9' : '#191919'} labelColor={props.light ? '#131313' : '#fafafa'} iconName={'heart'} labelName="Curtidas" onPress={() => ''}/>
      </RowLabel>
      
    </LabelContainer>
    </>
  )
}