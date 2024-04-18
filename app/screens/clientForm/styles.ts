import { TextStyle, ViewStyle } from "react-native";

export const container: ViewStyle = {
  flex: 1,
  padding: 20,
};

export const input: ViewStyle = {
  height: 40,
  width: "100%",
  borderColor: "gray",
  borderWidth: 1,
  marginBottom: 10,
  paddingHorizontal: 10,
};
export const errorInput: ViewStyle = {
  borderColor: "red",
};

export const errorText: TextStyle = {
  color: "red",
};
