import React,{Component} from 'react';
import { StyleSheet, View,FlatList } from 'react-native';

import CategoryListItem from "../components/CategoryListItem"


export default class Categories extends Component{

  constructor(props){
    super(props);
    this.state={
      categories:[
        {id:1,name:'Dan guitar classis'},
        {id:2,name:'Dan guitar accotis'},
        {id:3,name:'phu kien guitar'},
      ]
    }
  }
  render(){
    const {categories}=this.state;
    const {navigation}=this.props;
    return (
      <View>
        <FlatList
        data={categories}
        renderItem={({item})=>
        <CategoryListItem 
        category={item}
        onPress={()=>navigation.navigate('Category',{
          categoryName:item.name
        })}
        />}
        keyExtractor={item=>`${item.id}`}
        contentContainerStyle={styles.container}
        />
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    paddingTop:16,
    paddingLeft:16,
    paddingRight:16
  },
});
