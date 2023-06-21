import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View,Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
  <KeyboardAvoidingView style={styles.background}> 
    <View>
      <Image
        source={'./src/assets/logo.png'}
      />
    </View>
    
    <View>
      <TextInput
        placeholder='Email'
        autoCorrect={false}
        onChangeText={()=>{}}
      />
    
      <TextInput
        placeholder='Senha'
        autoCorrect={false}
        onChangeText={()=>{}}
      />

      <TouchableOpacity>
        <Text>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Criar conta gratuita</Text>
      </TouchableOpacity>

    </View>
  </KeyboardAvoidingView>  
    );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },
  containerLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
