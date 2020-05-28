import React,{Component} from 'react';
import { StyleSheet,View,Text} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Categories from './screen/Categories'
import Category from './screen/Category'


const Stack = createStackNavigator();


export default class App extends Component{

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Categories} />
            <Stack.Screen name="Category" component={Category}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft:16,
    paddingRight:16
  },
});
