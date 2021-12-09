import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [passowrd, setpassowrd] = useState("");

  useEffect(() => {
    const unsunscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsunscribe;
  }, []);
  const signin = () => {
    auth
      .signInWithEmailAndPassword(email, passowrd)
      .catch((error) => alert(error));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setemail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={passowrd}
          onChangeText={(text) => setpassowrd(text)}
          onSubmitEditing={signin}
        />
      </View>

      <Button title="Login" containerStyle={styles.button} onPress={signin} />
      <Button
        title="Register"
        containerStyle={styles.button}
        type="outline"
        onPress={() => navigation.navigate("Register")}
      />
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
