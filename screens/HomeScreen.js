import React, { useLayoutEffect, useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomerListItem from "../components/CustomerListItem";
import { auth, db } from "../firebase";

import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [chat, setchat] = useState([]);

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  useEffect(() => {
    const unsunscribe = db.collection("chats").onSnapshot((snapshot) =>
      setchat(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTitleStyle: {
        color: "black",
      },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar
              rounded
              source={{
                uri:
                  auth?.currentUser?.photoURL ||
                  "https://www.pinclipart.com/picdir/middle/148-1486972_mystery-man-avatar-circle-clipart.png",
              }}
            />
          </TouchableOpacity>
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
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate("AddChat");
            }}
          >
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", {
      id: id,
      chatName: chatName,
    });
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chat.map(({ id, data: { chatName } }) => (
          <CustomerListItem
            id={id}
            chatName={chatName}
            enterChat={enterChat}
            key={id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
