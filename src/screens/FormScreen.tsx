import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { OptionsGroup } from "../components/form/OptionsGroup";

import { options } from "../assets/constants/options";
import { DateInput } from "../components/form/DateInput";
import { TextAreaInput } from "../components/form/TextAreaInput";
import { CheckBoxInput } from "../components/form/CheckBoxInput";

export function FormScreen() {

  return (
    <View style={styles.container}>
      <CheckBoxInput title="Cerca(Perimetro)"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 32}
});
