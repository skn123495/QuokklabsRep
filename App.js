import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import DrawerNav from "./navigator/DrawerNav";
import AuthStack from "./navigator/AuthStack";
import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import themeReducer from "../TaskPune/src/store/reducers/themeReducer";

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <DrawerNav />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }
  return <Navigation />;
}

export default function App() {
  const rootReducer = combineReducers({
    theme: themeReducer,
  });
  const store = createStore(rootReducer);
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <AuthContextProvider>
          <Root />
        </AuthContextProvider>
      </Provider>
    </>
  );
}
