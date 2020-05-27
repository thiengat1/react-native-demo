import React,{Component} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

import CategoryListItem from "./components/CategoryListItem"


export default class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
      </View>
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
