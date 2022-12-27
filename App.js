import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Icon,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './assets/Components/login'

export default function App() {
  
  const Stack = createNativeStackNavigator();
  return (
    <View Style ={styles.container}>

      {/*Handle the navigation part*/}

       <NavigationContainer>
        <Stack.Screen name='Login'Component={Login}/>
       </NavigationContainer>
      <StatusBar style="auto"/>
    </View>
    );
   
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'#fff',
   alignItems:'center',
   justifyContent:'center'

  },
 
});
