import {View, Text, TextInput, StyleSheet} from "react-native";
import {Colors} from "../../assets/constants/colors";

export function PrimaryTextInput({
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
  return (
    <View style={styles.container}>
      <Text style={isInvalid ? [styles.label, styles.labelErro] : styles.label}>
        {label == undefined ? placeholder : label}*
      </Text>

      <TextInput
        placeholder={placeholder}
        style={isInvalid ? [styles.input, styles.inputErro] : styles.input}
        value={value}
        onChangeText={onChangeText}
      />
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

  inputErro: {
    borderColor: Colors.erroColor,
    borderWidth: 2,
    backgroundColor: "#B9B9B9"
  },

  input: {
    height: 48,
    borderRadius: 8,
    backgroundColor: Colors.secundaryColorLight,
    width: "100%",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },
});
