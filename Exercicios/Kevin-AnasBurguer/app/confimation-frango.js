import { StyleSheet, Text, View, ImageBackground, Image} from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
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

          <Image style={styles.img} source = {require("../assets/frangocomqueijo.png")} />

          <Text style={styles.subtitle}>CONFIRMAR PEDIDO?</Text>
          <View  style={styles.dad}>
            <Link href='/pedido-realizado' style={styles.buttoncfm}>

            <Text>SIM, CONFIRME</Text>

            </Link>
            <Link href="/index"  style={styles.buttoncfm2}>
            <Text>NÃO, QUERO REINICIAR</Text>
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
    fontSize: 25,
    fontFamily: 'IrishGrover',
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
    marginTop: 150,
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
     marginTop: 30,
      fontWeight: 'bold',
      fontSize: 26,
   },
   dad:{
    width: 250,
    marginTop: 20,
    height: 150,
    top: 0,
    paddingTop: 20,
    
   },
   buttoncfm:{
     height: 50,
     width:250,
     textAlign: "center",
     textAlignVertical: "center",
     backgroundColor: "#297427",
     borderRadius: 5,
     padding: 6,
     fontSize: 20
   },
   buttoncfm2:{
    position: "absolute",
    padding: 6,
    height: 50,
    width:250,
    backgroundColor: "#A42E2E",
    right: 0,
    textAlignVertical: "center",
    fontSize: 20,
    textAlign: "center",
    borderRadius: 5,
    bottom: 0
  }
});
