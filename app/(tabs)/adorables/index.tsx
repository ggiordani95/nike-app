import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Link, useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import useFavoriteStore from "../../../stores/favorites";
import React from "react";

export default function index() {
  const { height, width } = useWindowDimensions();

  const router = useRouter();
  const atFavorites = useFavoriteStore((state) => state.favoriteSneakers);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        position: "relative",
      }}
    >
      <View
        style={{
          height: height / 6,
          width: width,
          backgroundColor: "#131313",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => router.back()}
          style={{
            position: "absolute",
            zIndex: 4,
            top: height * 0.07,
            left: width * 0.03,
            width: 100,
          }}
        >
          <Icon
            name={"chevron-left"}
            size={40}
            style={{ opacity: 0.7 }}
            color="#d3d3d3"
          />
        </Pressable>
        <Image
          source={require("../../../assets/nikewhite.png")}
          style={{ height: 45, width: 45, top: 10 }}
        />
      </View>
      <FlatList
        data={atFavorites}
        renderItem={({ item, index }: any) => (
          <Link href="/" key={index}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "#f3f3f3",
                width: width * 0.9,
                gap: 8,
                height: height / 7,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 14,
                  borderWidth: 1,
                  borderColor: "#d3d3d3",
                }}
              />

              <Text style={{ fontSize: RFValue(12), marginLeft: 14 }}>
                {item.name}
              </Text>
            </View>
          </Link>
        )}
        ListFooterComponent={<View style={{ height: height * 0.2 }}></View>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
