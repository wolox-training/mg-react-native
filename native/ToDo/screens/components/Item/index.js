import React, { PureComponent } from "react";
import { Text, CheckBox, View, Image } from "react-native";
import { connect } from "react-redux";
import cancelIcon from "../../../assets/cancel.svg";

class Item extends PureComponent {
  render() {
    return (
      <View style={styles.itemBack}>
        <Text style={this.props.checked ? styles.checked : styles.unChecked}>
          {this.props.text}
        </Text>
        <CheckBox value={this.props.checked} />
        <Image
          source={cancelIcon}
          onClick={this.props.deleteTodo(this.props.id)}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Item);
