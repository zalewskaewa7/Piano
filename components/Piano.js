import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Audio} from 'expo-av';

import { StyleSheet, View, Image, Button  } from 'react-native';
import Key from './Key';

class Piano extends Component {
  constructor(props){
    super(props)
    this.state = {
    isPress:false,
    white: true,
    note: [
      {name: "c", whiteKey: true, colour: "red", sound: require("../assets/pianoSounds/c.m4a")},
      {name: "cis", whiteKey: false,  colour: "black", sound: ""},
      {name: "d", whiteKey: true,  colour: "blue", sound: require("../assets/pianoSounds/d.m4a")},
      {name: "dis", whiteKey: false, colour: "black", sound: ""},
      {name: "e", whiteKey: true, colour: "pink", sound: require("../assets/pianoSounds/e.m4a")},
      {name: "f", whiteKey: true,  colour: "green", sound: require("../assets/pianoSounds/f.m4a")},
      {name: "fis", whiteKey: false, colour: "black", sound: ""},
      {name: "g", whiteKey: true, colour: "orange", sound: require("../assets/pianoSounds/g.m4a")},
      {name: "gis", whiteKey: false, colour: "black", sound: ""},
      {name: "a", whiteKey: true, colour: "purple", sound: require("../assets/pianoSounds/a.m4a")},
      {name: "ais", whiteKey: false, colour: "black", sound: ""},
      {name: "h", whiteKey: true, colour: "yellow", sound: require("../assets/pianoSounds/h.m4a")},
      {name: "c2", whiteKey: true, colour: "dottedRed", sound: require("../assets/pianoSounds/c2.m4a")},
      {name: "cis2", whiteKey: false, colour: "black", sound: ""},
      {name: "d2", whiteKey: true, colour: "dottedBlue", sound: require("../assets/pianoSounds/d2.m4a")},
      {name: "dis2", whiteKey: false, colour: "black", sound: ""},
      {name: "e2", whiteKey: true, colour: "dottedPink", sound: require("../assets/pianoSounds/e2.m4a")},
      

    ],
    song:[{name: "e", colour: "pink", time: "1000"},
  {name: "g", colour: "orange", time: "1000"  },
  {name: "a", colour: "purple", time: "1000"  },
  {name: "f", colour: "green", time: "1000"  },
  {name: "e", colour: "pink", time: "1000"  },
  {name: "d", colour: "blue", time: "1000"  },




  ]
  }
  this.playSound = this.playSound.bind(this);
}
  
    keyClick() {
    this.setState({isPress: true});
   
  }
  
  async componentDidMount(){
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      
      playsInSilentModeIOS: true,
    
    });
    
    this.sound= new Audio.Sound();
    const status = {
      shouldPlay: false
    };
    const tone= require('../assets/pianoSounds/c.m4a')
    this.sound.loadAsync(tone, status, false);
  }

  playSound= (sound)=>{
    console.log(sound);
    const playBackObject= new Audio.Sound();
    const tone= require('../assets/pianoSounds/c.m4a')
    playBackObject.loadAsync(sound, {shouldPlay: true})

  }


render(){
   return (
    
    <View style={styles.pianoContainer}>   
    

    {
      this.state.note.map((row, index) =>{
        
        return (<Key white={row.whiteKey} playSound={this.playSound} name={row.name} key={index} colour={row.colour === "black" ? "" : require("../img/"+row.colour+".jpg")} sound={row.sound}/>);
        
      })
    }   
     
    </View>
  );
}
 
}
export default Piano; 

const styles = StyleSheet.create({
  
  
  pianoContainer:{
    display: "flex",
    
    flexDirection: "row",
    backgroundColor: "black",
    padding: 8,
  },
  img: {
    padding:4,
  }
 
  
});
