import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { Modal, ModalButton, ModalContent ,SlideAnimation} from 'react-native-modals';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import BoardPostDetails from '../Board/BoardPostDetails'
import OneBoardPost from '../Board/OneBoardPost';
import Bookmarks from '../Home/Bookmarks';

function ActivitySplash(props) {
    const navigation = useNavigation()
    return (
        <View style={{flex:1}}>
            <ScrollView style={{flex:1,flexDirection:"column"}}>
                <View style={{flex:1,marginBottom:20}}>
                    <View style={{flex:1,flexDirection:'row',minHeight:100,maxHeight:100,backgroundColor:'darkblue'}}>
                        <View style={{flex:1,justifyContent:'center',marginTop:StatusBar.currentHeight,marginLeft:15}}>
                            <TouchableOpacity
                                onPress={()=>navigation.goBack()}
                                >
                                <Icon name="arrow-left" size={25} color="white" />  
                            </TouchableOpacity> 
                        </View>
                    </View>
                </View>
                <View >
                <Text style={{fontFamily:'Montserrat-Bold',fontSize:30,marginLeft:20,marginBottom:10}}>Attended Activities</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} decelerationRate={0}>
              <View style={{flex:1,flexDirection:'column',marginLeft:20,marginBottom:15}}>
                  <View style={{flex:1,flexDirection:'row'}}>
                    <Bookmarks />
                    <Bookmarks />
                    <Bookmarks />
                  </View>
              </View>
            </ScrollView>        
                </View> 
                    <View style={{flex:1,flexDirection:'column',alignItems:'flex-start'}}>
                        <View style={{flex:1,margin:15,marginLeft:20,marginBottom:5}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:30}}>Your Posts</Text>
                        </View>
                        <View style={{flex:1,marginTop:-15}}>
                            <OneBoardPost />
                            <OneBoardPost />
                            <OneBoardPost />
                            <OneBoardPost />
                        </View>
                    </View>

            </ScrollView>
        </View>
    );
}

export default ActivitySplash;

const styles = StyleSheet.create({
    backHeader:{
        flexDirection:"row",
        flex:1,
        minHeight:75,
        maxHeight:75,
        alignItems:"center",
        margin:10
    },
    
  });