import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Channel, MessageInput, MessageList } from "stream-chat-expo";

const ChannelScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const channel: typeof Channel = route.params?.channel;

  navigation.setOptions({title: channel?.data?.name || "Channel"})

  if (!channel) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Select a channel from the list!</Text>
      </View>
    );
  }
  return (
    <Channel channel={channel} key={channel.data.name}>
     
      <MessageList />
      <MessageInput />
    </Channel>
  );
};

export default ChannelScreen;

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  errorText: {
    color: "white",
    fontSize: 16,
  },
});
