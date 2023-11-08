import React, { Component } from 'react';
import { View, Text, Button, TextInput, ActivityIndicator, Image } from 'react-native';
import firebase from 'firebase';
import { estilos } from '../css/estilos';
import CustomButton from './CustomButton'

export default class Cadastro extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      displayName: '',
      errorMessage: ''
    };
  }

  updateInputVal = (val, props) => {
    const state = this.state;
    state[props] = val;
    this.setState(state);
  };

  cadastroUsuario = () => {
    if (this.state.email === '' || this.state.password === '' || this.state.displayName === '') {
      alert('Favor entrar com os dados solicitados!');
    } else {
      this.setState({
        isLoading: true
      });

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
          response.user.updateProfile({
            displayName: this.state.displayName
          });

          alert('Usuario cadastrado com sucesso!');
          this.setState({
            email: '',
            password: '',
            isLoading: false,
            displayName: '',
            errorMessage: ''
          });
          this.props.navigation.navigate('Login');
        })
        .catch((error) => {
          this.setState({
            errorMessage: error.message,
            isLoading: false
          });
        });
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={estilos.container}>
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
          placeholder="Nome completo"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />

        <TextInput
          style={estilos.inputTextStyle}
          placeholder="E-mail"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />

        <TextInput
          style={estilos.inputTextStyle}
          placeholder="Senha"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          secureTextEntry={true}
          maxLength={8}
        />

        <CustomButton title="Cadastrar"
                color="#FFD580"
                onPress={() => this.cadastroUsuario()}
                />

        {this.state.errorMessage !== '' && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )}

        <Text
          style={estilos.logintext}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          Não tem conta? Clique aqui para cadastrar
        </Text>
      </View>
    );
  }
}
