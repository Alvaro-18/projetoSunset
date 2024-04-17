import {
  View,
  Pressable,
  Image,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import {Colors} from "../assets/constants/colors";
import {useState} from "react";

export function LoginScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function EyeIcon() {
    return isPasswordVisible ? (
      <Image source={require("../assets/images/eyeOpenIcon.png")} />
    ) : (
      <Image source={require("../assets/images/eyeClosedIcon.png")} />
    );
  }

  return (
    <View style={styles.containerGeral}>
      <View style={styles.formContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.img}
        />

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Nome completo*</Text>
          <TextInput
            placeholder="Nome completo"
            style={[styles.input, styles.inputName]}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Senha*</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              placeholder="Senha"
              style={[styles.input, styles.inputPassword]}
              secureTextEntry={!isPasswordVisible}
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

        <Pressable
       
          style={({pressed}) =>
            pressed ? [styles.btn, styles.pressed] : styles.btn
          }>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGeral: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryColor,
  },

  formContainer: {
    height: 500,
    width: "86%",
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
  },

  img: {
    marginVertical: 18,
  },

  text: {
    color: "#000",
    paddingLeft: 12,
    fontWeight: "bold",
  },

  inputContainer: {
    width: "90%",
    marginBottom: 18,
  },

  input: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 12,
  },

  inputName: {
    height: 48,
    borderRadius: 8,
    backgroundColor: Colors.secundaryColorLight,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  inputPassword: {
    width: "80%",
  },

  passwordInputContainer: {
    borderRadius: 8,
    backgroundColor: Colors.secundaryColorLight,
    flexDirection: "row",
    alignItems: "center",
  },

  showButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    height: 48,
  },

  
  pressed: {
    backgroundColor: Colors.secundaryColorDark,
  },

  btn: {
    marginTop: 20,
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
