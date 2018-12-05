import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import actionCreator from "../../../redux/AddItem/actions";

class NewTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  onSubmit = () => {
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <TextInput
        style={styles.newItem}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
        onSubmitEditing={this.onSubmit}
        placeholder="Nuevo item"
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(actionCreator.addTodo(text))
});
export default connect(
  null,
  mapDispatchToProps
)(NewTextInput);
