import { valuesFormType } from "../../screens/clientForm/types";

export const getClientsAPI = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => json);

    const clients = await data.map((i: any) => {
      const id = i.id;
      const name = i.name.split(" ")[0];
      const lastName = i.name.split(" ").slice(1).join(" ");
      const cel = i.phone;
      const email = i.email.toLowerCase();
      const address =
        i.address.street +
        ", " +
        i.address.suite +
        ", " +
        i.address.city +
        ", " +
        i.address.zipcode;

      const client: valuesFormType = {
        id,
        name,
        lastName,
        cel,
        email,
        address,
      };
      return client;
    });
    return clients;
  } catch (error) {
    console.log(error);
  }
};

export const updateClientAPI = async (client: valuesFormType) => {
  try {
    return await fetch(
      `https://jsonplaceholder.typicode.com/users/${client.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          name: client.name,
          lasname: client.lastName,
          id: client.id,
          address: client.address,
          cel: client.cel,
          email: client.email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => response.status);
  } catch (error) {}
  console.log("EXITO ADD_API");
};

export const addClientAPI = async (client: valuesFormType) => {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: client.name,
        lasname: client.lastName,
        id: client.id,
        address: client.address,
        cel: client.cel,
        email: client.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.status);
  } catch (error) {}
  console.log("EXITO ADD_API");
};

export const deleteClientAPI = async (client: valuesFormType) => {
  try {
    return await fetch(
      `https://jsonplaceholder.typicode.com/users/${client.id}`,
      {
        method: "DELETE",
      }
    ).then((response) => response.status);
  } catch (error) {}
  console.log("EXITO DELETE_API");
};
