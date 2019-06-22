import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
       randomColor: null
    };
  }

  getrandomColor = () => {
    return(
      "rgb("+
      Math.floor((Math.random() * 256)) +
      ","+
      Math.floor((Math.random() * 256)) + 
      ","+
      Math.floor((Math.random() * 256)) +
      ")"
    )
  }

  mybuttonpressed = () => {
    this.setState({ randomColor: this.getrandomColor()});
  }

  myimagepressed = () => {
    this.setState({ randomColor: this.getrandomColor() });
  }

  render() {
    return (
      <View style={[styles.container,{backgroundColor: this.state.randomColor}]}>
        <TouchableOpacity
        onPress = {this.mybuttonpressed}
        >
           <Text style={styles.bt}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.myimagepressed}
        >
          <Image
            source={require('./src/images/email.png')}
          ></Image>
        </TouchableOpacity>

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

  bt:{
    fontSize: 30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#FFF",
    borderRadius: 7,
    borderWidth: 2,
    borderColor:"#FFF"
  }
});
