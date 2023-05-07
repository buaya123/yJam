import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import { AutoSizeText , ResizeTextMode } from 'react-native-auto-size-text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

function BasicInfo(props) {
    var [userData,setUserData] = useState('');
    
    
    async function getUser(){
   
        await AsyncStorage.getItem('user').then((val)=>{
           setUserData(JSON.parse(JSON.stringify(val)))

        }).catch(()=>{
            setUserData('')
        })

        
     }

    getUser()
    
     var parsed = ''
     if(userData != ''){
        parsed = JSON.parse(userData)
     }
     


    return (
        <View style={styles.container}>
            <View style={{flex:1,justifyContent:"flex-start",alignItems:"center"}}>
                <AutoSizeText
                 style={styles.NameBold}
                    mode={ResizeTextMode.group}
                    numberOfLines={1}>
                    {parsed ? parsed[0].first_name : "N/A"} { parsed ? parsed[0].middle_name : "N/A"} { parsed ? parsed[0].last_name : "N/A"}
                </AutoSizeText>
            </View>
            
            <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"flex-start"}}>
                <Icon style={styles.IconStyle} name="spider" size={15}  />
                <Icon style={styles.IconStyle} name="snowman" size={15}  />
                <Icon style={styles.IconStyle} name="shield-virus" size={15}  />
                <Icon style={styles.IconStyle} name="registered" size={15}  />
                <Icon style={styles.IconStyle} name="podcast" size={15}  />
            </View>
        </View>
    );  
}

export default BasicInfo;

const styles = StyleSheet.create({
    container: {
        flex:2,
        flexDirection:"column",
        marginTop:20,
        marginRight:10,
    },
    NameBold:{
        fontWeight:"bold",
        
    },
    IconStyle:{
        margin:5,
        top:5,
        color:"green"
    }
    
  });