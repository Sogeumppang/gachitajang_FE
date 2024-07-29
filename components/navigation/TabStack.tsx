import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FaMap } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Chat from '../../app/(tabs)/chat'
import Map from '../../app/(tabs)/map'
import Profile from '../../app/(tabs)/profile'
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer independent={true}>
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="map"
        component={Map}
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <FaMap name={focused ? 'map' : 'map-outline'} color={color} size={hp(3)}/>
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <IoIosChatbubbles name={focused ? 'code-slash' : 'code-slash-outline'} color={color} size={hp(3)}/>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <IoPersonSharp name={focused ? 'code-slash' : 'code-slash-outline'} color={color} size={hp(3)} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

