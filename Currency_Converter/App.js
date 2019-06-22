import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  YEN: 1.54,
  BITCOIN: 0.0000041,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  DINAR: 0.0043,
};

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0",
    };
  }

  buttonPressed = (currency) => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter Some Value");
    }
    else {
     // Alert.alert(this.state.inputValue);
      var result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];
      this.setState({ resultValue: result.toFixed(2) , inputValue: ""});
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.screenview}>
          <View>
           <Text>WELCOME</Text>
          </View>
          <View style={styles.resultcontainer}>
            <Text style={styles.resultValue}> {this.state.resultValue}  </Text>
          </View>
          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.input}
              selectionColor="#FFF"
              keyboardType="numeric"
              placeholder="Enter Value  "
              value={this.state.inputValue}
              onChangeText={inputValue => this.setState({ inputValue })}
            />
          </View>

          <View style={styles.converterbuttoncontainer}>
            <TouchableOpacity
              style={styles.converterbutton}
              onPress={() => this.buttonPressed("DOLLAR")}
            >
              <Text style={styles.converterbuttontext}>$</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.converterbutton}
              onPress={() => this.buttonPressed("EURO")}
            >
              <Text style={styles.converterbuttontext}>Euro</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.converterbutton}
              onPress={() => this.buttonPressed("POUND")}
            >
              <Text style={styles.converterbuttontext}>Pound</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.converterbutton}
              onPress={() => this.buttonPressed("YEN")}
            >
              <Text style={styles.converterbuttontext}>YEN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.converterbutton}
              onPress={() => this.buttonPressed("RUBEL")}
            >
              <Text style={styles.converterbuttontext}>Rubel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.converterbutton}
              onPress={() => this.buttonPressed("AUSDOLLAR")}
            >
              <Text style={styles.converterbuttontext}>Aus</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.converterbutton}
              onPress={() => this.buttonPressed("CANDOLLAR")}
            >
              <Text style={styles.converterbuttontext}>Canada</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.converterbutton}
              onPress={() => this.buttonPressed("DINAR")}
            >
              <Text style={styles.converterbuttontext}>Dinar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.converterbutton}
              onPress={() => this.buttonPressed("BITCOIN")}
            >
              <Text style={styles.converterbuttontext}>BitCoin</Text>
            </TouchableOpacity>

          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
  },
  screenview: {
    flex: 1,
  },
  resultcontainer: {
    height: 70,
    marginTop: 120,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    borderRadius: 20,
    marginLeft:10,
    marginRight: 10,
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  inputcontainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    borderWidth: 2,
    borderRadius:20,
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    color: "#FFF",
    marginLeft: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  converterbuttoncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 70,
  },
  converterbutton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%",
    borderRadius: 20,
  },
  converterbuttontext: {
    color: "#FFF",
    fontSize: 30,
  }
});
