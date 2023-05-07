import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import Nav from './app/screens/Home/Nav.js';
import { ModalPortal } from 'react-native-modals';
import { Provider } from 'react-redux';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import Header from './app/screens/Header.js';
import React, {useRef} from 'react'
import TextTicker from 'react-native-text-ticker'
async function getUser(){
   
   var userObj =await AsyncStorage.getItem('user')
   //console.log(userObj)
}

export default function WhenLogged() {


  return (
      <SafeAreaView style={styles.container}>
         
          <View style={styles.col}>
            <View style={styles.header}>
              <Header />
            </View>
            <View style={styles.nav}>
              <Nav></Nav>
            </View>
            <View style={styles.ads}>
              <TextTicker
                style={{ fontSize: 24,color:'white',fontFamily:'Montserrat-Regular' }}
                duration={20000}
                loop
                bounce={false}
                repeatSpacer={50}
              >
                This in an advertisement, maybe 10php per character idk, basta pwede ni siya sumpayan bahalag unsa ka taas.
              </TextTicker>
            </View>
         </View>
          
        <ModalPortal />
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"column",
    marginTop:StatusBar.currentHeight,
    
  },
  col:{
    flex:1,
    flexDirection:"column",
    
  },
  header:{
    flex:1,
    flexDirection:"row",
    // minHeight:80,
    maxHeight:150,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    width:"100%",
    backgroundColor:"darkblue",
    

  },
  nav:{
    top:-50,
    flex:1,
    flexDirection:"row",
    backgroundColor:"transparent",
  },
  ads:{
    position:'absolute',
    bottom:0,
    minHeight:50,
    maxHeight:50,
    backgroundColor:'darkblue',
    zIndex:5,
    width:'100%',
    justifyContent:'center',
    

  }
});
