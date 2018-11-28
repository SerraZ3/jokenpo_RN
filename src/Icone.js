import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
} from 'react-native';

export default class Icone extends Component{
  render(){
    if(this.props.escolha == "Pedra"){
      return(
        <View style={styles.view}>
          <Text style={styles.Jogador}>{this.props.jogador}</Text>
          <Image 
            style={styles.image}
            source={require('../assets/pedra.png')}
          />
        </View>
      );
    } else if(this.props.escolha == "Papel"){
      return(
        <View style={styles.view}>
          <Text style={styles.Jogador}>{this.props.jogador}</Text>
          <Image 
            style={styles.image}
            source={require('../assets/papel.png')}
          />
        </View>
      );
    } else if(this.props.escolha == "Tesoura"){
      return(
        <View style={styles.view}>
          <Text style={styles.Jogador}>{this.props.jogador}</Text>
          <Image 
            style={styles.image}
            source={require('../assets/tesoura.png')}
          />
        </View>
      );
    } else {
      return false;
    }
  }
}

const styles = StyleSheet.create({
  Jogador : {
    fontSize : 20,
    color: 'darkblue',
    fontWeight : '800'
  },
  view : {
    alignItems: 'center'
  },
  image : {
    width: 100, 
    height: 100
  }
});