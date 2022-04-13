import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { BLACK, CORAL, GRAY, LIGHT_GRAY } from "../styles/Colors";
import { openSansRegular, openSansSemiBold } from "../styles/Fonts";
import { moderateScale } from "../styles/Scalling";
const { width } = Dimensions.get("screen");
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Post({ item }) {
  return (
    <View style={styles.post}>
      <Image style={styles.avatar} source={{ uri: item.avatar }} />
      <View style={{ width: width - 75, paddingLeft: 5 }}>
        <View style={styles.titleCont}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.lightText}>Just now</Text>
        </View>
        <Text style={styles.username}>{item.username}</Text>
        {item.post && <Text style={styles.postText}>{item.post}</Text>}
        <View style={styles.player}>
          <Icon
            name={item.playing ? "pause-circle" : "play-circle"}
            size={40}
            color={item.playing ? CORAL : BLACK}
          />
          <View style={styles.indicator}>
            {item.playedPercentage && (
              <View
                style={{
                  height: 5,
                  borderRadius: 5,
                  backgroundColor: CORAL,
                  width: `${item.playedPercentage}%`,
                }}
              />
            )}
          </View>
          <Text style={styles.time}>{item.duration}</Text>
        </View>
        <View style={styles.feedItem}>
          {item.timer && (
            <FeedItem icon="clock" value={item.timer} color={BLACK} />
          )}
          <FeedItem icon="comment" value={item.comments} color={BLACK} />
          <FeedItem
            icon="thumbs-up"
            value={item.likes}
            color={item.liked ? CORAL : BLACK}
          />
          <FeedItem icon="bookmark" color={item.bookmarked ? CORAL : BLACK} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  post: {
    width: width - 30,
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomColor: LIGHT_GRAY,
    borderBottomWidth: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: LIGHT_GRAY,
  },
  title: {
    fontFamily: openSansSemiBold,
    fontSize: moderateScale(18),
    color: BLACK,
  },
  titleCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  time: {
    fontFamily: openSansRegular,
    fontSize: moderateScale(13),
    color: BLACK,
  },
  lightText: {
    fontFamily: openSansRegular,
    fontSize: moderateScale(12),
    color: GRAY,
  },
  postText: {
    fontFamily: openSansRegular,
    fontSize: moderateScale(15),
    marginTop: 5,
    color: BLACK,
  },
  player: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
  },
  indicator: {
    height: 5,
    borderRadius: 20,
    width: width - 170,
    backgroundColor: LIGHT_GRAY,
    marginHorizontal: 5,
  },
  feedItem: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
});
const FeedItem = ({ icon, value, color }) => (
  <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}>
    <Icon name={icon} color={color} size={20} style={{ marginRight: 4 }} />
    {icon != "bookmark" && <Text style={styles.time}>{value}</Text>}
  </View>
);
