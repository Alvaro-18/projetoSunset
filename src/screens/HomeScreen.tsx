import { Pressable, Text, View, StyleSheet, FlatList} from "react-native";
import {Colors} from "../assets/constants/colors";

import {HeaderBar} from "../components/home/HeaderBar";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NavigationButton } from "../components/UI/NavigationButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const DATA = [
  {nome: "relatório 1"},
  {nome: "relatório 1"},
  {nome: "relatório 1"},
  {nome: "relatório 1"},
  {nome: "relatório 1"},
  {nome: "relatório 1"},
  {nome: "relatório 1"},
  {nome: "relatório 1"},
  {nome: "relatório 1"},
  {nome: "relatório 1"},
  {nome: "relatório 1"},
  {nome: "relatório 1"},
  {nome: "relatório 1"},
  {nome: "relatório 1"},
  {nome: "relatório 1"},
];

export function HomeScreen() {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function navigationHandlerReport (){
    navigation.navigate("Relatorio");
  }

  function navigationHandlerForm () {
    navigation.navigate("Form");
  }
  
  return (
    <View style={styles.containerGeral}>
      <View style={styles.ListContainer}>
        <NavigationButton text="Cadastrar novo relatório" onPress={navigationHandlerForm}/>
        <FlatList
          data={DATA}
          style={styles.buttonsContainer}
          renderItem={({item}) => (
            <NavigationButton onPress={navigationHandlerReport} text={item.nome}/>
          )}
        />
      </View>

      <Pressable
        style={({pressed}) =>
          pressed ? [styles.btn, styles.btnInfo, styles.pressedInfo] : [styles.btn, styles.btnInfo]
        }>
        <Text style={styles.text}>informações</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerGeral: {
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
  },

  ListContainer: {
    verticalAlign: "middle",
    justifyContent: "center",
    marginBottom: 12,
    height: "80%",

  },

  buttonsContainer: {
    maxHeight: 460
  },

  btn: {
    width: "92%",
    height: 60,
    alignSelf: "center",
    backgroundColor: Colors.primaryColor,
    marginBottom: 14,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  btnInfo: {
    backgroundColor: Colors.grayColor
  },

  pressed: {
    backgroundColor: Colors.primaryColorDark,
  },

  pressedInfo: {
    backgroundColor: Colors.grayColorDark,
  },

  text: {
    fontWeight: "600",
    fontSize: 22,
    color: "#fff",
  },
});
