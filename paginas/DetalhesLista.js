import React, { Component } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { estilos } from '../css/estilos';
import CustomButton from './CustomButton'

class DetalhesLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaId: this.props.route.params.listaId,
      nomeLista: '',
      produtos: [],
      editandoLista: false,
      novoNomeLista: '',
      novoProdutos: [],
      editandoProduto: -1,
      novoNomeProduto: '',
      novoValorProduto: '',
      novaQuantidadeProduto: '',
    };
  }

  componentDidMount() {
    this.carregarDetalhesLista();
  }

  carregarDetalhesLista = () => {
    const db = firebase.firestore();
    const listaRef = db.collection('listas').doc(this.state.listaId);

    listaRef.get().then((doc) => {
      if (doc.exists) {
        const listaData = doc.data();
        this.setState({
          nomeLista: listaData.nome,
          produtos: listaData.produtos,
          editandoLista: false,
          novoNomeLista: '',
          novoProdutos: [],
        });
      }
    }).catch((error) => {
      console.error('Erro ao recuperar os detalhes da lista:', error);
    });
  }

  editarLista = () => {
    this.setState({
      editandoLista: true,
      novoNomeLista: this.state.nomeLista,
      novoProdutos: [...this.state.produtos],
    });
  }

  editarProduto = (index) => {
    const produtoSelecionado = this.state.novoProdutos[index];
    this.setState({
      editandoProduto: index,
      novoNomeProduto: produtoSelecionado.nome,
      novoValorProduto: produtoSelecionado.valor.toString(),
      novaQuantidadeProduto: produtoSelecionado.quantidade.toString(),
    });
  }

  atualizarDadosNoFirestore = () => {
    const db = firebase.firestore();
    const listaRef = db.collection('listas').doc(this.state.listaId);
    const novosDados = {
      nome: this.state.novoNomeLista,
      produtos: this.state.novoProdutos,
    };

    listaRef
      .update(novosDados)
      .then(() => {
        this.carregarDetalhesLista();
      })
      .catch((error) => {
        console.error('Erro ao salvar as alterações na lista:', error);
      });
  }

  excluirLista = () => {
    const db = firebase.firestore();
    const listaRef = db.collection('listas').doc(this.state.listaId);

    listaRef
      .delete()
      .then(() => {
        this.props.navigation.goBack();
      })
      .catch((error) => {
        console.error('Erro ao excluir a lista:', error);
      });
  }

  salvarLista = () => {
    this.atualizarDadosNoFirestore();
    this.carregarDetalhesLista();
  }

  removerProduto = (indice) => {
    const novosProdutos = [...this.state.novoProdutos];
    novosProdutos.splice(indice, 1);
    this.setState({ novoProdutos: novosProdutos });
  }

  salvarEdicaoProduto = () => {
    const { novoProdutos, editandoProduto, novoNomeProduto, novoValorProduto, novaQuantidadeProduto } = this.state;
    if (editandoProduto >= 0 && novoProdutos[editandoProduto]) {
      novoProdutos[editandoProduto].nome = novoNomeProduto;
      novoProdutos[editandoProduto].valor = parseFloat(novoValorProduto);
      novoProdutos[editandoProduto].quantidade = parseInt(novaQuantidadeProduto);
      novoProdutos[editandoProduto].total = novoProdutos[editandoProduto].valor * novoProdutos[editandoProduto].quantidade;
    }

    this.setState({
      editandoProduto: -1,
      novoNomeProduto: '',
      novoValorProduto: '',
      novaQuantidadeProduto: '',
    });

    this.atualizarDadosNoFirestore();
  }

  adicionarProduto = () => {
    const { novoProdutos, novoNomeProduto, novoValorProduto, novaQuantidadeProduto } = this.state;

    if (novoNomeProduto && novoValorProduto && novaQuantidadeProduto) {
      const novoProduto = {
        nome: novoNomeProduto,
        valor: parseFloat(novoValorProduto),
        quantidade: parseInt(novaQuantidadeProduto),
        total: parseFloat(novoValorProduto) * parseInt(novaQuantidadeProduto),
      };

      this.setState((prevState) => ({
        novoProdutos: [...prevState.novoProdutos, novoProduto],
        novoNomeProduto: '',
        novoValorProduto: '',
        novaQuantidadeProduto: '',
      }));
    }
  }

  render() {
    return (
      <View style={estilos.container2}>
        <Text style={estilos.text1}>Detalhes da Lista:</Text>
        <Text>Nome da Lista:</Text>
        {this.state.editandoLista ? (
          <TextInput
            value={this.state.novoNomeLista}
            onChangeText={(text) => this.setState({ novoNomeLista: text })}
          />
        ) : (
          <Text>{this.state.nomeLista}</Text>
        )}

        {this.state.editandoLista ? (
          <CustomButton title="Salvar Alterações" onPress={this.salvarLista}
          buttonStyle={estilos.botao, { height: 50, width: 225 }} // Estilo para o botão
          textStyle={estilos.buttonText} // Estilo para o texto do botão   
           />
        ) : (
          <CustomButton title="Editar Lista" onPress={this.editarLista}
          buttonStyle={estilos.botao, { height: 50, width: 225 }} // Estilo para o botão
          textStyle={estilos.buttonText} // Estilo para o texto do botão   
           />
        )}

        <CustomButton title="Excluir Lista" onPress={this.excluirLista} 
          buttonStyle={estilos.botao, { height: 50, width: 225 }} // Estilo para o botão
          textStyle={estilos.buttonText} // Estilo para o texto do botão        
         />

        <Text style={estilos.text1}>Produtos:</Text>
        <FlatList
          data={this.state.editandoLista ? this.state.novoProdutos : this.state.produtos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={estilos.produtoItem}>
              {this.state.editandoProduto === index ? (
                <View>
                  <TextInput
                    style={estilos.text2}
                    value={this.state.novoNomeProduto}
                    onChangeText={(text) => this.setState({ novoNomeProduto: text })}
                  />
                  <TextInput
                    style={estilos.text2}
                    value={this.state.novoValorProduto.toString()}
                    onChangeText={(text) => this.setState({ novoValorProduto: text })}
                  />
                  <TextInput
                    style={estilos.text2}
                    value={this.state.novaQuantidadeProduto.toString()}
                    onChangeText={(text) => this.setState({ novaQuantidadeProduto: text })}
                  />
                  <CustomButton title="Salvar" onPress={this.salvarEdicaoProduto} 
                  buttonStyle={estilos.botao, { height: 50, width: 225 }} // Estilo para o botão
                  textStyle={estilos.buttonText} // Estilo para o texto do botão   
                  />
                </View>
              ) : (
                <View>
                  <Text>ID: {index + 1}</Text>
                  <Text>Nome: {item.nome}</Text>
                  <Text>Valor: R${item.valor}</Text>
                  <Text>Quantidade: {item.quantidade}</Text>
                  <Text>Total: R${item.total.toFixed(2)}</Text>
                  <CustomButton title="Editar" onPress={() => this.editarProduto(index)}
                  buttonStyle={estilos.botao , { height: 50, width: 200 }} // Estilo para o botão
                  textStyle={estilos.buttonText} // Estilo para o texto do botão   
                   />
                  <CustomButton title="Remover" onPress={() => this.removerProduto(index)}
                  buttonStyle={estilos.botao, { height: 50, width: 200 }} // Estilo para o botão
                  textStyle={estilos.buttonText} // Estilo para o texto do botão   
                   />
                </View>
              )}
            </View>
          )}
        />
      </View>
    );
  }
}

export default DetalhesLista;
