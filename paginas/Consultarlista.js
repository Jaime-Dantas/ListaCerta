import React, { Component } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import firebase from 'firebase';
import {estilos} from '../css/estilos'

class ConsultarLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listas: [],
    };
  }

  componentDidMount() {
     // Recupere todas as listas do Firestore
    const db = firebase.firestore();

    db.collection('listas')
      .get()
      .then((querySnapshot) => {
        const listas = [];
        querySnapshot.forEach((doc) => {
          const lista = doc.data();
          lista.id = doc.id;
          listas.push(lista);
        });
        this.setState({ listas });
      })
      .catch((error) => {
        console.error('Erro ao recuperar listas: ', error);
      });
  }

  render() {
    return (
       <View style={estilos.container2}>
        <Text>Listas Salvas:</Text>
        <FlatList
          data={this.state.listas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={estilos.listaItem}>
              <Text>{item.nome}</Text>
              <Button
                title="Ver Detalhes"
                onPress={() => {
                  // Navegue para a tela de detalhes da lista com os produtos
                  // proximo passo criar essa tela
                  this.props.navigation.navigate('DetalhesLista', { listaId: item.id });
                }}
              />
            </View>
          )}
        />
      </View>
    );
  }
}



export default ConsultarLista;
