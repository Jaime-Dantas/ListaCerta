import React, { Component } from 'react';
import { View, Text, TextInput, ActivityIndicator, Image} from 'react-native';
import firebase from 'firebase';
import {estilos} from '../css/estilos'
import CustomButton from './CustomButton'

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
        .auth() //Autenticação
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
        <Image
          source={require('../assets/listacerta.png')}
          style={estilos.logo}
        />

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

        <CustomButton
          title="Logar"
          onPress={() => this.userLogin()}
          buttonStyle={estilos.botao, { height: 50, width: 100 }} // Estilo para o botão
          textStyle={estilos.buttonText} // Estilo para o texto do botão
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



