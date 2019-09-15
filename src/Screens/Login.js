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
  TextInput
} from "react-native";

import { Content } from "native-base";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LinearGradient from 'react-native-linear-gradient';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hidden: true,
          eye: true,      
          cross: false
        };
      }
  
    render() {
       
    return (
      // <LinearGradient colors={['#4c669f', '#3b5998',]} >
      <View style={styles.container}>
         
        
         <Content>
          <View style={styles.header}>
             
             
              <Image
                style={styles.logo}
                source={require("../../assets/images/Capture.png")}
                resizeMode="contain"
              />
            
          </View>

<View style={{borderWidth:0,width:"80%",marginTop:20, alignSelf:"center"}}>
  <Text style={{color:"#028c6a"}}>Email</Text>
</View>
          <View style={styles.user}>
            <View style={styles.UserImg}>
            <Entypo name="mail" size={24} color="#028c6a" />

            </View>

            <View style={styles.UserText}>
              <TextInput
                style={styles.input}
                placeholder="Email ID "
                placeholderTextColor="black"
              />
            </View>
          </View>
          <View style={{borderWidth:0,width:"80%", alignSelf:"center", marginTop:10}}>
  <Text style={{color:"#028c6a"}}>Password</Text>
</View>
          <View style={styles.PwdBox}>
            <View style={styles.PwdImage}>
            <Entypo name="lock" size={24} color="#028c6a" />

            </View>
            
            <View style={styles.PwdField}>
              <TextInput
                secureTextEntry={this.state.hidden}
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="black"
              />
            </View>

            <TouchableOpacity
              onPress={() => this.setState({ hidden: !this.state.hidden })}
              style={styles.PwdEyeImg}
            >
              {this.state.hidden ? (
                 <Entypo name="eye-with-line" size={20} color="#028c6a" />
                //<FontAwesome5 name="eye" size={20} color="#85a7ee" />

              ) : (
                <Entypo name="eye" size={20} color="#028c6a" />
              )}
            </TouchableOpacity>
          </View>

          

          <TouchableOpacity style={styles.Login}>
            <Text style={styles.LoginText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Signup}>
            <Text style={styles.SignupText}>Not a member?
            <Text style={{textDecorationLine:"underline", color:"#028c6a"}}>Sign up</Text></Text>
          </TouchableOpacity>
        </Content>

          
         
      </View>

      //  </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: "#fffdfd"
  },  

  header: {
    height: 230,
   // backgroundColor:"#06684a",
    width: "100%",
    borderWidth:1
  //  bottom: 30
  },

  ImgBackground: {
    width: "100%",
    tintColor:"red",
    bottom: 90,
    height:360,
    tintColor: 'red'
  },

  logo: {
   // borderWidth: 0,
    width: "100%",
    height: 90,
    top: 130,
    elevation:4
  },

  input: {
    height: 45
  },

  user: {
    //   borderWidth:4 ,
    // height:40,
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    borderRadius: 5,
    elevation: 2,
    backgroundColor: "#ffffff"
  },

  

  UserImg: {
    // borderWidth:0,
    height: 40,
    width: "15%",
  
    justifyContent: "center",
    alignItems: "center"
  },

  UsrImg: {
    width: "80%",
    height: "80%"
  },

  UserText: {
    //borderWidth:0,
    height: 40,
    width: "70%",
   
  },

  PwdBox: {
    // borderWidth:0 ,
   // marginTop: 10,
    height: 40,
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    borderRadius: 5,
    elevation: 2,
    backgroundColor: "#ffffff"
  },

  PwdImage: {
    // borderWidth:0,
    height: 40,
    width: "15%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  PwdImg: {
    width: "80%",
    height: "80%"
  },

  PwdField: {
    //  borderWidth:0,
    height: 40,
    width: "70%",
    borderRadius: 20
  },

  PwdEyeImg: {
    //  borderWidth:0,
    height: 40,
    width: "15%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  EyeImg: {
    width: "60%",
    height: "50%"
  },

  ForgetPwd: {
    //  borderWidth:0,
    marginTop: 3,
    height: 20,
    flexDirection: "row-reverse",
    width: "80%",
    alignSelf: "center"
  },

  ForgetPwdField: {
    color: "#85a7ee",
    fontSize: 14
  },

  Login: {
    //borderWidth:0,
    marginTop: 15,
    height: 40,
    flexDirection: "row",
    width: "50%",
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "#06684a",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2
  },

  LoginText: {
    color: "#ffffff",
    fontSize: 16
  },

  Signup: {
    //borderWidth:0,
    marginTop: 10,
     
    width: "80%",
    alignSelf: "center",
    
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    
    
  },
  SignupText: {
    color: "black",
    fontSize: 16
  }
});

 