import React,{useContext} from "react";
import { Text,StyleSheet,View } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({route,navigation}) => {
    const {id} = route.params;  
    global.tempId = id;
    const {state} = useContext(Context);
    const blogPost = state.find((blogPost)=> blogPost.id === id)
    return <View>
<Text> {blogPost.title}</Text>
<Text> {blogPost.content}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default ShowScreen;