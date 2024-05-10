import {Image, Pressable, Text, View, StyleSheet} from "react-native";
import {Colors} from "../../assets/constants/colors";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function HeaderBar() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function navigationHandler() {
    //logout
    navigation.navigate("Login");
  }

  return (
    <View style={styles.headerBar}>
      <View style={styles.userContainer}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.img}
        />
        <Text style={styles.text} numberOfLines={1}>
          Álvaro Marques Silva ajhflasjkasjdlasjdalsjdla
        </Text>
      </View>

      <Pressable onPress={navigationHandler} style={styles.btn}>
        <Image
          source={require("../../assets/images/exitIcon.png")}
          style={styles.img}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: Colors.primaryColor,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    justifyContent: "space-between",
  },

  userContainer: {
    flexDirection: "row",
  },

  img: {
    width: 24,
    height: 24,
  },

  text: {
    width: 180,
    marginLeft: 8,
    fontWeight: "400",
    fontSize: 18,
    color: "#fff",
  },

  btn: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
