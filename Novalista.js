import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import firebase from 'firebase';

class NovaLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeLista: '',
      nomeProduto: '',
      valorProduto: '',
      quantidadeProduto: '',
      produtos: [],
    };
  }

  criarNovaLista = () => {
    const { nomeLista, produtos } = this.state;

    // Criar uma nova lista no banco de dados
    const listaKey = firebase.database().ref('listas').push().key;
    const novaLista = {
      nome: nomeLista,
      produtos: produtos, // Associar os produtos à nova lista
    };

    // Salvar a nova lista no banco de dados
    const updates = {};
    updates['/listas/' + listaKey] = novaLista;
    firebase.database().ref().update(updates);

    // Limpar o estado
    this.setState({ nomeLista: '', produtos: [] });
  }

  adicionarProduto = () => {
    const { nomeProduto, valorProduto, quantidadeProduto } = this.state;

    // Criar um novo objeto de produto
    const novoProduto = {
      nome: nomeProduto,
      valor: valorProduto,
      quantidade: quantidadeProduto,
      total: valorProduto * quantidadeProduto,
    };

    // Adicionar o produto à lista de produtos
    this.setState((prevState) => ({
      produtos: [...prevState.produtos, novoProduto],
      nomeProduto: '',
      valorProduto: '',
      quantidadeProduto: '',
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text >Nome da Lista:</Text>
        <TextInput
          style={styles.input}
          value={this.state.nomeLista}
          onChangeText={(text) => this.setState({ nomeLista: text })}
        />
        <Button title="Salvar Lista" onPress={this.criarNovaLista} />

        <Text>Adicionar Produto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          value={this.state.nomeProduto}
          onChangeText={(text) => this.setState({ nomeProduto: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor"
          value={this.state.valorProduto}
          onChangeText={(text) => this.setState({ valorProduto: parseFloat(text) || 0 })}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          value={this.state.quantidadeProduto}
          onChangeText={(text) => this.setState({ quantidadeProduto: parseInt(text) || 0 })}
        />
        <Button title="Adicionar Produto" onPress={this.adicionarProduto} />

        <Text>Produtos Adicionados:</Text>
        <FlatList
          data={this.state.produtos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.produtoItem}>
              <Text>Nome: {item.nome}</Text>
              <Text>Valor: {item.valor}</Text>
              <Text>Quantidade: {item.quantidade}</Text>
              <Text>Total: {item.total}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 8,
  },
  produtoItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 8,
  },
});

export default NovaLista;
