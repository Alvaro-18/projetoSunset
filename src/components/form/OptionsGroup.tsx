import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import {useState} from "react";
import { Colors } from "../../assets/constants/colors";

export function OptionsGroup ({data}:{data:string[]}) {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("Tipo de relatório");

  function ArrowIcon() {
    return isActive ? (
      <Image
        source={require("../../assets/images/arrowRight.png")}
        style={styles.img}
        resizeMode="contain"
      />
    ) : (
      <Image
        source={require("../../assets/images/arrowDown.png")}
        style={styles.img}
        resizeMode="contain"
      />
    );
  }

  function setOptionSelected (text:string){
    setIsActive(!isActive);
    setText(text);
  }

  return (
    <Pressable
    onPress={() => {
      setIsActive(!isActive);
    }}
    style={styles.btn}>
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <ArrowIcon />
    </View>

    <View style={isActive ?  styles.optionsDesactivated : styles.options}>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({item}) => (
          <Pressable
        onPress={() => {
          setOptionSelected(item);
        }}
        style={styles.optionsButton}
        >
        <Text style={styles.text}>{item}</Text>
      </Pressable>
        )}
      />
    </View>
  </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "92%",
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    backgroundColor: Colors.primaryColor,
    borderRadius: 12,
  },

  container: {
    height: 60,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  img: {
    width: 26,
    height: 26,
  },

  options: {
    borderTopColor: Colors.primaryColorLight, 
    borderTopWidth: 2,
    justifyContent: "space-evenly",
    paddingTop: 18,
    paddingBottom: 20,
    gap: 14
  },

  optionsDesactivated: {
    display: "none"
  },

  list:{
    maxHeight: 140
  },

  optionsButton: {
    backgroundColor: Colors.primaryColorDark,
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 12,
    justifyContent:"center",
    marginBottom: 14
  }
});
