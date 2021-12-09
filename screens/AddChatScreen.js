import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Input } from "react-native-elements/dist/input/Input";
import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  const [input, setinput] = useState("");

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add New Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setinput(text)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      <Button
        onPress={createChat}
        title="Create new chat"
        style={{ color: "black", backgroundColor: "grey" }}
      />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: { padding: 30, backgroundColor: "white", height: "100%" },
});
