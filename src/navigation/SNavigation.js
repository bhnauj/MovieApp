import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TobBarNavigation from './TobBarNavigation';
import MovieDetail from '../screens/MovieDetail';


const Stack = createNativeStackNavigator();

const SNavigation = () => {
    return (
        <NavigationContainer>
            {/* <Text style={styles.title}>Title</Text>
            <Image
                style={styles.image}
                source={{ uri: 'https://image.tmdb.org/t/p/w154/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg'}}
            />
            <Text>Overview</Text> */}
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