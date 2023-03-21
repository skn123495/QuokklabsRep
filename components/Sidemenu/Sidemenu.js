import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Avatar, Title, Caption, Paragraph, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather, MaterialIcons } from "@expo/vector-icons/build/Icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const vw = Dimensions.get("window").width / 100;
const vh = Dimensions.get("window").height / 100;

const SideMenu = (props) => {
  const navigation = useNavigation();
  async function signOut() {
    try {
      await AsyncStorage.removeItem("token");
      navigation.reset({ index: 0, routes: [{ name: "AuthStack" }] });
    } catch (error) {
      Alert.alert("Sorry", "Something Went Wrong");
      setIsAuthenticating(false);
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/33257022?v=4",
              }}
              size={50}
            />
            <View style={{ marginLeft: 15, flexDirection: "column" }}>
              <Title style={styles.title}>Sarabjeet Singh</Title>
              <Caption style={styles.caption}>Quokkalabs.com</Caption>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                2000
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                1K
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>
        {/* Drawer Section */}
        <Drawer.Section>
          <DrawerItem
            icon={() => (
              <MaterialCommunityIcons
                name="home-outline"
                style={{ fontSize: 2.8 * vh, color: "grey" }}
              />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate("WelcomeScreen");
            }}
          />

          <DrawerItem
            icon={() => (
              <MaterialCommunityIcons
                name="account-outline"
                style={{ fontSize: 2.8 * vh, color: "grey" }}
              />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
          <DrawerItem
            icon={() => (
              <MaterialIcons
                name="category"
                style={{ fontSize: 2.8 * vh, color: "grey" }}
              />
            )}
            label="Categories"
            onPress={() => {
              props.navigation.navigate("Categories");
            }}
          />
          <DrawerItem
            icon={() => (
              <MaterialCommunityIcons
                name="account-check-outline"
                style={{ fontSize: 2.8 * vh, color: "grey" }}
              />
            )}
            label="Support"
            onPress={() => {
              props.navigation.navigate("Support");
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <DrawerItem
        icon={() => (
          <Feather name="info" style={{ fontSize: 2.8 * vh, color: "grey" }} />
        )}
        label="Version 1.0.1"
        onPress={() => {
          signOut();
        }}
      />
      <DrawerItem
        icon={() => (
          <MaterialCommunityIcons
            name="exit-to-app"
            style={{ fontSize: 2.8 * vh, color: "grey" }}
          />
        )}
        label="Sign Out"
        onPress={() => signOut()}
      />
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 3 * vh,
  },
  title: {
    fontSize: 2 * vh,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 2 * vh,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 1 * vh,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 1.5 * vh,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 1 * vw,
  },
  drawerSection: {
    marginTop: 1.5 * vh,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
