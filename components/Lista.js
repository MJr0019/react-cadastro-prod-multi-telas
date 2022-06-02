import React, {createContext} from 'react';

export const ListaProdutos = createContext({});

function addProduto(produto, inputCodigo, inputDescricao, inputPreco, inputQuantidade){
    produto.push({codigo: inputCodigo, descricao: inputDescricao, 
    preco: inputPreco, quantidade: inputQuantidade});
}

function Lista({children}){
    return(
        <ListaProdutos.Provider value = {
                                {produto: [{codigo: '', descricao: '', preco: '', quantidade: ''}], addProduto}
                            }>
            {children}
        </ListaProdutos.Provider>
    );
}

export default Lista;