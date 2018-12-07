import React from "react";
import { Text, Image, View } from "react-native";
import nullImage from "../../../assets/nullImage.png";
import styles from "./styles";

class ItemBook extends React.Component {
  render() {
    return (
      <View style={[styles.backItem, this.props.first && styles.first]}>
        <Image
          style={styles.image}
          source={
            this.props.imageSource
              ? {
                  uri: this.props.imageSource
                }
              : nullImage
          }
        />
        <View style={styles.text}>
          <Text>{this.props.title}</Text>
          <Text>Autor: {this.props.author}</Text>
        </View>
      </View>
    );
  }
}

export default ItemBook;
