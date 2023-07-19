import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import App from "./App";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <View style = {styles.container}>
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    justifyContent:"center"
  },
//   main: {
//     flex: 1,
//     justifyContent: "center",
//     maxWidth: 960,
//     marginHorizontal: "auto",
//   },
//   title: {
//     fontSize: 64,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 36,
//     color: "#38434D",
//   },
});

// import 'react-native-gesture-handler'
// import { AppRegistry } from 'react-native'
// import App from './App'
// import {name as appName} from '../app.json'

// AppRegistry.registerComponent(appName, () => App);