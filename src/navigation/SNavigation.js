import React from 'react'
import { StyleSheet, View, text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TobBarNavigation from './TobBarNavigation';
import MovieDetail from '../screens/MovieDetail';


const Stack = createNativeStackNavigator();

const SNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', statusBarColor: '#004764', headerTintColor: 'white', }}>
                <Stack.Screen
                    options={{ headerStyle: { backgroundColor: '#004764' } }}
                    name="Movie App"
                    component={TobBarNavigation} />
                <Stack.Screen
                    options={{ headerStyle: { backgroundColor: '#004764' } }}
                    name="Movie details"
                    component={MovieDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
export default SNavigation;