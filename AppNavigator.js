import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from './screen/Categories';
import Category from './screen/Category';

const AppNavigator=createStackNavigator({
    Categories:{
        screen:Categories
    },
    Category:{
        screen:Category
    },
})
export default AppNavigator;