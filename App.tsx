import { StyleSheet } from "react-native";
import ClientsProvider from "./app/contexts/ClientProvider";
import Navigation from "./app/navigation/Navigation";

export default function App() {
  return (
    <ClientsProvider>
      <Navigation />
    </ClientsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
