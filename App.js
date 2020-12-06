import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from "./screens/HomeScreen";
import EventsScreen from "./screens/EventsScreen";
import ContactScreen from "./screens/ContactScreen";

const Tab = createBottomTabNavigator();

export default function App () {
   return (
     <NavigationContainer>
       
       <Tab.Navigator
       screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Events') {
              iconName = focused ? 'ios-snow' : 'ios-snow';
            
          } else if (route.name === 'Contact') {
            iconName = focused ? 'ios-call' : 'ios-call'  ;
          }
            
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ae1417',
          inactiveTintColor: '#3e8b54',
        }}
      >
         <Tab.Screen name="Home" component={HomeScreen} />
         <Tab.Screen name="Events" component={EventsScreen} />
         <Tab.Screen name="Contact" component={ContactScreen} />

       </Tab.Navigator>
     </NavigationContainer>
   );

      }