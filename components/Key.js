import React from 'react';

import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';

const Key = (props) => {
  
    return (
    
      
          <TouchableHighlight style={ props.white ? styles.keyContainer : styles.blackKey} underlayColor="purple" activeOpacity={0.6} onPress={()=>props.playSound(props.sound)}>      
             
                <View  style={styles.colour}>
                  {props.colour==="black" ? "" :  
<Image   style={styles.img} source={props.colour}/>
}
                </View>
               

           
          </TouchableHighlight>
        
        
    
      
    );
};
export default Key;

const styles = StyleSheet.create({
  
   
    keyContainer:{
      // padding:30,
       width: 65,
        margin: 2,
       backgroundColor: "white",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius:10,
      justifyContent: 'flex-end',
      alignItems: "center"

    },
    
    blackKey:{
         position:"relative",
        backgroundColor: "black",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius:8,
        padding: 20,
         marginLeft: -20,
         marginRight: -20,
         marginBottom: 150,
        height: 200,
         width: 30,
        zIndex: 2,
    },
    colour: {
     fontWeight: "bold",
      padding: 10,
      justifyContent: "flex-end",
    },
    img: {
      width:32,
      height: 64,
    }
   
    
  });
  