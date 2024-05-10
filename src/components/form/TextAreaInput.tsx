import {View, TextInput, Text, StyleSheet} from "react-native";
import { Colors } from "../../assets/constants/colors";

export function TextAreaInput({title}:{title:string}){
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>
        {title}
      </Text>

      <TextInput style={styles.input} multiline={true} placeholder={`Descreva o ${title.toLowerCase()} nesse campo`} placeholderTextColor={"#fff"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    width: "92%",
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 12
  },

  text:{
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: Colors.primaryColorLight,
    width: "100%",
    textAlign: "center",
    paddingBottom: 10
  },

  input: {
    marginTop: 10,
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal:6,
    backgroundColor: Colors.primaryColorDark,
    maxHeight: 110
  },
});