import React from "react";
import { connect } from "react-redux";
import actionCreators from "../../redux/Books/actions";
import Book from "./layout";

class BooksContainer extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }

  handleDetail = book => {
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
  };

  render() {
    return (
      <Book
        books={this.props.books}
        refreshing={this.props.refreshing}
        getBooks={this.props.getBooks}
        onDetail={this.handleDetail}
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
)(BooksContainer);
