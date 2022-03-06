import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, NativeModules, Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    NativeModules.Bulb.setInitStatus(
      this.state.isOn,
      (err, isOn) => {
        console.log("Init is Done", isOn);
        isOn = isOn;
      },
      (err, msg) => {
        console.log("Init is Rejected!", msg);
      }
    );
  }

  turnOn = () => {
    NativeModules.RNNativeToastLibrary.show("Toggled ON");
    NativeModules.Bulb.newToggle((err, isOn) => {
      console.log("Java Status-Must be true/ON", isOn);
      this.setState({ isOn: isOn })
    },
      (err, msg) => {
        console.log("Request Rejected!", msg)
      });
  }

  turnOff = () => {
    NativeModules.RNNativeToastLibrary.show("Toggled OFF");
    NativeModules.Bulb.newToggle((err, isOn) => {
      console.log("Java Status-Must be false/OFF", isOn);
      this.setState({ isOn: isOn })
    },
      (err, msg) => {
        console.log("Request Rejected!", msg)
      });
  }

  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <Text>Welcome to Light App!!</Text>
          <Text style={{ marginVertical: 20 }}> Bulb is {this.state.isOn ? "ON" : "OFF"}</Text>

          <Button
            onPress={this.state.isOn ? this.turnOff : this.turnOn}
            title={this.state.isOn ? "Turn OFF" : "Turn ON"}
            color="#FF6347"
          />
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;
