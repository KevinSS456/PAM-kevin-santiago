import { StyleSheet, Text, View, ImageBackground, Image} from "react-native";
import { Link } from "expo-router";
import 'https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap'


export default function Page() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Background.png')} style={styles.imageBackground}>
        <View  style={styles.navbar}>
          <Text>Kevin & Ana's Burger</Text>
        </View>
        <View>
          <Text>Monte Seu Lanche</Text>

          <Image source={require("../assets/pao.png")} />

          <Text>Seu Hamburguer Será:</Text>

          <Link href='#'>
            
          </Link>
          <Link href="#">
              
          </Link>
         
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: '100%',
  },
  main: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    marginHorizontal: "auto",
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
   navbar:{
     top: 0,
     flex: 1,
     position: "absolute",
     justifyContent: 'center', 
     alignItems: 'center',
     width: "100%",
     height: "8%",
     backgroundColor: "#FF5C00",
     fontSize: 50,

   },
});
