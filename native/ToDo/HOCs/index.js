import { ActivityIndicator, View } from "react-native";
import React from "react";

export const withLoadingIndicator = Component => props =>
  props.refreshing ? (
    <View>
      <ActivityIndicator size="large" color="red" />
    </View>
  ) : (
    <Component {...props} />
  );
