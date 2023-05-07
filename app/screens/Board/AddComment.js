import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { Modal, ModalButton, ModalContent ,SlideAnimation} from 'react-native-modals';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import BoardPostDetails from './BoardPostDetails'
import PostHeader from '../PostHeader';

function AddComment(props) {
    return (
        <View style={{flexDirection:'row',position:'absolute',width:'100%',bottom:0,minHeight:50,paddingBottom:10,borderTopColor:'#000000',backgroundColor:'#FFFADE',borderTopLeftRadius:10,borderTopRightRadius:10}}>
            <View style={{marginLeft:15,marginBottom:5,marginTop:5}}>
                <Image 
                    style={{maxHeight:50,minHeight:50,minWidth:50,maxWidth:50,borderRadius:25}}
                    source={require('../../assets/favicon.png')}
                />
            </View>
            <View style={{flex:1,justifyContent:'center',marginRight:15}}>
                <TextInput
                        placeholder="Add a comment"
                        style={{flex: 1,backgroundColor:'#D3D3D3',minHeight:50,maxHeight:50,borderRadius:25,marginLeft:10,fontSize:14,paddingLeft:15}}
                        
                    />
            </View>
        </View>
    );
}

export default AddComment;