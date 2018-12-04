import React from "react";
import { Text, CheckBox, View, Image } from "react-native";

import cancelIcon from "../../assets/cancel.svg";

class Item extends React.Component {
  render() {
    return (
      <View style={styles.itemBack}>
        <Text style={this.props.checked ? styles.checked : styles.unChecked}>
          {this.props.text}
        </Text>
        <CheckBox value={this.props.checked} />
        <Image
          source={cancelIcon}
          onClick={this.props.deleteTodo(this.props.id)}
        />
      </View>
    );
  }
}

export default Item;
