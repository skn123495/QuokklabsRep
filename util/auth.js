import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_KEY = "AIzaSyCpQdn-FAd4jQAfNt_hBk0_fZoPnDI8kIE";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
 
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response.data.idToken;
  console.log("LINE NUMBER 14", response.data);
  console.log("LINE NUMBER 14", token);
  await AsyncStorage.setItem("token", token);
  return token;
}

export function createUser(email, password) {
  console.log("CREATE USER", email, password);
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  console.log("LOGIN USER", email, password);
  return authenticate("signInWithPassword", email, password);
}
