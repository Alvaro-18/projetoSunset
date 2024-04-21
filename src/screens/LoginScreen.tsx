import {
  View,
  Pressable,
  Image,
  TextInput,
  StyleSheet,
  Text,
  Alert,
} from "react-native";
import {Controller, useForm} from "react-hook-form";

import {useNavigation} from "@react-navigation/native";
import {PrimaryButton} from "../components/Login/PrimaryButton";
import {PrimaryTextInput} from "../components/Login/PrimaryTextInput";
import {Colors} from "../assets/constants/colors";
import {PrimaryPasswordInput} from "../components/Login/PrimaryPassword";

export function LoginScreen() {
  const navigation = useNavigation<any>();

  const {
    control,
    handleSubmit,
    resetField,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  function resetFields() {
    resetField("name", {defaultValue: ""});
    resetField("password", {defaultValue: ""});
  }

  const onSubmit = async (userData: {name: string; password: string}) => {
    try {
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Unable to log in, check your credentials and try again",
      );
    }
    resetFields();
  };

  return (
    <View style={styles.containerGeral}>
      <View style={styles.formContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.img}
        />

        <View style={styles.form}>
        <Controller
          name="name"
          control={control}
          rules={{
            required: true,
            pattern: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
          }}
          render={({field: {onChange, value}, fieldState}) => (
            <PrimaryTextInput
              placeholder="Nome completo"
              isInvalid={fieldState.invalid}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.name && <Text style={styles.alertText}>Not a valid name.</Text>}

        <Controller
          name="password"
          control={control}
          rules={{required: true, minLength: 6}}
          render={({field: {onChange, value}, fieldState}) => (
            <PrimaryPasswordInput
              placeholder="Senha"
              isInvalid={fieldState.invalid}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.alertText}>Name or password incorrect</Text>
        )}
        </View> 

        <PrimaryButton onPress={handleSubmit(onSubmit)} text="Login" />
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

  form: {
    alignItems: "center",
    width: "100%",
    height: 180,
    justifyContent: "space-evenly",
    marginBottom: 20
  },

  alertText: {
    color: "red",
  },

  img: {
    marginTop: 18,
    marginBottom: 8
  },
});
