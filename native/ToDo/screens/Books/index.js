import React from "react";
import { Text, View, Button } from "react-native";

class Books extends React.Component {
  render() {
    return (
      <View>
        <Text>Books</Text>
        <Button
          title="Ir a la lista"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Detalles de Libros"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

export default Books;
