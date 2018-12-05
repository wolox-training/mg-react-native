/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Provider } from "react-redux";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import List from "./screens/components/List";
import store from "./redux";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <List />
      </Provider>
    );
  }
}
