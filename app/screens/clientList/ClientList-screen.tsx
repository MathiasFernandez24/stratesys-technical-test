import { Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { container } from "./styles";
import ClientList from "./components/clientList/ClientList";
import { getClients } from "../../services/api/api";
import { propsClientListScreenType } from "../../navigation/types";

const ClientListScreen = ({ navigation }: propsClientListScreenType) => {
  const [clientList, setClientList] = useState([]);
  useEffect(() => {
    getClients().then((clients) => setClientList(clients));
  }, []);
  // console.log(clientList);

  return (
    <View style={container}>
      <ClientList data={clientList} />
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
