import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import React, { useEffect } from "react";
import { OverlayProvider, Chat, ChannelList, Channel, MessageList, MessageInput } from "stream-chat-expo";
import { StreamChat } from "stream-chat";
import AuthContext from './src/contexts/AuthContext';

const API_KEY = "ea2zqy9t4mfu";
const client = StreamChat.getInstance(API_KEY);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    
  
    return () => {
      client.disconnectUser();
    }
  }, [])
  
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
       <AuthContext>
          <OverlayProvider>
            <Chat client={client}>
              <Navigation colorScheme={colorScheme} />
              {/* {!selectedChannel ? (
                <ChannelList onSelect={onChannelSelected} />
              ) : (
                <Channel channel={selectedChannel}>
                  <Text style={{margin: 50}} onPress={() => setSelectedChannel(null)}>Go Back</Text>
                  <MessageList/>
                  <MessageInput/>
                </Channel>
              )} */}
            </Chat>
          </OverlayProvider>
          <StatusBar style="light" />
       </AuthContext>
      </SafeAreaProvider>
    );
  }
}
