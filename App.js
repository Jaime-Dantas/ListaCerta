import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import firebase from 'firebase'
import firebaseConfig from './database/firebaseDB'
import Login from './paginas/login'
import Cadastro from './paginas/cadastro'
import Home from './paginas/inicial'
import NovaLista from './paginas/Novalista'
import ConsultarLista from './paginas/Consultarlista'

const Stack = createStackNavigator();

function Inicial(){
  return(
    <Stack.Navigator initialRouteName="Home" 
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: 'blue'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name="Login" component={Login} options={{title: "Tela de Login"}} />
      <Stack.Screen name="Cadastro" component={Cadastro} option={{title: "Cadastro de usuario"}} />
      <Stack.Screen name="Home" component={Home} option={{title: "Página inicial"}} />
      <Stack.Screen name="NovaLista" component={NovaLista} option={{title: "Nova Lista"}} />
      <Stack.Screen name="ConsultarLista" component={ConsultarLista} option={{title: "Consultar listas"}} />
    </Stack.Navigator>
  )
}

export default function App(){
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  return(
    <NavigationContainer>
      <Inicial/>
    </NavigationContainer>
  )
}
