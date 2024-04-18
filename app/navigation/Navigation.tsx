import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import ClientFormSceen from "../screens/clientForm/ClientForm-screen";
import ClientListScreen from "../screens/clientList/ClientList-screen";
import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"ClientList"} component={ClientListScreen} />
        <Stack.Screen
          name={"ClientForm"}
          component={ClientFormSceen}
          options={({ route }) => ({ title: route.params?.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
