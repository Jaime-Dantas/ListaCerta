import React, { Component } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import firebase from 'firebase';
import {estilos} from '../css/estilos'
import CustomButton from './CustomButton'

class ConsultarLista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listas: [],
    };
  }

  componentDidMount() {
     // Recupera todas as listas do Firestore
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
        <Text style={estilos.text1}>Listas Salvas:</Text>
        <FlatList
          data={this.state.listas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={estilos.listaItem}>
              <Text style={estilos.text2}>{item.nome}</Text>
              <CustomButton
                title="Ver Detalhes"
                onPress={() => {
                  // Naveguar para a tela de detalhes da lista com os produtos                  
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
