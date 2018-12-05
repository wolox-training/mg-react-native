import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Button, View, ScrollView, Text } from "react-native";

import actionCreator from "../../../redux/AddItem/actions";

import styles from "./styles";
import Item from "../Item";
import TopBar from "../TopBar";
import BottomBar from "../BottomBar";
import NewTextInput from "../NewTextInput";

class List extends PureComponent {
  render() {
    return (
      <View style={styles.background}>
        <TopBar />
        <NewTextInput />
        <ScrollView>
          {this.props.todos.map(todo => (
            <Item
              key={todo.id}
              id={todo.id}
              text={todo.text}
              checked={todo.checked}
            />
          ))}
        </ScrollView>
        <Button
          onPress={this.props.deleteCheckedTodo}
          title="Eliminar seleccionados"
          color="black"
          disabled={!this.props.anyChecked}
        />
        <BottomBar />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  anyChecked: state.todos.some(todo => todo.checked)
});
const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(actionCreator.addTodo(text)),
  deleteCheckedTodo: () => dispatch(actionCreator.deleteCheckedTodo())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
