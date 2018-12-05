import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

class TopBar extends PureComponent {
  render() {
    return <Text style={styles.topBar}>LISTA DE QUEHACERES</Text>;
  }
}

export default TopBar;
