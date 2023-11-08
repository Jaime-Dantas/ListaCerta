import {StyleSheet} from 'react-native'

export const estilos = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
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
    backgroundColor: '#FFD580',
    justifyContent: 'center',
    alignItems: 'center',
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
     backgroundColor: '#FFD580',
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
    backgroundColor: '#FFD580',
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
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    backgroundColor: 'white'
    
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
  borderWidth: 2, // Largura da borda
  borderColor: '#3740fe', // Cor da borda (pode ajustar conforme necessário)
  borderRadius: 10, // Arredonda os cantos para dar uma aparência mais suave
},
botaoAdicionar: {
    backgroundColor: '#00aaff', // Cor de fundo azul claro
    borderRadius: 10, // Bordas arredondadas
    padding: 10, // Espaçamento interno
    color: 'white', // Cor do texto branco
  },
  botaoSalvar: {
    backgroundColor: '#00aaff', // Cor de fundo azul claro
    borderRadius: 10, // Bordas arredondadas
    padding: 10, // Espaçamento interno
    color: 'white', // Cor do texto branco
  },
botaoCadastrar: {
  borderWidth: 2, // Largura da borda
  borderColor: '#3740fe', // Cor da borda (pode ajustar conforme necessário)
  borderRadius: 10, // Arredonda os cantos para dar uma aparência mais suave
  padding: 10, // Espaçamento interno
  margin: 5, // Margem
},
detalheslista: {
    backgroundColor: '#FFD580',
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
table: {
    flex: 1,
    margin: 10,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tableCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
  tableHeader: {
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold',
  },

});


