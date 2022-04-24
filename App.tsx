import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import React, { useEffect } from "react";
import { OverlayProvider, Chat, Theme, DeepPartial } from "stream-chat-expo";
import { StreamChat } from "stream-chat";
import AuthContext from './src/contexts/AuthContext';
import { StreamColors } from "./src/constants/Colors";

const API_KEY = "ea2zqy9t4mfu";
const client = StreamChat.getInstance(API_KEY);

export default function App() {
  const isLoadingComplete = useCachedResources();

  const theme: DeepPartial<Theme> = {
    colors: StreamColors
  }

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
          <OverlayProvider value={{style: theme}}>
            <Chat client={client}>
              <Navigation colorScheme="dark" />
            </Chat>
          </OverlayProvider>
          <StatusBar style="light" />
       </AuthContext>
      </SafeAreaProvider>
    );
  }
}
