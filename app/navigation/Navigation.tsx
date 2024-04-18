import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import ClientFormSceen from "../screens/clientForm/ClientForm-screen";
import ClientListScreen from "../screens/clientList/ClientList-screen";

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={"ClientList"} component={ClientListScreen} />
      <Stack.Screen
        name={"ClientForm"}
        component={ClientFormSceen}
        options={({ route }) => ({ title: route.params?.title })}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
