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
          <Text style={styles.title}>MONTE SEU LANCHE</Text>

          <Image style={styles.img} source = {require("../assets/carnesemqueijo.png")} />

          <Text style={styles.subtitle}>SEU HAMBÚRGUER SERÁ:</Text>
          <View  style={styles.dad}>
            <Link href='/confimation-carne' style={styles.buttonFood}>

            <Image   source={require("../assets/opcaoqueijo.png")} />
            </Link>
            <Link href='/confimation-carnesem'  style={styles.buttonFood2}>
            <Image   source={require("../assets/opcaosemqueijo.png")} />
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
    justifyContent: "space-between",
    width: 320,
    height: 100,
    marginLeft: 25,
    top: 0,
    padding: 0
   },
   buttonFood:{
     top: 0,
     height: 300,
     width:150
   },
   buttonFood2:{
     top: 0,
    position: "absolute",
    height: 300,
    width:150,
    top: 0,
    right: 0
  }
});
