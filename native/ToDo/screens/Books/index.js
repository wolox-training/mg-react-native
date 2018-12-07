import React from "react";
import {
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  FlatList
} from "react-native";
import { BooksList } from "../../assets/Books";
import ItemBook from "./ItemBook/index";

class Books extends React.Component {
  render() {
    return (
      // hacer una view y el button
      <ScrollView>
        <Button
          title="Volver a la lista"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <FlatList
          data={BooksList}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item: book, index }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate({
                  routeName: "Details",
                  params: {
                    author: book.author,
                    genre: book.genre,
                    year: book.year,
                    publisher: book.publisher,
                    title: book.title,
                    image: book.image_url
                  }
                });
              }}
            >
              <ItemBook
                first={index === 0}
                genre={book.genre}
                publisher={book.publisher}
                year={book.year}
                author={book.author}
                title={book.title}
                imageSource={book.image_url}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    );
  }
}

export default Books;
