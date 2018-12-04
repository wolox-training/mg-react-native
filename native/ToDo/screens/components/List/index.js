import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, ScrollView, Text } from "react-native";

import actionCreator from "../../../redux/AddItem/actions";

import Item from "../Item";
import TopBar from "../TopBar";
import BottomBar from "../BottomBar";
import NewTextInput from "../NewTextInput";

class List extends PureComponent {
  render() {
    console.warn(this.props.todos);
    return (
      <View>
        <TopBar />
        <NewTextInput />
        <ScrollView>
          {this.props.todos.map(todo => (
            <Item
              key={todo.id}
              id={todo.id}
              text={todo.text}
              cheched={todo.checked}
            />
          ))}
        </ScrollView>
        <BottomBar />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(actionCreator.addTodo(text))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
