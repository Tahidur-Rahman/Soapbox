import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { WHITE, BLACK } from "../styles/Colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import { openSansSemiBold } from "../styles/Fonts";
import { moderateScale } from "../styles/Scalling";
import { POSTS } from "../db/data";
import Post from "../component/Post";

export default function Feed() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: WHITE }}>
      <StatusBar backgroundColor={WHITE} barStyle="dark-content" />
      {/* Top Header */}
      <View style={styles.header}>
        <Icon name="red-river" size={30} />
        <Text style={styles.title}>Dwight's Feed</Text>
        <Icon name="play-circle" size={30} />
      </View>
      {/* List of Posts */}
      <FlatList
        data={POSTS}
        renderItem={({ item }) => <Post item={item} />}
        style={{ padding: 15 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.username + index}
      />
      {/* Microphone */}
      <TouchableOpacity activeOpacity={0.8} style={styles.microphoneContainer}>
        <Icon name="microphone" size={32} color={WHITE} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontFamily: openSansSemiBold,
    fontSize: moderateScale(18),
    color: BLACK,
  },
  microphoneContainer: {
    height: 60,
    width: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BLACK,
    position: "absolute",
    right: 15,
    bottom: 10,
  },
});
