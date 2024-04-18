import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ClientItem from "../clientItem/ClientItem";
import { ListClientsType } from "./types";

const ClientList = (props: ListClientsType) => {
  const { data } = props;
  return (
    <FlatList
      data={data}
      renderItem={(item) => <ClientItem client={item.item} />}
    />
  );
};

export default ClientList;

const styles = StyleSheet.create({});
