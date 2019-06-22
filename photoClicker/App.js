import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createStackNavigator} from "react-navigation";
import Home from "./screens/Home";
import CameraScreen from "./screens/CameraScreen";

const MainNavigator = createStackNavigator(
 {
  Home: {screen: Home},
  CameraScreen: {screen: CameraScreen},
 },
 {
 defaultNavigationOptions : {
  
  headerTintColor: "#FFF",
  headerStyle: {
      backgroundColor: "#000"
  },
  headerTitleStyle:{
    color:"#FFF",
  }
 }
 }
);

const App = createAppContainer(MainNavigator);
export default App;