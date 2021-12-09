import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Avatar } from "react-native-elements";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const ChatScreen = ({ navigation, route }) => {
  const [textinput, settextinput] = useState("");

  const sendMessage = () => {};
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            rounded
            source={{
              uri: "https://www.pinclipart.com/picdir/middle/148-1486972_mystery-man-avatar-circle-clipart.png",
            }}
          />
          <Text style={{ color: "white", marginLeft: 10, fontWeight: 700 }}>
            {route.params.chatName}
          </Text>
        </View>
      ),

      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 5,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={() => {
          //   navigation.navigate("AddChat");
          // }}
          >
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <>
          <ScrollView></ScrollView>
          <View style={styles.footer}>
            <TextInput
              style={styles.textinput}
              value={textinput}
              onChangeText={(text) => settextinput(text)}
              placeholder="Enter message"
            />
            <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
              <Ionicons name="send" size={24} color="#2b68e6" />
            </TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  textinput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: "transparent",
    backgroundColor: "#ececec",
    borderWidth: 1,
    padding: 10,
    color: "grey",
    borderRadius: 18,
  },
});
