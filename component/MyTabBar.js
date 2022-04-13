import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { BLACK, DARK_GRAY, LIGHT_GRAY, WHITE } from "../styles/Colors";
import { moderateScale } from "../styles/Scalling";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };
        let iconName;
        switch (route.name) {
          case "Feed":
            iconName = "home";
            break;
          case "Globe":
            iconName = "globe";
            break;
          case "Notifications":
            iconName = "bell";
            break;
          case "Profile":
            iconName = "user-alt";
            break;
        }
        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.name}
            style={styles.tabItem}
          >
            <Icon name={iconName} size={moderateScale(24)} color={isFocused?BLACK:DARK_GRAY}/>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    borderColor: LIGHT_GRAY,
    borderTopWidth: 1,
    paddingTop: 15,
    paddingBottom: 20,
    backgroundColor:WHITE
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
