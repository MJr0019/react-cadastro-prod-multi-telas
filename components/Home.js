import React, {useContext} from 'react';
import { StyleSheet,  Text, View, TouchableOpacity, FlatList} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import { ListaProdutos } from './Lista';

export default function Home(){
    const {produto} = useContext(ListaProdutos);
    const navigation = useNavigation();

    function detalhes(item){
      alert('Produto '+'\n\n'+'Código: '+ item.codigo +'\n'+'Descrição: '+ item.descricao + '\n'+'Quantidade: '+ item.quantidade + '\n'+'Preço: '+ item.preco +'\n')
    } 

    return(
        <View style={styles.container}>
            <FlatList
                style={styles.lista}
                data={produto}
                renderItem={({ item }) => (
                    <Text style={styles.item}onPress={() => detalhes(item)}>{
                        (item.codigo != '' && item.descricao != '')?'[' + item.codigo +'] - ' + item.descricao:''
                    }</Text>
                )}
            />

            <TouchableOpacity 
            style= {styles.floatButton}
            onPress={() => navigation.navigate('Formulario')}>
                <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    floatButton: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#ffa500',
        borderRadius: 100,
    },
    textoBotao: {
        fontSize: 30,
        color: 'white',
    },
    lista: {
      width: '60%',
    },
    item: {
        borderBottomWidth: 4,
        borderRadius: 1,
    }
});