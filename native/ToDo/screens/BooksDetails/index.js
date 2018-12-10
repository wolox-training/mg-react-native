import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import nullImage from "../../assets/nullImage.png";

class BooksDetails extends React.Component {
  render() {
    return (
      <View style={styles.viewBack}>
        <Image
          style={styles.image}
          source={
            this.props.navigation.state.params.book.image
              ? { uri: this.props.navigation.state.params.book.image }
              : nullImage
          }
        />
        <Text style={styles.text}>
          Autor: {this.props.navigation.state.params.book.author}
        </Text>
        <Text style={styles.text}>
          Genero: {this.props.navigation.state.params.book.genre}
        </Text>
        <Text style={styles.text}>
          Publicador: {this.props.navigation.state.params.book.publisher}
        </Text>
        <Text style={styles.text}>
          Año: {this.props.navigation.state.params.book.year}
        </Text>
      </View>
    );
  }
}

export default BooksDetails;
