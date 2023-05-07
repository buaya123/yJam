import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { Modal, ModalButton, ModalContent ,SlideAnimation} from 'react-native-modals';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import BoardPostDetails from './BoardPostDetails'
import PostHeader from '../PostHeader';

function Comments(props) {
    return (
        <View style={{flexDirection:'column', marginBottom:10,paddingBottom:15,borderBottomColor:'#000000',borderBottomWidth:0.4}}>
            <View style={{flexDirection:'row'}}>
                <View>
                    <Image 
                        style={{maxHeight:30,minHeight:30,minWidth:30,maxWidth:30,borderRadius:15}}
                        source={require('../../assets/favicon.png')}
                    />
                </View>
                <View style={{flex:1, marginLeft:5,justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:17}}>someOne321</Text>
                </View>
                
            </View>
            <View>
                <Text>This is a commensssssssssssssssssssssssssssssssssssssssssssst</Text>
            </View>
        </View>
    );
}

export default Comments;