import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { users } from "../data/user";
import { Avatar, ListItem } from "react-native-elements";

const PeopleScreen = () => {
  const renderItemUser = (itemData) => {
    return (
      <Avatar
        containerStyle={{
          marginVertical: 20,
          marginHorizontal: 7,
        }}
        size="large"
        rounded
        source={{
          uri: itemData.item.avatar,
        }}
      />
    );
  };
  const renderItem = (itemData) => {
    return (
      <ListItem>
        <Avatar
          size="medium"
          rounded
          title={itemData.item.name}
          source={{ uri: itemData.item.avatar }}
        />
        <View
          style={{
            borderWidth: 5,
            borderColor: itemData.item.active ? COLORS.online : COLORS.bgColor,
            borderRadius: 12,
            marginLeft: -21,
            marginTop: 19,
          }}
        ></View>
        <ListItem.Content>
          <ListItem.Title>{itemData.item.name}</ListItem.Title>
          <ListItem.Subtitle>{itemData.item.message}</ListItem.Subtitle>
        </ListItem.Content>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Text> {itemData.item.time}</Text>
        </View>
      </ListItem>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <Text
            style={{
              ...FONTS.h1,
              color: COLORS.white,
              paddingHorizontal: 27,
              fontWeight: "bold",
            }}
          >
            Requests
          </Text>
        </View>
        {/* List */}
        <View>
          <FlatList
            horizontal
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItemUser}
          />
        </View>
        {/* messsgae */}
        <View>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              paddingHorizontal: 27,
              fontWeight: "bold",
              paddingVertical: 23,
            }}
          >
            Messages
          </Text>
        </View>
        {/* list */}
        <View style={{ backgroundColor: COLORS.primaryColor }}>
          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryColor,
    flex: 1,
  },
});

export default PeopleScreen;
