import React,{Component} from 'react';
import { StyleSheet, Text, View,Image,ScrollView,FlatList } from 'react-native';

export default class Category extends Component{

  render(){
    const {route}=this.props;
    const {categoryName}=route.params;
    return (
      <View>
       <Text>{categoryName}</Text>
      </View>
    );
  }
 
}