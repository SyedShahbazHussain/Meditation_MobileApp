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
  TextInput,
  ScrollView,
  Dimensions
} from "react-native";
 

import { Content } from "native-base";
 
import AntDesign from "react-native-vector-icons/AntDesign";


import Carousel , { ParallaxImage } from 'react-native-snap-carousel';


const { width: screenWidth , height: screenHeight} = Dimensions.get('window')

export default class Lessons extends Component {

    constructor(props) {
      super(props);

      this.state = {
        hidden: false,

        entries: [
          { title: 'START HERE',
          duration: "3 min, 18 sec",
          img1: require("../../assets/images/picture4.jpg"),
          hidden: false, },
          { title: 'The logic of Pracice',
          duration: "6 min, 38 sec",
          img1: require("../../assets/images/picture1.jpg"), },
          { title: 'Mental Training',
          duration: "6 min, 29 sec",
          img1: require("../../assets/images/picture3.jpg"), },
          { title: 'What is Progress in Meditation',
          duration: "5 min, 10 sec",
          img1: require("../../assets/images/picture2.jpg"), },
          { title: 'What is Progress in Meditation',
          duration: "5 min, 10 sec",
          img1: require("../../assets/images/picture4.jpg"), },
          { title: 'What is Progress in Meditation',
          duration: "5 min, 10 sec",
          img1: require("../../assets/images/picture1.jpg"), },
          { title: 'What is Progress in Meditation',
          duration: "5 min, 10 sec",
          img1: require("../../assets/images/picture1.jpg"), },
          { title: 'What is Progress in Meditation',
          duration: "5 min, 10 sec",
          img1: require("../../assets/images/picture1.jpg"), },
          { title: 'What is Progress in Meditation',
          duration: "5 min, 10 sec",
          img1: require("../../assets/images/picture1.jpg"), },
        { title: 'What is Progress in Meditation',
          duration: "5 min, 10 sec",
          img1: require("../../assets/images/picture1.jpg"), },        ],
      }
    }

      _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
              
                <ParallaxImage
                    source={(item.img1)}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                    
                  
                />
               
               

               <TouchableOpacity
              //  onPress={() => this.setState({ hidden: !this.state.hidden })}
            
              style={{position:"absolute", right:10, top:10}}
            >
               {/* {this.state.hidden ? ( 
                 <AntDesign name="hearto" size={24} style={{
                   
                   color:"red"
                   }} />
                ) : (  */}
                  <AntDesign name="hearto" size={24} color="#6a6e73" />
               {/* )}  */}
            </TouchableOpacity>
  
                  
                 
                <Text style={{ position:"absolute",
                  color:"white",
                  fontWeight:"bold",
                  
                  bottom:20,
                  marginLeft:15,
                  fontSize:16
                }
                
              } 
                  numberOfLines={2}>
              {item.title}
              {"\n"}   
              {item.duration}
                </Text>
                
                 
            </View>
        );
    }
  
    render() {
       
    return (
      // <LinearGradient colors={['#4c669f', '#3b5998',]} >
      <View style={styles.container}>
     
                    <Carousel
                sliderWidth={screenWidth}
                 sliderHeight={screenHeight}
               
                itemWidth={screenWidth - 60}
                data={this.state.entries}
                renderItem={this._renderItem}
                hasParallaxImages={true}
                backgroundColor={"#e8e9f2"}
            />
   
   <ScrollView style={{position:"absolute", width:"100%",height:"50%",backgroundColor:"white", top:290}}>
     <Text style={{fontWeight:"bold", fontSize:16, marginLeft:23,}}>All Lessons</Text> 
 <View style={{ borderWidth:0, width:"100%"}}>
{this.state.entries.map((item, index) => {
  return (  
    
  <View style={{width:"90%",flexDirection:"row", height:60,borderBottomWidth:1,borderBottomColor:"#7d8185",alignSelf:"center"}}>
    
    <View style={{width:"25%", borderWidth:0, alignItems:"center", justifyContent:"center",}} >
    <Image source={(item.img1)} style={{width:70, height:50, borderRadius:7, overflow:"hidden"}}></Image>
    </View>
    
    <View style={{width:"50%", borderWidth:0, justifyContent:"center"}} >
      <Text style={{fontWeight:"bold", marginLeft:5}}>{item.title}</Text>
      <Text style={{color:"gray", marginLeft:5}}>{item.duration}</Text>
    </View>

    <TouchableOpacity style={{width:"13%", borderWidth:0, justifyContent:"center", alignItems:"center"}} >
      <AntDesign name="hearto" color="#6a6e73" size={22}   />
    </TouchableOpacity>

    <TouchableOpacity style={{width:"12%", borderWidth:0, justifyContent:"center", alignItems:"center"}} >
     <AntDesign name="clouddownloado" color="#6a6e73" size={24} />
    </TouchableOpacity>
   
    
  </View>
  
  );
})}
   
</View>  
</ScrollView>
</View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: "#fffdfd"
  },  
 
  item: {
    marginTop:50,
    width: screenWidth - 60,
    height: screenWidth - 160,
     
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
    

  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title:{
    position:"absolute",
    color:"white",
    fontWeight:"bold",
    fontSize:16,
    bottom:20,
    marginLeft:15,
    
  }

});

 