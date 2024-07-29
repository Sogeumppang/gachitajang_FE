// 현재 사용 안함


import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


import { FaMap } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Chat from '../../app/(tabs)/Chat'
import Map from '../../app/(tabs)/Map'
import Profile from '../../app/(tabs)/Profile'
import { View} from 'react-native-reanimated/lib/typescript/Animated';

import { Image, StyleSheet, Platform, ScrollView, Text, TouchableOpacity } from 'react-native';


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
            <Icon1 name={focused ? 'map' : 'map-outline'} color={color} size={hp(3)}/>
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Icon2 name={focused ? 'chat' : 'chat-outline'} color={color} size={hp(3)}/>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <Icon3 name={focused ? 'user' : 'user-o'} color={color} size={hp(3)} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

