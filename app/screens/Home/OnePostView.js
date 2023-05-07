import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { Modal, ModalButton, ModalContent ,SlideAnimation} from 'react-native-modals';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PostDetails from './PostDetails';
import { useNavigation } from "@react-navigation/native";



function OnePostView(props) {
    const navigation = useNavigation();
    return (
        
                <ScrollView style={{flex:1,marginTop:StatusBar.currentHeight}}>
                
                <View style={styles.container}>
                    
                        
                        <View style={{flex:1,flexDirection:'row',backgroundColor:"#362FD9",borderTopRightRadius:50,borderBottomRightRadius:50,marginRight:30}}>
                            <View style={styles.backHeader}>
                                <View >
                                    <TouchableOpacity
                                        onPress={()=>navigation.goBack()}
                                        >
                                            <Icon name="angle-left" size={50} color="#85CDFD" />  
                                    </TouchableOpacity> 
                                </View>
                            </View>
                        </View>
                        <View style={{flex:1,margin:10}}>
                            <PostDetails />
                        </View>
                    
                </View>
                
                </ScrollView>
        
    );
}

export default OnePostView;

const styles = StyleSheet.create({
    imageStyle: {
        width:"100%",
        height:250,
        maxHeight:300

    },
    date:{
        alignSelf:"flex-end"
    },
    container:{
        flex:1,
        flexDirection:"column"

    },
    modalHeader:{
        flex:1,
        flexDirection:"row",
        minHeight:50,
        maxHeight:50,
        alignSelf:"flex-end"
    },
    backHeader:{
        flexDirection:"row",
        flex:1,
        minHeight:75,
        maxHeight:75,
        alignItems:"center",
        margin:10,
    },
    
  });