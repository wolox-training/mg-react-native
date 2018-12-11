import Reactotron from "reactotron-react-native";

import { reactotronRedux } from "reactotron-redux";

const reactotron = Reactotron.configure({ name: "Todo List" })
  .use(reactotronRedux()) //  <- here i am!
  .connect(); //Don't forget about me!

export default reactotron;
