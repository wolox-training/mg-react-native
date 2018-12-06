import { StyleSheet } from "react-native";

export default StyleSheet.create({
  text: {
    flex: 1
  },
  checked: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30
  },
  unChecked: {
    color: "black",
    fontSize: 30
  },
  itemBack: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    height: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "white",
    alignItems: "center"
  },
  img: {
    height: 40,
    width: 40,
    justifyContent: "flex-end"
  },
  checkBox: {
    height: 20
  }
});
