import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { container } from "./styles";
import { clientItemType } from "./types";
import { RootStackNavigationProp } from "../../../../navigation/types";
import { AntDesign } from "@expo/vector-icons";
import { useContextClientsList } from "../../../../contexts/ClientProvider";

const ClientItem = ({ client }: clientItemType) => {
  const navigator: RootStackNavigationProp = useNavigation();
  const { deleteClient } = useContextClientsList();
  const onHandleDeleteClient = () => {
    deleteClient(client);
  };
  return (
    <View style={container}>
      <TouchableOpacity
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
      <TouchableOpacity onPress={onHandleDeleteClient}>
        <AntDesign name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ClientItem;
