import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';
import Piano from './components/Piano';

class App extends Component {
  state = {
    isPress:false,
  }

  
    keyClick() {
    this.setState({isPress: true});
   
  }
render(){
   return (
    <View style={styles.container}>
     <Piano />
    </View>      
  );
}
 
}
export default App; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  
  
});
