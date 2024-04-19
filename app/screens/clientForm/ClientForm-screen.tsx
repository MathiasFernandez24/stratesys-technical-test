import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import * as Yup from "yup";
import { useContextClientsList } from "../../contexts/ClientProvider";
import { propsClientFormScreenType } from "../../navigation/types";
import { container, errorInput, errorText, input } from "./styles";
import { valuesFormType } from "./types";

const ClientFormScreen = ({ route, navigation }: propsClientFormScreenType) => {
  const { client } = route.params;
  const { updateClient, addClient, clientsList, deleteClient } =
    useContextClientsList();
  const [idError, setidError] = useState(false);
  const isNewClient = !client;

  const handleSubmitValues = (values: valuesFormType) => {
    if (isNewClient) {
      if (clientsList.some((item: valuesFormType) => item.id == values.id)) {
        setidError(true);
        return;
      } else {
        addClient(values);
      }
    } else {
      updateClient(values);
    }
    navigation.goBack();
  };

  const validationSchema = Yup.object().shape({
    id: Yup.number()
      .positive("Debe ser numero entero")
      .required("Campo requerido"),
    name: Yup.string().required("Campo requerido"),
    lastName: Yup.string().required("Campo requerido"),
    email: Yup.string()
      .email("Debe ser un email valido")
      .required("Campo requerido"),
    cel: Yup.number()
      .positive("Debe ser un numero de cel valido")
      .integer("Debe ser numero entero")
      .required("Campo requerido")
      .test("is-numerico", "Debe ser numérico", (value) => !isNaN(value)),
    address: Yup.string().required("Campo requerido"),
  });

  const initialValues: valuesFormType = {
    id: isNewClient ? undefined : client.id,
    name: isNewClient ? "" : client?.name,
    lastName: isNewClient ? "" : client?.lastName,
    email: isNewClient ? "" : client?.email,
    cel: isNewClient ? undefined : client?.cel,
    address: isNewClient ? "" : client?.address,
  };

  return (
    <View style={container}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmitValues(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            {isNewClient && (
              <TextInput
                style={[input, errors.id || idError ? errorInput : null]}
                placeholder="Id"
                inputMode="numeric"
                onChangeText={handleChange("id")}
                onBlur={handleBlur("Id")}
                value={values.id?.toString()}
              />
            )}
            {idError && <Text style={errorText}>"Id ya registrado"</Text>}
            <TextInput
              style={[input, errors.name ? errorInput : null]}
              placeholder="Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("Name")}
              value={values.name}
            />
            <TextInput
              style={[input, errors.lastName ? errorInput : null]}
              placeholder="Last Name"
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("Last name")}
              value={values.lastName}
            />
            <TextInput
              style={[input, errors.email ? errorInput : null]}
              placeholder="Email"
              inputMode="email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("Email")}
              value={values.email}
            />
            <TextInput
              style={[input, errors.cel ? errorInput : null]}
              placeholder="Cel"
              inputMode="tel"
              onChangeText={handleChange("cel")}
              onBlur={handleBlur("Cel")}
              value={values.cel?.toString()}
            />
            <TextInput
              style={[input, errors.address ? errorInput : null]}
              placeholder="Address"
              onChangeText={handleChange("address")}
              onBlur={handleBlur("Address")}
              value={values.address}
            />
            <Button
              title="Save"
              onPress={() => handleSubmit()}
              disabled={
                !!errors.address ||
                !!errors.cel ||
                !!errors.email ||
                !!errors.id ||
                !!errors.lastName ||
                !!errors.name
              }
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ClientFormScreen;
