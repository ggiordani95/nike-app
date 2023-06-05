import { Tabs } from 'expo-router'
import { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useThemeStore from '../../stores/theme';

export default function Layout() {

  const [isThemeDark, setIsThemeDark] = useState<boolean>(true);
  
  const isDarkMode = useThemeStore(state => state.isDarkMode);

  useEffect(()=>{
    setIsThemeDark(isDarkMode)
  },[isDarkMode])

  return (
    <Tabs 
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size}) => {
            let iconName = 'home';
            let iconSize = 32; 
            if (route.name === 'adorables') {
              iconName = 'heart',
              iconSize = 28;
            }
            if (route.name === 'cart') {
              iconName = 'shopping',
              iconSize = 28;
            }
            return <Icon name={iconName} style={{zIndex: 3, height: 60, marginTop: 50}}size={iconSize} color={isThemeDark ? (focused ? 'white' : 'grey') : (focused ? '#323232' : 'grey')} />;
          },
          headerShown: false,
          tabBarLabel: 
          route.name === 'cart' ? 'Carrinho' 
          : 
          route.name === 'adorables' ? 'Favoritos' 
          :   
          "Dashboard",
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingBottom: 20,
            backgroundColor: isThemeDark ? '#131313' : '#b9b9b9',
            borderTopWidth: 0,
            borderRadius: 20,
            height: 70,
            width: '70%',
            elevation: 0,
            position:'absolute',
            bottom: 40,
            left: '15%',
            right: '15%',
          },
        })}
    />
  )
}


