import { ReactNode, createContext, useContext, useState } from "react";
import { valuesFormType } from "../screens/clientForm/types";
import {
  addClientAPI,
  deleteClientAPI,
  getClientsAPI,
  updateClientAPI,
} from "../services/api/api";

export const ClientsContext = createContext([]);

type PropsClientsProvider = {
  children: ReactNode;
};
const ClientsProvider = ({ children }: PropsClientsProvider) => {
  const [clientsList, setClientsList] = useState<valuesFormType[]>([]);

  return (
    <ClientsContext.Provider value={{ clientsList, setClientsList }}>
      {children}
    </ClientsContext.Provider>
  );
};
export default ClientsProvider;

export const useContextClientsList = () => {
  const { clientsList, setClientsList } = useContext(ClientsContext);

  const getAllClients = () => {
    getClientsAPI().then((clients) => setClientsList(clients));
  };

  const updateClient = async (client: valuesFormType) => {
    try {
      const response = await updateClientAPI(client);
      if (response == 200) {
        setClientsList((prevState: valuesFormType[]) =>
          prevState.map((item) => (item.id === client.id ? client : item))
        );
        console.log("EXITO UPDATE");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addClient = async (client: valuesFormType) => {
    try {
      const response = await addClientAPI(client);
      if (response == 201) {
        setClientsList((prevState: valuesFormType[]) => [...prevState, client]);
        console.log("EXITO ADD");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteClient = async (client: valuesFormType) => {
    try {
      const response = await deleteClientAPI(client);
      if (response == 200) {
        setClientsList((prevState: valuesFormType[]) =>
          prevState.filter((item) => item.id !== client.id)
        );
        console.log("EXITO DELETE");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { updateClient, addClient, getAllClients, clientsList, deleteClient };
};
