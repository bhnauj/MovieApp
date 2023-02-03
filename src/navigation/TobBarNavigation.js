import React from 'react'

//import { StyleSheet, View, Text } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Movie from '../screens/Movie';

import Search from '../screens/Search';

import Tv from '../screens/Tv';

const Tab = createMaterialTopTabNavigator();

const TopBarNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerTintColor: 'gray', tabBarPressColor: 'rgb(45,62,81)' }}>
            <Tab.Screen name="movies" component={Movie} />
            <Tab.Screen name="Search Result" component={Search} />
            <Tab.Screen name="Tv shows" component={Tv} />
        </Tab.Navigator>
    );
}
export default TopBarNavigation