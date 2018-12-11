/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Provider } from "react-redux";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import List from "./screens/ToDoList/List";
import store from "./redux";
import TabNavigator from "./navigator";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}
