import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "../screens/HomeScreen";
import {LoginScreen} from "../screens/LoginScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { FormScreen } from "../screens/FormScreen";
import { HeaderBar } from "../components/home/HeaderBar";

const Stack = createNativeStackNavigator();

export function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header:() => <HeaderBar/>
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}   options={{
        headerShown: false,
      }}/>
        <Stack.Screen name="Form" component={FormScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
