import React, { PureComponent } from "react";
import { TextInput } from "react-native";
import { styles } from "../../../styles/styles";

class NewTextInput extends PureComponent {
  render() {
    return <TextInput style={styles.newItem} />;
  }
}

export default NewTextInput;
