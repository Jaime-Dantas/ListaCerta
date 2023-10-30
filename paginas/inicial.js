import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Card, Title, Button } from 'react-native-paper';
import {estilos} from '../css/estilos'

export default function Home({ navigation }) {
  return (
    <View style={estilos.container1}>
      <Appbar.Header style={estilos.appbar}>
        <Appbar.Content title="ListaCerta" />
      </Appbar.Header>
      <View style={estilos.contentContainer}>
        <Card style={estilos.card}>
          <Card.Content style={estilos.cardContent}>
            <Title>Criar Nova Lista</Title>
          </Card.Content>

          <View style={estilos.cardActions}>
            <Button
              mode="contained"
              onPress={() => {
                // Navegar para a tela de criação de lista
                navigation.navigate('NovaLista');
              }}
            >
              Ir para Criar Lista
            </Button>
          </View>
          
        </Card>

        <Card style={estilos.card}>
          <Card.Content style={estilos.cardContent}>
            <Title>Visualizar Listas</Title>
          </Card.Content>
          <View style={estilos.cardActions}>
            <Button
              mode="contained"
              onPress={() => {
                // Navegar para a tela de consulta de listas
                navigation.navigate('ConsultarLista');
              }}
            >
              Ir para Visualizar Listas
            </Button>
          </View>
        </Card>
      </View>
    </View>
  );
}


