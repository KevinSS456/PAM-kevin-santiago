import { StyleSheet, Text, View, ImageBackground, Image} from "react-native";
import { Link } from "expo-router";
import { IrishGrover } from '@expo-google-fonts/irish-grover';


export default function Page() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Background.png')} style={styles.imageBackground}>
        <View  style={styles.navbar}>
          <Text style={styles.text_nav}>Kevin & Ana's Burger</Text>
        </View>
        <View style={styles.container_escolha}>
          <Text style={styles.title}>MONTE SEU LANCHE</Text>

          <Image style={styles.img} source={require("../assets/pao.png")} />

          <Text style={styles.subtitle}>SEU HAMBÚRGUER SERÁ:</Text>

          <Link style={styles.button} href='#'>
            <Image source={require("../assets/opcaocarne.png")} />
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
     backgroundColor: "rgba(255, 92, 0, 0.8)",

   },

   text_nav:{
    fontSize: 25,
    fontFamily: 'IrishGrover',
   },


   container_escolha:{
    
     position: "absolute",
     bottom: 0,
     marginBottom: 20,
     flex: 1,
     backgroundColor: "#FFF",
     borderRadius: 30,
     height: "85%",
     width: "90%",
     alignItems: "center",
     justifyContent: "center",

   },

   img:{
    marginTop: 100,
    position: "fixed"
   },
   title:{
     top: 0,
     marginTop: 20,
     position: "absolute",
     fontSize: 27,
     fontWeight: 'bold',
     letterSpacing: 1,
   },
   subtitle: {
     position: "relative",
     marginTop: 20,
      fontWeight: 'bold',
      fontSize: 26,
   }
});
