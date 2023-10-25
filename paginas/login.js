import React, { Component } from 'react';
import { View, Text, Button, TextInput, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'firebase';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  updateInputVal = (val, props) => {
    const state = this.state;
    state[props] = val;
    this.setState(state);
  };

  userLogin = () => {
    if (this.state.email === '' && this.state.password === '') {
      alert('Digite detalhes do usuário!');
      this.setState({ isLoading: false });
    } else {
      this.setState({ isLoading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
          this.setState({
            email: '',
            password: '',
            isLoading: false,
          });
          // Redirecionar para a tela de HOME (Tela Inicial)
          this.props.navigation.navigate('Home');
        })
        .catch((erro) => {
          this.setState({
            messageError: erro.message,
            isLoading: false, // Certifique-se de definir isLoading como false em caso de erro
          });
        });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#9e9e9e" />
        </View>
      );
    }
    return (
      <View style={estilos.container}>
        <TextInput
          style={estilos.inputTextStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />

        <TextInput
          style={estilos.inputTextStyle}
          placeholder="Senha"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={8}
          secureTextEntry={true}
        />

        <Button
          color="#3740fe"
          title="Logar"
          onPress={() => this.userLogin()}
        />

        <Text
          style={estilos.logintext}
          onPress={() => this.props.navigation.navigate('Cadastro')}
        >
          Não tem conta? Clique aqui para cadastrar
        </Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTextStyle: {
    width: '80%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  logintext: {
    marginTop: 20,
  },
});
