import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import List from "../screens/ToDoList/List/index";
import Books from "../screens/Books";
import BooksDetails from "../screens/BooksDetails/index";

const BooksStack = createStackNavigator({
  Books: {
    screen: Books,
    navigationOptions: () => ({
      title: "Libros"
    })
  },
  Details: {
    screen: BooksDetails,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title
    })
  }
});

const TabNavigator = createBottomTabNavigator({
  Home: List,
  Books: BooksStack
});

export default createAppContainer(TabNavigator);
