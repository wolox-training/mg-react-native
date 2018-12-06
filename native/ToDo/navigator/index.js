import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import List from "../screens/ToDoList/List/index";
import Books from "../screens/Books";
import BooksDetails from "../screens/BooksDetails/index";

const BooksStack = createStackNavigator({
  Books: Books,
  Details: BooksDetails
});

const TabNavigator = createBottomTabNavigator({
  Home: List,
  Books: BooksStack
});

export default createAppContainer(TabNavigator);
