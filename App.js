import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import DrawerNav from "./navigator/DrawerNav";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNav />
        </NavigationContainer>
      </Provider>
    </>
  );
}
