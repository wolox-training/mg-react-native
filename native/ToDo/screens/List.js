import React, { PureComponent } from "react";
import {connect} from "react-redux";
import { View, ScrollView } from "react-native";

import { addTodo } from "../redux/AddItem/actions";

import Item from "./components/Item";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import TextInput from "./components/TextInput";

class List extends PureComponent {
  render() {
    return (
      <View>
        <TopBar />
        <TextInput />
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
  addTodo: text => dispatch(addTodo(text))
});
​
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
