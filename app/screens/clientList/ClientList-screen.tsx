import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { useContextClientsList } from "../../contexts/ClientProvider";
import { propsClientListScreenType } from "../../navigation/types";
import ClientList from "./components/clientList/ClientList";
import { container, textInputSearch, textSearch } from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { valuesFormType } from "../clientForm/types";

const ClientListScreen = ({ navigation }: propsClientListScreenType) => {
  const { getAllClients, clientsList } = useContextClientsList();
  const [clientsfilteredById, setClientsfilteredById] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getAllClients();
  }, []);

  useEffect(() => {
    setSearchValue("");
  }, [clientsList]);

  const onHandlerFilterClientsById = (value: string) => {
    const listFiltered = clientsList.filter(
      (item: valuesFormType) => item.id === parseInt(value)
    );
    setClientsfilteredById(listFiltered);
    setSearchValue(value);
  };

  return (
    <View style={container}>
      <TextInput
        // testID="searchInput"
        value={searchValue}
        style={textInputSearch}
        placeholder="Search by Id"
        inputMode="numeric"
        onChangeText={onHandlerFilterClientsById}
      />
      {!!searchValue.length && !clientsfilteredById.length && (
        <Text style={textSearch}>No hay coincidencias con la busqueda..</Text>
      )}
      <ClientList
        data={searchValue.length ? clientsfilteredById : clientsList}
      />
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
