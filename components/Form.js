import React, {useState, useContext} from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import { ListaProdutos } from './Lista';

export default function Formulario(){
    const navigation = useNavigation();
    const [inputCodigo, setInputCodigo] = useState('');
    const [inputDescricao, setInputDescricao] = useState('');
    const [inputPreco, setInputPreco] = useState('');
    const [inputQuantidade, setInputQuantidade] = useState('');

    const {produto} = useContext(ListaProdutos);
    const {addProduto} = useContext(ListaProdutos);

    function novoProduto(){
        if(inputCodigo == '' || inputDescricao == '' || 
        inputPreco == '' || inputQuantidade == ''){
            alert('Todos os campos devem estar preenchidos');
            return;
        }
         
        addProduto(produto, inputCodigo, inputDescricao, inputPreco, inputQuantidade);

        navigation.navigate('Home');
    }

    return(
        <View style= {styles.container}>
            <View style = {styles.cadastroProduto}>
                <TextInput
                    style={styles.entrada}
                    placeholder='Código'
                    keyboardType= 'numeric'
                    value={inputCodigo}
                    onChangeText={(text) => setInputCodigo(text)}/>           

                <TextInput
                    style={styles.entrada}
                    placeholder='Descrição'
                    value={inputDescricao}
                    onChangeText={(text) => setInputDescricao(text)}/>

                <TextInput
                    style={styles.entrada}
                    placeholder='Preço'
                    keyboardType= 'numeric'
                    value={inputPreco}
                    onChangeText={(text) => setInputPreco(text)}/>

                <TextInput
                    style={styles.entrada}
                    placeholder='Quantidade'
                    keyboardType= 'numeric'
                    value={inputQuantidade}
                    onChangeText={(text) => setInputQuantidade(text)}/>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={novoProduto}>
                        <Text style={styles.textoBotao}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    cadastroProduto: {
      width: '80%'
    },entrada: {
        alignItems: 'center',
        textAlign: 'center',
        borderWidth: 2,
        marginBottom: 5,
        fontSize: 20,
    },botao: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 10,
        marginBottom: 5,
        borderRadius: 20,
        fontSize: 20,
    },textoBotao: {
        color: 'white',
        fontWeight: 'bold',
    }
});