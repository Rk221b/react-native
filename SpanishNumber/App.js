import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { PlaybackMixin } from 'expo-av/build/AV';

const backgroundcolorList = {
  1: "#E71C23",
  2: "#0A79DF",
  3: "#26ae60",
  4: "#3C40C6",
  5: "#6ab04c",
  6: "#10A881",
  7: "#EEC213",
  8: "#F4C724",
  9: "#DAE0E2",
  10: "#777E8B"
};

const soundList = {
  one : require('./assets/one.wav'),
  two : require('./assets/two.wav'),
  three : require('./assets/three.wav'),
  four : require('./assets/four.wav'),
  five : require('./assets/five.wav'),
  six : require('./assets/six.wav'),
  seven : require('./assets/seven.wav'),
  eight : require('./assets/eight.wav'),
  nine : require('./assets/nine.wav'),
  ten : require('./assets/ten.wav')
};

export default function App() {


  playsound = async number => {

    const soundObject = new Audio.Sound();

    try{

      var path = soundList[number];
      await soundObject.loadAsync(path)
      await soundObject
      .playAsync()
      .then( async playbackStatus => {
        setTimeout( () => {
          soundObject.unloadAsync();
        }, playbackStatus.playableDurationMillis);
      })
      .catch(error =>{
        console.log(error);
      });

    }
    catch(error){
      console.log(error);
    }

  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
      <Image
          style={styles.logo}
       source = {require('./assets/logo.png')}
      />
        <View style={styles.rowContainer}>
        <TouchableOpacity
            style={[{backgroundColor: backgroundcolorList[1]}, styles.item]}
            onPress = {() =>{
              this.playsound("one");
            }}
        >
            <Text style={styles.itemText}>ONE</Text>
        </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: backgroundcolorList[2] }, styles.item]}
            onPress={() => {
              this.playsound("two");
            }}
          >
            <Text style={styles.itemText}>TWO</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: backgroundcolorList[3] }, styles.item]}
            onPress={() => {
              this.playsound("three");
            }}
          >
            <Text style={styles.itemText}>THREE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: backgroundcolorList[4] }, styles.item]}
            onPress={() => {
              this.playsound("four");
            }}
          >
            <Text style={styles.itemText}>FOUR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: backgroundcolorList[5] }, styles.item]}
            onPress={() => {
              this.playsound("five");
            }}
          >
            <Text style={styles.itemText}>FIVE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: backgroundcolorList[6] }, styles.item]}
            onPress={() => {
              this.playsound("six");
            }}
          >
            <Text style={styles.itemText}>SIX</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: backgroundcolorList[7] }, styles.item]}
            onPress={() => {
              this.playsound("seven");
            }}
          >
            <Text style={styles.itemText}>SEVEN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: backgroundcolorList[8] }, styles.item]}
            onPress={() => {
              this.playsound("eight");
            }}
          >
            <Text style={styles.itemText}>EIGHT</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: backgroundcolorList[9] }, styles.item]}
            onPress={() => {
              this.playsound("nine");
            }}
          >
            <Text style={styles.itemText}>NINE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: backgroundcolorList[10] }, styles.item]}
            onPress={() => {
              this.playsound("ten");
            }}
          >
            <Text style={styles.itemText}>TEN</Text>
          </TouchableOpacity>
        </View>
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3335',
  },
  gridContainer:{
    flex: 1,
    margin: 5
  },
  logo:{
    alignSelf: "center",
    marginTop: 30, 
  },
  rowContainer:{
    marginTop: 5,
    flexDirection: "row",

  },
  item :{
    flex:1,
    height: 110,
    alignItems:"center",
    justifyContent:"center",
    margin: 2,
  },
  itemText:{
    fontSize:20,
    color: "#FFF",
  },
});
