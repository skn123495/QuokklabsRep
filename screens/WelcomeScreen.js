import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import {
  BANNER,
  imagesCarou,
  imagesCarouTwo,
  PRODUCT,
} from "../constants/Constant";
import { Colors } from "../constants/styles";
import styles from "./styles";
const { width } = Dimensions.get("window");

const WelcomeScreen = () => {
  return (
    <>
      <ScrollView
        style={{ flex: 1, backgroundColor: Colors.white }}
        nestedScrollEnabled
      >
        <SafeAreaView />
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.white}
          animated={true}
          hidden={false}
        />
        {/* Search Input Container */}
        <View style={styles.headerContain}>
          <Image
            source={require("../assets/noon-logo.png")}
            style={styles.logo}
          />
          <View style={styles.textInputContainer}>
            <TextInput
              style={{ width: "90%", height: 40 }}
              placeholder="What are you looking for"
            />
            <Ionicons name="search" size={20} color="grey" />
          </View>
        </View>
        {/* Location Banner */}
        <View style={styles.locationBanner}>
          <Ionicons name="location" size={17} />
          <Text style={{ paddingHorizontal: 10 }}>
            Deliver to <Text style={{ fontWeight: "bold" }}>Dubai</Text>{" "}
          </Text>
          <AntDesign name="caretdown" size={15} />
        </View>

        {/* Banner */}
        <Image source={{ uri: BANNER.uri }} style={styles.banner} />
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={imagesCarou}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ item, index }) => (
            <View style={styles.carContain}>
              <Image source={{ uri: item?.uri }} style={styles.carImg} />
            </View>
          )}
        />
        {/* Categories */}
        <View style={{ justifyContent: "center" }}>
          <FlatList
            data={imagesCarouTwo}
            keyExtractor={(item) => item.id}
            numColumns={4}
            renderItem={({ item }) => {
              return (
                <View style={styles.flatContain}>
                  <Image
                    source={{ uri: item.uri }}
                    style={{ height: 100, width: 70, resizeMode: "contain" }}
                  />
                </View>
              );
            }}
          />
        </View>
        {/* Recomended For you */}
        <Text style={styles.recomendTxt}>Recomended for you</Text>
        <FlatList
          data={imagesCarouTwo}
          keyExtractor={(item) => item.id}
          horizontal
          renderItem={({ item }) => {
            return (
              <View style={styles.productContain}>
                <Image
                  source={{ uri: PRODUCT.uri }}
                  style={styles.productImg}
                />
                <Text numberOfLines={2} style={styles.productTitle}>
                  Apple iphone 14 Pro Max 256GB Deep
                </Text>
                <Text style={styles.productTitTxt}>
                  AED
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                    {" "}
                    4899.00{" "}
                  </Text>
                  <Text style={{ textDecorationLine: "line-through" }}>
                    5099
                  </Text>
                </Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </>
  );
}
export default React.memo(WelcomeScreen);