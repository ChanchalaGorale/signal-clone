import React, { useState, useLayoutEffect } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Input } from "react-native-elements/dist/input/Input";
import { StatusBar } from "expo-status-bar";
import { Button, Text } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [image, setimage] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Login",
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          disaplayName: name,
          photoURL:
            image ||
            "https://www.pinclipart.com/picdir/middle/148-1486972_mystery-man-avatar-circle-clipart.png",
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50, fontWeight: "400" }}>
        Create Signal Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setname(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setemail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setpassword(text)}
        />
        <Input
          placeholder="Profile picture (optional)"
          type="text"
          value={image}
          onChangeText={(text) => setimage(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        title="Register"
        onPress={register}
        raised
        containerStyle={styles.button}
      />
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
