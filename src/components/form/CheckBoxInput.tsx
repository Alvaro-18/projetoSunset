import {useState} from "react";
import {View, Text, StyleSheet, Pressable, Image, TextInput} from "react-native";
import {Colors} from "../../assets/constants/colors";

export function CheckBoxInput({title}: {title: string}) {
  const [isVisible, setIsVisible] = useState(false);

  function CheckBox() {
    return isVisible ? (
      <Image source={require("../../assets/images/checkedIcon.png")} />
      
    ) : (
      <Image source={require("../../assets/images/checkIcon.png")} />
    );
  }

  return (
    <Pressable
      style={styles.inputContainer}
      onPress={() => {
        setIsVisible(!isVisible);
      }}>
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
        <CheckBox />
      </View>

      <View style={isVisible ? styles.modal : styles.disable}>
        <TextInput style={styles.titleInput} placeholder="Quantidade ou medida" placeholderTextColor={"#fff"}/>

        <Pressable style={styles.btn}>
          <Text style={styles.text}>
            Adicionar foto +
          </Text>
        </Pressable>
        
        <TextInput style={styles.legendInput} placeholder="Adicionar legenda +" placeholderTextColor={"#fff"}/>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inputContainer: {

    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    width: "92%",
    alignSelf: "center",
    borderRadius: 12,
  },

  header:{
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },

  modal:{
    height: 380,
    width: "94%",
    borderTopColor: Colors.primaryColorLight,
    borderTopWidth: 2
  },

  titleInput:{
    height: 42,
    backgroundColor: Colors.primaryColorDark,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 12,
    marginVertical: 24,
    textAlign: "center"
  },

  btn:{
    height: 200,
    backgroundColor: Colors.primaryColorDark,
    alignItems: "center",
    justifyContent: "center"
  },

  legendInput:{
    height: 42,
    backgroundColor: Colors.primaryColorDark,
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 12,
    marginTop: 16,
    textAlign: "center"
  },

  disable: {
    display: "none"
  }
});
