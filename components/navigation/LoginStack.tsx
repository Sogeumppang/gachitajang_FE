import React from 'react';

import Splash from '../../app/login/splash';
import LoginScreen from '../../app/login/loginScreen';
import TabLayout from './TabStack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const LoginLayout = () => {
    return (
        <NavigationContainer independent={true} >
            <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Splash' component={Splash}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='TabLayout' component={TabLayout}/>

            
            </Stack.Navigator>  
        </NavigationContainer>
    );
};

export default LoginLayout;

