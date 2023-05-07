import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView,TouchableHighlight} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { Modal, ModalButton, ModalContent ,SlideAnimation} from 'react-native-modals';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";



function OneBoardPost(props) {
    const navigation = useNavigation();
    return (
        <View style={{flex:1,marginBottom:-20}}>
            <TouchableHighlight onPress={()=>navigation.navigate("OneBoardPostView")} underlayColor='none'>
                <View style={{flex:1,backgroundColor:'white',borderRadius:15,margin:20,elevation:5}}>
                    <View style={{flex:1, margin:15}}>
                            
                            
                        <Text style={{fontFamily:'Montserrat-SemiBold',marginTop:5,fontSize:20}} numberOfLines={2}>
                            This is the title/subject
                            </Text>
                        <Text style={{marginBottom: 10,fontFamily:'Montserrat-Regular'}} numberOfLines={3}>
                            The idea with React NatiThe idea with React Native Elements is more abouThe idea with React Native Elements is more abouThe idea with React Native Elements is more abouve Elements is more about component structure than actual design.
                        </Text>
                        <Text style={styles.date}>
                            09/09/2023
                        </Text>
                    </View>
                    
                </View>
                
            </TouchableHighlight>
            
            
            
        </View>
        
    );
}

export default OneBoardPost;

const styles = StyleSheet.create({
    imageStyle: {
        width:"100%",
        height:250,
        maxHeight:300

    },
    date:{
        alignSelf:"flex-end"
    },
    modalContainer:{
        flex:1,
        minWidth:"100%",
        flexDirection:"column"

    },
    modalHeader:{
        flex:1,
        flexDirection:"row",
        minHeight:50,
        maxHeight:50,
        alignSelf:"flex-end"
    }
    
  });