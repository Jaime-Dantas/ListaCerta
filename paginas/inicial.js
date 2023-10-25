import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Card, Title, Button } from 'react-native-paper';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="ListaCerta" />
      </Appbar.Header>
      <View style={styles.contentContainer}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Title>Criar Nova Lista</Title>
          </Card.Content>
          <View style={styles.cardActions}>
            <Button
              mode="contained"
              onPress={() => {
                // Navegar para a tela de criação de lista
                navigation.navigate('CriarLista');
              }}
            >
              Ir para Criar Lista
            </Button>
          </View>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Title>Visualizar Listas</Title>
          </Card.Content>
          <View style={styles.cardActions}>
            <Button
              mode="contained"
              onPress={() => {
                // Navegar para a tela de consulta de listas
                navigation.navigate('ConsultarListas');
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appbar: {
    backgroundColor: 'blue',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    margin: 8,
    width: '90%',
    alignSelf: 'center',
    marginTop: 16,
  },
  cardContent: {
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  cardActions: {
    alignItems: 'center', // Centraliza os botões horizontalmente
  },
});
