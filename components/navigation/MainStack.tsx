import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabLayout from './TabStack';
import LoginStack from './LoginStack';


const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='loginStack' component={LoginStack}/>
            <Stack.Screen name='tabLayout' component={TabLayout}/>
        </Stack.Navigator>  
    );
};

export default StackNavigation;

/* src/navigations/Stack.js */