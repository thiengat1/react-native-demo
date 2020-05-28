import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import Guitar from '../assets/guitar.png';

export default function CategoryListItem(props){
    const {category,onPress}=props;
    return (
        <TouchableOpacity activeOpacity={'0.5'} onPress={onPress}>
            <View style={style.container}>
                <Text style={style.title}>{category.name}</Text>
                <Image style={style.categoryImage} source={Guitar}/>
            </View>
        </TouchableOpacity>
        
    )
}
const style= StyleSheet.create({
    container:{
        alignItems:"center",
        padding:16,
        borderRadius:4,
        backgroundColor:'#FFF',
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:0,height:0},
        marginBottom:16

    },
    categoryImage:{
        width:64,
        height:64

    },
    title:{
        textTransform:"uppercase",
        marginBottom:8,
        fontWeight:'700'
    }
})