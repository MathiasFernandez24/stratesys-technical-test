import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { container } from "./styles";
import { clientItemType } from "./types";
import { RootStackNavigationProp } from "../../../../navigation/types";

const ClientItem = ({ client }: clientItemType) => {
  const navigator: RootStackNavigationProp = useNavigation();
  return (
    <TouchableOpacity
      style={container}
      onPress={() => {
        navigator.navigate("ClientForm", {
          title: "Edit Client",
          isNewClient: false,
          client,
        });
      }}
    >
      <Text>ID: {client.id}</Text>
      <Text>NAME: {client.name + " " + client.lastName}</Text>
      <Text>CEL: {client.cel}</Text>
    </TouchableOpacity>
  );
};

export default ClientItem;
