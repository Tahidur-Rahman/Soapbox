import React from "react";
import { View } from "react-native";
// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// Others
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import MyTabBar from "./component/MyTabBar";
import Feed from "./screens/Feed";

// Home Screens
export default function App() {
  let [fontsLoaded] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function Main() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />} 
      screenOptions={{ headerShown: false }} 
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Globe" component={Globe} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const Globe = () => <View></View>;
const Notifications = () => <View></View>;
const Profile = () => <View></View>;
