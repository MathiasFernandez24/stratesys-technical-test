import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { useContextClientsList } from "../../contexts/ClientProvider";
import { propsClientListScreenType } from "../../navigation/types";
import ClientList from "./components/clientList/ClientList";
import { container } from "./styles";

const ClientListScreen = ({ navigation }: propsClientListScreenType) => {
  const { getAllClients, clientsList } = useContextClientsList();
  const test = [
    { name: "Mathi", id: 2 },
    { name: "Meli", id: 20 },
  ];
  useEffect(() => {
    getAllClients();
    console.log(test.some((item) => item.id == 2));
  }, []);
  return (
    <View style={container}>
      <ClientList data={clientsList} />
      <Button
        title="New client"
        onPress={() =>
          navigation.navigate("ClientForm", {
            title: "New client",
            isNewClient: true,
          })
        }
      />
    </View>
  );
};

export default ClientListScreen;
