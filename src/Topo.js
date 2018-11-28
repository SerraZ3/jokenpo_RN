import React, {Component} from 'react';
import { 
  StyleSheet, 
  View, 
  Image,
} from 'react-native';

export default class Topo extends Component{
  render(){
    return(
      <View style={styles.topo}>
          <Image source={require('../assets/jokenpo.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topo : {
    flex: 1
  }
});