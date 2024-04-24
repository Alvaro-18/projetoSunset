import { Pressable, Text, StyleSheet, GestureResponderEvent } from "react-native";
import { Colors } from "../../assets/constants/colors";

export function NavigationButton({onPress, text}:{ onPress: (event: GestureResponderEvent) => void;
  text: string;}){
  return (
    <Pressable
    style={({pressed}) =>
      pressed ? [styles.btn, styles.pressed] : styles.btn
    }
    onPress={onPress}
    >
    <Text style={styles.text}>{text}</Text>
  </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "92%",
    height: 60,
    alignSelf: "center",
    backgroundColor: Colors.primaryColor,
    marginBottom: 14,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  pressed: {
    backgroundColor: Colors.primaryColorDark,
  },

  text: {
    fontWeight: "600",
    fontSize: 22,
    color: "#fff",
  },
});
