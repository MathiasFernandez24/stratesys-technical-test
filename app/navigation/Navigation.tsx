import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import ClientFormScreen from "../screens/clientForm/ClientForm-screen";
import ClientListScreen from "../screens/clientList/ClientList-screen";

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"ClientList"} component={ClientListScreen} />
        <Stack.Screen
          name={"ClientForm"}
          component={ClientFormScreen}
          options={({ route }) => ({ title: route.params?.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
