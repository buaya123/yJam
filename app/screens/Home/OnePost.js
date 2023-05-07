import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, ScrollView} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { Modal, ModalButton, ModalContent ,SlideAnimation} from 'react-native-modals';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PostDetails from './PostDetails';
import OnePostView from './OnePostView';
import { useNavigation } from "@react-navigation/native";



function OnePost(props) {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableHighlight onPress={()=>navigation.navigate("OnePostView")} underlayColor='none'>
            <View style={{flex:1,backgroundColor:'white',borderRadius:15,margin:20,elevation:5}}>
            <View style={{flex:1, margin:15}}>
                    {/* <Image 
                    style={styles.imageStyle}
                    source={require('../../assets/favicon.png')}
                    /> */}
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

export default OnePost;

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