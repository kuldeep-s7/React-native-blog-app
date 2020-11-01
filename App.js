import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { Provider } from './src/context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const temp_id = '';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IndexScreen" component={IndexScreen} 
         options={({navigation})=>{ return {headerRight :()=>(
          <TouchableOpacity onPress={({}) => navigation.navigate('CreateScreen')}>
           <FontAwesome name="plus" size={30 } color="black" /> 
           </TouchableOpacity>)}}}
         />
        <Stack.Screen name="ShowScreen" component={ShowScreen} 
         options={({navigation})=>{ return {headerRight :()=>(
          <TouchableOpacity onPress={({}) => navigation.navigate('EditScreen',{})}>
           <FontAwesome name="pencil" size={30 } color="black" /> 
           </TouchableOpacity>)}}}/>
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ()=>{
  return<Provider>
    <App/>
  </Provider>
}