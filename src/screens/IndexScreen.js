import React from 'react';
import {Text,StyleSheet,View,FlatList, Button ,TouchableOpacity } from "react-native";
import { useContext,useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = ({navigation})=>{
    const {state, deleteBlogPost,getBlogPosts } = useContext(BlogContext);

  useEffect(()=>{
    getBlogPosts();

     navigation.addListener('focus', () =>{
        getBlogPosts();
    });
},[])

    return(
        <View>
         <FlatList data ={state} 
         keyExtractor = {blogPosts=>blogPosts.title}            
         renderItem = {({item}) =>{
              return( 
                  <TouchableOpacity onPress={() => navigation.navigate('ShowScreen',{id : item.id})}> 
              <View style = {styles.row}>
                 <Text style={styles.title}> {item.title}- {item.id} </Text> 
                 <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                 <FontAwesome name="trash" size={24} color="black" />
                 </TouchableOpacity>
                 </View>
                 </TouchableOpacity>
                 )
            } }
        />         
        </View>
    )
};
// const navigationOptions = ({navigation})=>{ return {
//      headerRight :<TouchableOpacity>
//      <FontAwesome name="plus" size={24} color="black" />
//       </TouchableOpacity>}};

    

const styles = StyleSheet.create({
    row : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding : 20,
        borderWidth : 3,
        borderBottomColor: 'grey',
        borderTopWidth : 0
       
    },
    title :{
        fontSize : 18
    }

});

export default IndexScreen;