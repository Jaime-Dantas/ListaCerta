import {StyleSheet} from 'react-native'

export const estilos = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  inputTextStyle: {
    width: '80%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  logintext: {
    marginTop: 20,
    color: 'black',
  },
  container1: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  appbar: {
    margin: 2,
    color: 'white', // Cor do texto
    fontSize: 40, // Tamanho da fonte
    height: 50,
    fontWeight: 'bold', //Deixar texto em Negrito
    backgroundColor: '#19417f',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: 8,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 4,
  },
  cardContent: {
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    padding: 16,
  },
  cardActions: {
    alignItems: 'center', // Centraliza os botões horizontalmente
    margin: 10,
  },
  container2: {
    backgroundColor: '#1bb1c0',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
  },
    text1: {
    textAlign: 'center', // Centraliza o texto horizontalmente
    color: 'white', // Cor do texto
    fontSize: 16, // Tamanho da fonte
    height: 30,
    fontWeight: 'bold', //Deixar texto em Negrito
    margin: 10,
  },
  text2: {
    textAlign: 'left', // Centraliza o texto horizontalmente
    textAlignVertical: 'left', //Centralizar o texto verticalmente
    color: 'black', // Cor do texto
    fontSize: 16, // Tamanho da fonte
    height: 30,
    fontWeight: '',
    margin: 10,
    

  },
  listaItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    elevation: 2,
  },
  container3: {
    backgroundColor: '#1bb1c0',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    margin: 5,
    marginBottom: 10,
    padding: 15,
    color: '#fff',
  },
  placeholder:{
    color: 'white', //cor do placeholder em branco

  },
  produtoItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#fff',
    elevation: 2,
    
  },  
  botao: {
    borderWidth: 1, // Largura da borda
    borderColor: '#19417f', // Cor da borda (pode ajustar conforme necessário)
    borderRadius: 10, // Arredonda os cantos para dar uma aparência mais suave
    
  },
//criei para deixar a imagem em tamanho certo
  logo:{
    width: 300,
    height: 300,
    resizeMode:'contain'
  },
  botaosalvar: {

  

}


});
