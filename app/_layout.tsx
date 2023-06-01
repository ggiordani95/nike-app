import { Tabs } from 'expo-router'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Layout() {
  return (
    <Tabs 
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size}) => {
            return <Icon name={'home'} size={32} color={focused ? 'white' : 'grey'} />;
          },
          headerShown: false,
          tabBarLabel: "Dashboard",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#222222',
            borderTopWidth: 0,
          },
        
        })}
        
    >
      

    </Tabs>
  )
}


