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
            return <Icon name={'home'} size={34} color={isThemeDark ? (focused ? 'white' : 'grey') : (focused ? '#323232' : 'grey')} />;
          },
          headerShown: false,
          tabBarLabel: "Dashboard",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: isThemeDark ? '#222222' : '#b9b9b9',
            borderTopWidth: 0,
          },
        })}
    >
      <Tabs.Screen name="cart"/>

    </Tabs>
  )
}


