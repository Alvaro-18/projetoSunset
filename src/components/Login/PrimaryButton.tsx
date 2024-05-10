import {GestureResponderEvent, Pressable, StyleSheet, Text} from "react-native";
import {Colors} from "../../assets/constants/colors";

export function PrimaryButton({
  onPress,
  text,
}: {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) =>
        pressed ? [styles.btn, styles.pressed] : styles.btn
      }>
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: Colors.secundaryColorDark,
  },

  btn: {
    backgroundColor: Colors.secundaryColor,
    height: 48,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  btnText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
