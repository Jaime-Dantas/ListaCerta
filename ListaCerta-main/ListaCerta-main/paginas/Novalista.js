import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { estilos } from '../css/estilos';
import CustomButton from './CustomButton'

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
    const db = firebase.firestore();

    // Criar uma nova lista no Firestore
    db.collection('listas')
      .add({
        nome: nomeLista,
        produtos: produtos,
      })
      .then((docRef) => {
        console.log('Nova lista criada com ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Erro ao criar a lista: ', error);
      });

    // Limpar o estado
    this.setState({ nomeLista: '', produtos: [] });
  }

  adicionarProduto = () => {
    const { nomeProduto, valorProduto, quantidadeProduto } = this.state;

    // Calcular o total
    const total = parseFloat(valorProduto) * parseInt(quantidadeProduto);

    // Criar um novo objeto de produto
    const novoProduto = {
      nome: nomeProduto,
      valor: parseFloat(valorProduto),
      quantidade: parseInt(quantidadeProduto),
      total: total,
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
      <View style={estilos.container3}>
        <Text style={estilos.text1}>Nome da Lista:</Text>
        <TextInput
          
          style={estilos.input}
          placeholder="Digite o nome da lista"
          placeholderTextColor={estilos.placeholder}
          value={this.state.nomeLista}
          onChangeText={(text) => this.setState({ nomeLista: text })}
        />

        <Text style={estilos.text1}>Adicionar Produto:</Text>
        <TextInput
          style={estilos.input}
          placeholder="Nome do Produto"
          value={this.state.nomeProduto}
          onChangeText={(text) => this.setState({ nomeProduto: text })}
        />
        <TextInput
          style={estilos.input}
          placeholder="Valor"
          value={this.state.valorProduto}
          onChangeText={(text) => {
            // Remover caracteres que não sejam dígitos ou ponto/vírgula
            const sanitizedText = text.replace(/[^0-9,.]/g, '');

            // Substituir ',' por '.' para permitir números de ponto flutuante
            const formattedText = sanitizedText.replace(',', '.');

            // Atualizar o estado com o valor formatado
            this.setState({ valorProduto: formattedText });
          }}
        />
        <TextInput
          style={estilos.input}
          placeholder="Quantidade"
          value={this.state.quantidadeProduto}
          onChangeText={(text) =>
            this.setState({ quantidadeProduto: parseInt(text) || 0 })
          }
        />
        <CustomButton
          title="Adicionar Produto"
          onPress={this.adicionarProduto}
          style={estilos.botaoAdicionar}
        />

        <CustomButton
          title="Salvar Lista"
          onPress={this.criarNovaLista}
          style={estilos.botaoSalvar}
        />

        <Text style={estilos.text1}>Produtos Adicionados:</Text>
        {this.state.produtos.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Valor</th>
                <th>Quantidade</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {this.state.produtos.map((produto, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.valor}</td>
                  <td>{produto.quantidade}</td>
                  <td>{produto.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </View>
    );
  }
}

export default NovaLista;
