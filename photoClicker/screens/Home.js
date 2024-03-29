import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Home extends React.Component {

  static navigationOption = {
    title: "Photo Clicker"
  };


  render(){

   var photo = this.props.navigation.getParam("photo","empty");

  return (
    <View style={styles.container}>
      <Image
      resizeMode='center'
      style={styles.imageHolder}
      source = {
        photo === 'empty' ? require("../assets/email.png") : photo
      }
      />
      <Button
      style={styles.button}
      title ="Camera "
      onPress = { ()=>{
        this.props.navigation.navigate("CameraScreen");
      } }
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHolder:{
    alignSelf:"center",
    height:500,
    margin:20,
  },
  button:{
    margin:20
  }
});
