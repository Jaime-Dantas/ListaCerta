import React from 'react';
import { View } from 'react-native';
import { Appbar, Card, Title, Button } from 'react-native-paper';
import {estilos} from '../css/estilos'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Home({ navigation }) {
  return (
    <View style={estilos.container1}>
      <Appbar.Header style={estilos.appbar}>
        <Appbar.Content title="ListaCerta"  style={estilos.appbar} />
      </Appbar.Header>
      <View style={estilos.contentContainer}>

<Card style={estilos.card}>
  <Card.Content style={estilos.cardContent}>
    <Icon name="list-alt" size={48} color="#1bb1c0" /> {/* Ícone "Criar Lista" */}
    <Title style={estilos.cardTitle}>Criar Nova Lista</Title>
  </Card.Content>

  <View style={estilos.cardActions}>
    <Button
      mode="contained"
      color="#fe7f00"
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
    <Icon name="list-ul" size={48} color="#1bb1c0" /> {/* Ícone "Visualizar Listas" */}
    <Title style={estilos.cardTitle}>Visualizar Listas</Title>
  </Card.Content>
  <View style={estilos.cardActions}>
    <Button
      mode="contained"
      color="#fe7f00"
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


