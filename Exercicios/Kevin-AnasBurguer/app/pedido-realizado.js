import { StyleSheet, Text, View, ImageBackground, Image} from "react-native";
import { Link, useLocalSearchParams } from "expo-router";


export default function Page() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Background.png')} style={styles.imageBackground}>
        <View  style={styles.navbar}>
          <Text style={styles.text_nav}>Kevin & Ana's Burger</Text>
        </View>
        <View style={styles.container_escolha}>
          <Text style={styles.title}>OBRIGADO POR COMPRAR CONOSCO!</Text>

          <Image style={styles.img} source = {require("../assets/paperbag.png")} />

          <Image style={styles.check} source = {require("../assets/check.png")} />

          <View  style={styles.dad}>
            <Link href= '/' style={styles.texto}>

            <Text>ESTAMOS PREPARANDO SEU PEDIDO</Text>

            </Link>
          </View>
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
     backgroundColor: "rgba(255, 92, 0, 0.6)",

   },

   text_nav:{
    fontSize: 25
   },


   container_escolha:{
    
     position: "absolute",
     bottom: 0,
     marginBottom: 20,
     backgroundColor: "#FFF",
     borderRadius: 30,
     height: "85%",
     width: "90%",
     alignItems: "center",
     justifyContent: "center",

   },

   img:{
    position: "absolute",
    top: 120
   },
   check:{
    bottom: 90,
    position: "absolute"
   }
   ,
   title:{
     top: 0,
     marginTop: 30,
     position: "absolute",
     fontSize: 25,
     fontWeight: 'bold',
     letterSpacing: 1,
     textAlign: "center"
   },
   dad:{
    position: "absolute",
    width: 300,
    marginTop: 20,
    height: 70,
    bottom: 20,
 
    
    
   },
   texto:{
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 20
   
   }
});
