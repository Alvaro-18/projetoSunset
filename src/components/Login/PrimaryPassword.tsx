import {
  View,
  Pressable,
  Image,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import {useState} from "react";
import {Colors} from "../../assets/constants/colors";

export function PrimaryPasswordInput({
  placeholder,
  label,
  isInvalid,
  onChangeText,
  value,
}: {
  placeholder: string;
  label?: string;
  isInvalid: boolean;
  onChangeText: (text: string) => void;
  value: string;
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function EyeIcon() {
    return isPasswordVisible ? (
      <Image source={require("../../assets/images/eyeOpenIcon.png")} />
    ) : (
      <Image source={require("../../assets/images/eyeClosedIcon.png")} />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={isInvalid ? [styles.label, styles.labelErro] : styles.label}>
        {label == undefined ? placeholder : label}*
      </Text>
      <View
        style={
          isInvalid
            ? [styles.InputContainer, styles.InputContainerErro]
            : styles.InputContainer
        }>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={!isPasswordVisible}
          value={value}
          onChangeText={onChangeText}
        />
        <Pressable
          style={styles.showButton}
          onPress={() => {
            setIsPasswordVisible(!isPasswordVisible);
          }}>
          <EyeIcon />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },

  labelErro: {
    color: Colors.erroColor,
  },

  label: {
    color: "#000",
    paddingLeft: 12,
    fontWeight: "bold",
  },

  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: Colors.secundaryColorLight,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  InputContainerErro: {
    borderColor: Colors.erroColor,
    borderWidth: 2,
    backgroundColor: "#B9B9B9",
  },

  input: {
    width: "80%",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    paddingLeft: 12,
  },

  showButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    height: 48,
  },
});
