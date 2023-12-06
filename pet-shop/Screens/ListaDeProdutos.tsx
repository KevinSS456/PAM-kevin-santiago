import { View, 
         Text, 
         TouchableOpacity, 
         FlatList, 
         StyleSheet, 
         Dimensions, 
         SafeAreaView, 
         StatusBar,
         Modal, 
         Image,
        TextInput, 
        ScrollView} from "react-native";
import React, { useEffect, useState } from "react";
import { FIRESTORE_DB } from "../config/firebaseconfig";
import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { TextInputMask } from "react-native-masked-text";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";

export interface Produto {
    nameproduto: string;
    precoRS: string;
    descricao: string;
    id: string
}


const SCREEN_HEIGHT = Dimensions.get("window").height
const SCREEN_WIDTH = Dimensions.get("window").width

const Listas = ({ navigation} : any) => {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [produto, setProduto] = useState('');
    const [cadNomeProduto, setCadNomeProduto] = useState('');
    const [cadPrecoProduto, setCadPrecoProduto] = useState('');
    const [cadDescProduto, setCadDescProduto] = useState('');
    const [modalCadastro, setModalCadastro] = useState(false);

    useEffect(() => {
        const produtoRef= collection(FIRESTORE_DB, 'produtos');

        const contagem = onSnapshot(produtoRef, {
            next: (snapshot) => {
                console.log('UPDATED');

                const produtos: Produto[] = [];
                snapshot.docs.forEach((doc) =>{
                    produtos.push({
                        id: doc.id,
                        ...doc.data(),
                    }as Produto);
                    });
                    setProdutos(produtos);
                },
            });
            return () => contagem()
    }, []);

    const adicionarItem = async () =>{
        const doc = await addDoc(collection(FIRESTORE_DB, 'produtos'), 
        { nomeProduto: cadNomeProduto, precoRS: cadPrecoProduto, descricao: cadDescProduto})
        setModalCadastro(false)
        setCadNomeProduto('');
        setCadPrecoProduto('')
        setCadDescProduto('')
    };
    
    const renderProduto = ({item}: any) =>{
        
        const ref = doc(FIRESTORE_DB, `produtos/${item.id}`);

        const deleteProduto = async () => {
            deleteDoc(ref)
        };

        return(
            <View style={{
                //backgroundColor: "#fff", 
                height: SCREEN_HEIGHT*0.735,
                marginBottom: 1,
                justifyContent: 'center',
                position: 'relative',
                }}>
            <View style={styles.itemLista}>
                <Ionicons name="trash-outline" onPress={deleteProduto} 
                    style={{
                        fontSize: SCREEN_WIDTH*0.08, 
                        textAlignVertical: 'center', 
                        position: 'absolute',
                        marginLeft: SCREEN_WIDTH*0.475,
                        marginTop: SCREEN_HEIGHT*0.01,
                        backgroundColor: "#b46321",
                        padding: SCREEN_WIDTH*0.01,
                        textAlign: 'center',
                        borderRadius: SCREEN_WIDTH*0.05,
                        color: "#ffb476" }}/>
            <MaterialIcons name="pets" style={styles.logo}/>
                <View style={styles.PacoteTxt}>
                    <View>
                    <Text style={[styles.txtProdutos, {fontWeight: 'bold', fontSize: SCREEN_WIDTH*0.04}]}>{item.nomeProduto}</Text>
                    <Text style={styles.txtProdutos}>{item.precoRS}</Text>
                    <Text style={styles.txtProdutos}>{item.descricao}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.prateleira}/>
            </View>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container2}>
            <Image source={require("../assets/images/petsback2.png")} style={{position: 'absolute', height: SCREEN_HEIGHT, width: SCREEN_WIDTH}}/>
            <Modal visible={modalCadastro} animationType="fade">
                <View style={styles.container2}>
                    <View style={styles.bgCima}>
                    <Image style={styles.imgPets}source={require("../assets/images/pets2.png")}/>
                        <View style={[styles.bgTituloModal,{flexDirection: "row", marginTop: SCREEN_HEIGHT*0.01}]}>
                            <TouchableOpacity onPress={() => setModalCadastro(false)}>
                                <AntDesign name="left" style={{fontSize: SCREEN_WIDTH*0.1, 
                                            fontWeight: 'bold', 
                                            marginTop: SCREEN_HEIGHT*0.01,
                                            color: '#d8295d'}}/>
                            </TouchableOpacity>
                            <View style={{}}>
                                <Text style = {styles.tituloModal}>CADASTROS</Text>
                                <Text style = {{color: '#d8295d' , fontWeight: 'bold', marginLeft: SCREEN_WIDTH*0.05}}>Cadastre aqui um produto ou serviço</Text>
                            </View>
                        </View>
                    </View>
                    <ScrollView style={styles.bgBaixo}>
                        <View style={styles.viewBaixo}>
                        <Text style={styles.textUPInput}>NOME: </Text>
                            <TextInput 
                                style={styles.inputNome} 
                                placeholder="Digite um nome para o produto"
                                onChangeText={ text => setCadNomeProduto(text)}/>
                        <Text style={styles.textUPInput}>PREÇO: </Text>
                        <TextInputMask style={styles.inputMoney} type="money" options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$',
                            suffixUnit: ''
                            }} 
                            onChangeText={ text => setCadPrecoProduto(text)}
                            placeholder="Digite um preço para o produto ou serviço"/>
                        <Text style={styles.textUPInput}>DESCRIÇÃO: </Text>
                            <TextInput 
                                style={styles.inputDesc} 
                                onChangeText={ text => setCadDescProduto(text)}
                                placeholder="Digite uma descrição para o produto ou serviço"/>
                        </View>
                        <TouchableOpacity 
                            style={styles.btnCadastrar} 
                            onPress={adicionarItem } 
                            disabled={cadNomeProduto=='' || cadPrecoProduto=='' || cadDescProduto==''}>
                            <Text style={styles.txtCadastrar}>Cadastrar produto</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Modal>
            <View style={styles.viewTitulo}>
                <MaterialIcons name="pets" style={styles.titulo}/>
                <Text style={styles.titulo}> ESTOPINHA PET SHOP </Text>
                <MaterialIcons name="pets" style={styles.titulo}/>
            </View>
            <FlatList
            pagingEnabled
            data={produtos}
            renderItem={(item) => renderProduto(item)}
            keyExtractor={(produto: Produto) => produto.id}
            />
            <TouchableOpacity style={styles.abrirModal} onPress={() => setModalCadastro(true)}>
                <Text style={styles.txtbtnAbrirModal}>Cadastre um novo produto</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#f0f0f0",
        flex: 1,
    },
    container2: {
        backgroundColor: "#ffd2fd",
        flex: 1,
    }, 
    modal:{
        backgroundColor: '#da8282'
    },
    prateleira:{
        backgroundColor: "#bf6646",
        height: SCREEN_HEIGHT*0.04,
        width: SCREEN_WIDTH*0.9,
        alignSelf: 'center'
    },
    PacoteTxt:{
        backgroundColor: '#01a1ed',//"#9fddfa",
        borderRadius: SCREEN_WIDTH*0.02,
        //borderWidth: SCREEN_WIDTH*0.01,
        borderColor: '#01a1ed',
        //height: SCREEN_HEIGHT*0.1,
        width: SCREEN_WIDTH*0.45,
        justifyContent: 'center',
        alignSelf: "center",
        textAlignVertical: 'center',
        marginTop: SCREEN_HEIGHT*0.04,
        paddingHorizontal: SCREEN_WIDTH*0.05,
        paddingVertical: SCREEN_HEIGHT*0.005,
    },
    logo:{
        fontSize: SCREEN_WIDTH*0.3,
        borderRadius: SCREEN_WIDTH*0.2,
        color: "#ff5720",
        textAlign: 'center',
        textAlignVertical: "center",
        backgroundColor: "#fdecd2",
        width: SCREEN_WIDTH*0.36,
        height: SCREEN_HEIGHT*0.18,
        alignSelf: 'center',
        marginTop: SCREEN_HEIGHT*0.09,
    },
    viewTitulo:{
        marginTop: SCREEN_HEIGHT*0.03,
        marginBottom: SCREEN_HEIGHT*0.03,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffdcdc",
        borderRadius: SCREEN_WIDTH*0.05,
        borderWidth: SCREEN_WIDTH*0.01,
        borderColor: '#df3252',
        width: SCREEN_WIDTH*0.8,
        height: SCREEN_HEIGHT*0.075,
        flexDirection: 'row'
    },
    titulo:{
        fontSize: SCREEN_WIDTH*0.055,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
        color: '#df3252',
    },
    bgCima:{
        height: SCREEN_HEIGHT*0.4,
        backgroundColor: '#fad2ff'
    },
    bgBaixo:{
        backgroundColor: "#fbdfff"    
    },
    viewBaixo:{
    },
    imgPets:{
        position: 'absolute',
        height: SCREEN_HEIGHT*0.35,
        width: SCREEN_WIDTH*0.95,
        marginTop: SCREEN_WIDTH*0.05,
        alignSelf: 'center'
    },
    bgTituloModal: {
        marginHorizontal: SCREEN_WIDTH*0.05
    },
    txtProdutos:{
        fontSize: SCREEN_WIDTH*0.0275,
        color: '#9fddfa',
        textAlignVertical: 'center'
        //textAlign: 'center'
    },
    itemLista:{
        //marginTop: SCREEN_HEIGHT*0.06,
        width: SCREEN_WIDTH*0.6,
        alignSelf: 'center',
        height: SCREEN_HEIGHT*0.5,
        backgroundColor:"#fec80f",
        borderTopWidth: SCREEN_WIDTH*0.06,
        borderBottomWidth: SCREEN_WIDTH*0.06,
        borderColor: "#8a6e12"
    },
    txtDescProduto:{
        backgroundColor: "#fce8b0",
        height: SCREEN_HEIGHT*0.05,
        width: SCREEN_WIDTH*0.25,
        //alignSelf: 'center',
        borderWidth: SCREEN_WIDTH*0.005,
        borderRadius: SCREEN_WIDTH*0.02,
        borderColor: "#913817"
    },
    tituloModal:{
        fontWeight: 'bold',
        fontSize: SCREEN_WIDTH*0.08,
        color: '#d8295d',
        marginLeft: SCREEN_WIDTH*0.125,
    },
    inputNome:{
        //backgroundColor: 'red',
        width: SCREEN_WIDTH*0.85,
        color: '#818181',
        height: SCREEN_HEIGHT*0.04,
        paddingTop: SCREEN_HEIGHT*0.01,
        borderBottomWidth: 1,
        alignSelf: 'center',
        borderBottomColor: "#818181"
    },
    inputMoney:{
        //backgroundColor: 'red',
        width: SCREEN_WIDTH*0.85,
        color: '#818181',
        height: SCREEN_HEIGHT*0.04,
        paddingTop: SCREEN_HEIGHT*0.01,
        borderBottomWidth: 1,
        alignSelf: 'center',
        borderBottomColor: "#818181"
    },
    inputDesc:{
        //backgroundColor: 'red',
        width: SCREEN_WIDTH*0.85,
        color: '#818181',
        height: SCREEN_HEIGHT*0.04,
        paddingTop: SCREEN_HEIGHT*0.01,
        borderBottomWidth: 1,
        alignSelf: 'center',
        borderBottomColor: "#818181"
    },
    textUPInput:{
        marginHorizontal: SCREEN_WIDTH*0.075,
        marginTop: SCREEN_HEIGHT*0.04,
        color: "#818181"
    },
    abrirModal:{
        marginTop: SCREEN_HEIGHT*0.02,
        backgroundColor: "#e47756",
        alignSelf: 'center',
        justifyContent: 'center',
        height: SCREEN_HEIGHT*0.125,
        width: SCREEN_WIDTH
    },
    txtbtnAbrirModal:{
        fontSize: SCREEN_WIDTH*0.055,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#b54a28',
        backgroundColor: "#fab2b2",
        width: SCREEN_WIDTH*0.75,
        borderRadius: SCREEN_WIDTH*0.06,
        borderWidth: SCREEN_WIDTH*0.01,
        borderColor: "#b54a28",
        height: SCREEN_HEIGHT*0.075,
        alignSelf: 'center'
    },
    btnCadastrar:{
        marginTop: SCREEN_HEIGHT*0.15,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ca5c5c",
        height: SCREEN_HEIGHT*0.1,
        width: SCREEN_WIDTH*0.8,
        borderRadius: SCREEN_WIDTH*0.06
    },
    txtCadastrar:{
        fontSize: SCREEN_WIDTH*0.05,
        fontWeight: 'bold',
        color: '#fff'
    },
})
export default Listas