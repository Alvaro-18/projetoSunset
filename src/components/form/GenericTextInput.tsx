import {
  View,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import {Colors} from "../../assets/constants/colors";

export function GenericTextInput({placeholder}: {placeholder: string}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#fff"
      />
      <Image
        source={require("../assets/images/plus.png")}
        style={styles.img}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 60,
    backgroundColor: Colors.primaryColor,
    flexDirection: "row",
    alignItems: "center",
    width: "92%",
    alignSelf: "center",
    borderRadius: 12,
  },

  input: {
    width: "88%",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 12,
  },

  img: {
    width: 26,
    height: 26,
  },
});
