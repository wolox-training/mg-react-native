/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Provider, createStore } from "react-redux";
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import List from "./screens/List";
import store from "./redux";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <List />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
