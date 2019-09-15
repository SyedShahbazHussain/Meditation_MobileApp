/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React,{ Component} from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import Login from './src/Screens/Login';
import SignUp from './src/Screens/SignUp';
import Lessons from './src/Screens/Lessons';




export default class App extends Component {
 
  
    render() {
       
    return (
      
      <View style={styles.container}>
  <Lessons/>        
        {/* <Login/> */}
  {/* <SignUp/>           */}
          
         
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffdfd"
  },  
});

 