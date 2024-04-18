import { valuesFormType } from "../../screens/clientForm/types";

export const getClients = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => json);

    const clients = data.map((i: any) => {
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

      console.log(client);
      return client;
    });
    return clients;
  } catch (error) {
    console.log(error);
  }
};
