import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomerListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem key={id} bottomDivider onPress={() => enterChat(id, chatName)}>
      <Avatar
        rounded
        source={{
          uri: "https://www.pinclipart.com/picdir/middle/148-1486972_mystery-man-avatar-circle-clipart.png",
        }}
      />

      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: 800 }}>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomerListItem;

const styles = StyleSheet.create({});
