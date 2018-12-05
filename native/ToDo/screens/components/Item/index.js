import React, { PureComponent } from "react";
import { TouchableOpacity, Text, Switch, View, Image } from "react-native";
import { connect } from "react-redux";
import cancelIcon from "../../../assets/cancel.png";
import styles from "./styles";
import actionCreator from "../../../redux/AddItem/actions";

class Item extends PureComponent {
  render() {
    return (
      <View style={styles.itemBack}>
        <Text
          style={[
            styles.text,
            this.props.checked ? styles.checked : styles.unChecked
          ]}
        >
          {this.props.text}
        </Text>
        <Switch
          styles={styles.checkBox}
          value={this.props.checked}
          onValueChange={() => this.props.isChecked(this.props.id)}
        />
        <TouchableOpacity onPress={() => this.props.deleteTodo(this.props.id)}>
          <Image style={styles.img} source={cancelIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(actionCreator.deleteTodo(id)),
  isChecked: id => dispatch(actionCreator.toggleTodo(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Item);
