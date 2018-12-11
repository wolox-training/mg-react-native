import React from "react";
import { TouchableOpacity, FlatList } from "react-native";
import ItemBook from "./ItemBook/index";
import { withLoadingIndicator } from "../../HOCs/index";

function Book({ books, getBooks, refreshing, onDetail }) {
  return (
    <FlatList
      data={books}
      onRefresh={getBooks}
      refreshing={refreshing}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item: book, index }) => (
        <TouchableOpacity onPress={() => onDetail(book)}>
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
  );
}

export default withLoadingIndicator(Book);
