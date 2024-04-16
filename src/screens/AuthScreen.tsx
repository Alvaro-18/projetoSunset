import {View, Pressable, Image, TextInput, StyleSheet, Text} from "react-native";
import { Colors } from "../assets/constants/colors";

export function AuthScreen() {
  return (
    <View style={styles.containerGeral}>
      <View style={styles.formContainer}>
        <Image source={require("../assets/logo.png")} />
        <View style={styles.inputContainer}>
          <Text>Nome completo*</Text>
          <TextInput placeholder="Nome completo" />
        </View>

        <View style={styles.inputContainer}>
          <Text>Senha*</Text>
          <TextInput placeholder="Senha" />
        </View>

        <Pressable style={styles.btn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGeral: {
    backgroundColor: Colors.secundaryColor,
  },

  formContainer: {
    width: "80%",
    backgroundColor: "#fff",
  },

  inputContainer: {
    width: "80%",
    backgroundColor: Colors.secundaryColorLight,

  },

  btn: {},
});
