import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/AntDesign'

import Home from './src/screens/Home'
import Schedule from './src/screens/Schedule'
import Teste from './src/screens/Teste'

const {Navigator, Screen} = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1BB13C',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: 70,
          paddingBottom: 15,
          paddingTop: 15,
          fontFamily: 'Poppins-Medium'
        }
      }}
      >
         {/* <Screen 
          name="Buscar" 
          component={Schedule} 
          options={{
            tabBarIcon: (({ size, color }) =>  
            <Icon 
              name="search1"
              size={size}
              color={color}
            />
            )
          }}
        /> */}
        <Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: (({ size, color }) =>  
            <Icon 
              name="home"
              size={size}
              color={color}
            />
            )
          }}
        />
         <Screen 
          name="Agenda" 
          component={Schedule} 
          options={{
            tabBarIcon: (({ size, color }) =>  
            <Icon 
              name="book"
              size={size}
              color={color}
            />
            )
          }}
        />
         <Screen 
          name="Mais" 
          component={Teste} 
          options={{
            tabBarIcon: (({ size, color }) =>  
            <Icon 
              name="ellipsis1"
              size={size}
              color={color}
            />
            )
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}