import {View, StyleSheet} from "react-native";
import {LoginScreen} from "../screens/LoginScreen";

export function Main() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});