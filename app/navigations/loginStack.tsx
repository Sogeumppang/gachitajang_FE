import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../login/splash';
import LoginScreen from '../login/loginScreen';
import TabLayout from './tabStack';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

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