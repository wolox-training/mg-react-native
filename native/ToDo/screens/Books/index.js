import React from "react";
import { connect } from "react-redux";
import { TouchableOpacity, FlatList } from "react-native";
import ItemBook from "./ItemBook/index";
import actionCreators from "../../redux/Books/actions";

class Books extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return (
      <FlatList
        data={this.props.books}
        onRefresh={this.props.getBooks}
        refreshing={this.props.refreshing}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item: book, index }) => (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate({
                routeName: "Details",
                params: {
                  book: {
                    author: book.author,
                    genre: book.genre,
                    year: book.year,
                    publisher: book.publisher,
                    title: book.title,
                    image: book.image_url
                  }
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
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.books,
  refreshing: state.books.booksLoading
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(actionCreators.getBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
