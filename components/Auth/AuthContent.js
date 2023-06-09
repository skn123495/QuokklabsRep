import React, { useState } from "react";
import { Alert, Platform, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FlatButton from "../ui/FlatButton";
import AuthForm from "./AuthForm";
import { Colors } from "../../constants/styles";
import { Checkbox } from "react-native-paper";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState(false);
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();
    const emailIsValid = email.includes("@");

    function validatePassword(val) {
      var p = val,
        errors = [];
      if (p.length < 8) {
        errors.push("Your password must be at least 8 characters");
      }
      if (p.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter.");
      }
      if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
      }
      if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
      }
      return true;
    }

    const passwordIsValid = isLogin
      ? password.length > 7
      : validatePassword(password);

    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;
    if (!passwordIsValid) return;
    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    if (!checked && isLogin) {
      Alert.alert( "Please accept the terms and conditions");
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />

      {Platform.OS === "android" && isLogin && (
        <View style={styles.checkContainOuter}>
          <View>
            <Checkbox
              uncheckedColor={Colors.white}
              color={Colors.white}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
          <Text style={{ color: Colors.white }}>
            I accept the terms & conditions
          </Text>
        </View>
      )}
      {Platform.OS === "ios" && isLogin && (
        <View style={styles.checkContainOuter}>
          <View style={styles.checkContain}>
            <Checkbox
              color={Colors.white}
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
          </View>
          <Text style={{ color: Colors.white }}>
            I accept the terms & conditions
          </Text>
        </View>
      )}
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "Create a new user" : "Log in instead"}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  checkContainOuter: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  checkContain: {
    borderColor: Colors.white,
    borderWidth: 1,
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    alignItems: "center",
    marginRight: 10,
  },
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "grey",
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});
