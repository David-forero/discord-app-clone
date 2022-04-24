import { createDrawerNavigator } from "@react-navigation/drawer";
import TabOneScreen from "../screens/TabOneScreen";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { ChannelList } from "stream-chat-expo";
import ChannelScreen from "../screens/ChannelScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthContext } from "../contexts/AuthContext";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const onChannelSelected = (channel: any) => {
    // console.log(channel);
    props.navigation.navigate("ChannelScreen", { channel });
  };

  //*me traigo el userId y lo pongo en el arreglo filters para que solo me traiga los canales que esta el usuario
  const { userId } = useAuthContext();
  const filters = { members: { $in: [userId] } };

  return (
    <SafeAreaView {...props} style={{ flex: 1 }}>
      <ChannelList onSelect={onChannelSelected} filters={filters} />
    </SafeAreaView>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="ChannelScreen" component={ChannelScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
