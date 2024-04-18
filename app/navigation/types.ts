import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { valuesFormType } from "../screens/clientForm/types";

type RootStackParamList = {
  ClientList: {};
  ClientForm: { client?: valuesFormType; isNewClient: boolean; title: string };
  // Otras pantallas de la pila de navegación...
};

type ClientForm = RouteProp<RootStackParamList, "ClientForm">;
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

export type propsClientListScreenType = {
  navigation: RootStackNavigationProp;
};
export type propsClientFormScreenType = {
  route: ClientForm;
  navigation: RootStackNavigationProp;
  title: string;
};
