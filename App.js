import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  Image,
  StatusBar,
  AppRegistry
} from 'react-native';
import Topo from './src/Topo';
import Icone from './src/Icone';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario : '', 
      escolhaComputador : '',
      resultado : ''
    };
  }

  jokenpo(escolhaUsr){
    var numAleatorio = Math.floor(Math.random()*3);
    var escolhaPc, resultadoFinal;

    if(numAleatorio == 0){
      escolhaPC = "Pedra";
    } else if(numAleatorio == 1){
      escolhaPC = "Papel";
    }else{
      escolhaPC = "Tesoura";
    }

    if(escolhaUsr == "Pedra"){
      if (escolhaPC == "Pedra") {
        resultadoFinal = "Empate!"
      }
      if (escolhaPC == "Papel") {
        resultadoFinal = "Você Perdeu!"
      }
      if (escolhaPC == "Tesoura") {
        resultadoFinal = "Você Ganhou!"
      }
    }else if( escolhaUsr == "Papel"){
      if (escolhaPC == "Pedra") {
        resultadoFinal = "Você Ganhou!"
      }
      if (escolhaPC == "Papel") {
        resultadoFinal = "Empate!"
      }
      if (escolhaPC == "Tesoura") {
        resultadoFinal = "Você Perdeu!"
      }
    } else if( escolhaUsr == "Tesoura"){
      if (escolhaPC == "Pedra") {
        resultadoFinal = "Você Perdeu!"
      }
      if (escolhaPC == "Papel") {
        resultadoFinal = "Você Ganhou!"
      }
      if (escolhaPC == "Tesoura") {
        resultadoFinal = "Empate!" 
      }

    }
    this.setState({escolhaUsuario : escolhaUsr, escolhaComputador : escolhaPC, resultado : resultadoFinal});
  }

  render() {
    return (
      <View style={styles.corpo}>
        <StatusBar 
          hidden={true}
        />

        <Topo />

        <View style={styles.container}>
          <View style={styles.Viewbuttons}>
            <View style={styles.buttons}>
              <Button title="Pedra"   onPress={() => { this.jokenpo('Pedra')}}/>
            </View>
            <View style={styles.buttons}>
              <Button title="Papel"   onPress={() => { this.jokenpo('Papel')}}/>
            </View>
            <View style={styles.buttons}> 
              <Button title="Tesoura" onPress={() => { this.jokenpo('Tesoura')}}/>
            </View>
          </View>
          <View style={styles.ViewResult}>
            <Text style={styles.resultado}>{this.state.resultado}</Text>
            <Icone escolha={this.state.escolhaComputador} jogador='Computador'/>
            <Icone escolha={this.state.escolhaUsuario} jogador='Jogador'/>
          </View>
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  corpo:{
    flex: 1
  },
  container: {
    flex: 2,
    // justifyContent: 'center',
  },
  ViewResult : {
    alignItems: 'center',
    margin: 20
  },
  Viewbuttons : {
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  buttons : {
    width : 110
  },
  resultado : {
    fontSize : 25,
    color : 'red',
    fontWeight : '900',
    margin: 20
  }
});

AppRegistry.registerComponent('SouVip', () => App);