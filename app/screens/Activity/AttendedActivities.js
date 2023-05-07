import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { Modal, ModalButton, ModalContent ,SlideAnimation} from 'react-native-modals';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import BoardPostDetails from '../Board/BoardPostDetails'



function AttendedActivities(props) {
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
                        <View style={{flex:1,margin:10,maxHeight:500,minHeight:500,backgroundColor:'white',borderRadius:15,borderWidth:1,overflow:'hidden',marginTop:50,marginBottom:30,elevation:10}}>

                                <View style={{flex:1,flexDirection:'column'}}>
                                    <View style={{flex:1,flexDirection:'row',backgroundColor:'#362FD9',minHeight:70,maxHeight:70,borderTopRightRadius:10,borderTopLeftRadius:10,justifyContent:'center',alignItems:'center'}}>
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:30,color:'#DEFCF9'}}>Activities</Text>
                                        </View>
                                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                            
                                                <Icon name="calendar-check" size={50} color="#DEFCF9" />
                                            
                                        </View>
                                    </View>
                                    <ScrollView>
                                        <View style={{flex:1,flexDirection:'row',minHeight:100,maxHeight:100,borderBottomWidth:0.7,borderBottomColor:'grey',borderTopWidth:0.7}}>
                                            <View style={{flex:1,backgroundColor:'white',justifyContent:'center',margin:5}}>
                                                <Text style={{fontSize:30,fontFamily:'Montserrat-SemiBold'}}>True love waits 2022</Text>
                                            </View>
                                            <TouchableOpacity>
                                                <View style={{flex:1,minWidth:50,maxWidth:50,justifyContent:'center',alignItems:'center',backgroundColor:'#3C84AB'}}>
                                                    <Icon name="info" size={30} color="#DEFCF9" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{flex:1,flexDirection:'row',minHeight:100,maxHeight:100,borderBottomWidth:0.7,borderBottomColor:'grey',borderTopWidth:0.7}}>
                                            <View style={{flex:1,backgroundColor:'white',justifyContent:'center' ,margin:5}}>
                                                <Text style={{fontSize:30,fontFamily:'Montserrat-SemiBold'}}>True love waits 2022</Text>
                                            </View>
                                            <TouchableOpacity>
                                                <View style={{flex:1,minWidth:50,maxWidth:50,justifyContent:'center',alignItems:'center',backgroundColor:'#3C84AB'}}>
                                                    <Icon name="info" size={30} color="#DEFCF9" />
                                                </View>
                                            </TouchableOpacity> 
                                        </View>
                                        <View style={{flex:1,flexDirection:'row',minHeight:100,maxHeight:100,borderBottomWidth:0.7,borderBottomColor:'grey',borderTopWidth:0.7}}>
                                            <View style={{flex:1,backgroundColor:'white',justifyContent:'center',margin:5}}>
                                                <Text style={{fontSize:30,fontFamily:'Montserrat-SemiBold'}}>True love waits 2022</Text>
                                            </View>
                                            <TouchableOpacity>
                                                <View style={{flex:1,minWidth:50,maxWidth:50,justifyContent:'center',alignItems:'center',backgroundColor:'#3C84AB'}}>
                                                    <Icon name="info" size={30} color="#DEFCF9" />
                                                </View>
                                            </TouchableOpacity> 
                                        </View>
                                        <View style={{flex:1,flexDirection:'row',minHeight:100,maxHeight:100,borderBottomWidth:0.7,borderBottomColor:'grey',borderTopWidth:0.7}}>
                                            <View style={{flex:1,backgroundColor:'white',justifyContent:'center',margin:5}}>
                                                <Text style={{fontSize:30,fontFamily:'Montserrat-SemiBold'}}>True love waits 2022</Text>
                                            </View>
                                            <TouchableOpacity>
                                                <View style={{flex:1,minWidth:50,maxWidth:50,justifyContent:'center',alignItems:'center',backgroundColor:'#3C84AB'}}>
                                                    <Icon name="info" size={30} color="#DEFCF9" />
                                                </View>
                                            </TouchableOpacity> 
                                        </View>
                                        <View style={{flex:1,flexDirection:'row',minHeight:100,maxHeight:100,borderBottomWidth:0.7,borderBottomColor:'grey',borderTopWidth:0.7}}>
                                            <View style={{flex:1,backgroundColor:'white',justifyContent:'center',margin:5}}>
                                                <Text style={{fontSize:30,fontFamily:'Montserrat-SemiBold'}}>True love waits 2022</Text>
                                            </View>
                                            <TouchableOpacity>
                                                <View style={{flex:1,minWidth:50,maxWidth:50,justifyContent:'center',alignItems:'center',backgroundColor:'#3C84AB'}}>
                                                    <Icon name="info" size={30} color="#DEFCF9" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </ScrollView>
                                </View>
                        </View>
                    
                </View>
                
                </ScrollView>
        
    );
}

export default AttendedActivities;

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