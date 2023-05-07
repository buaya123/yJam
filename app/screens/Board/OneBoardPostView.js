import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { Modal, ModalButton, ModalContent ,SlideAnimation} from 'react-native-modals';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import BoardPostDetails from './BoardPostDetails'
import PostHeader from '../PostHeader';
import Comments from './Comments';
import AddComment from './AddComment';



function OneBoardPostView(props) {
    const navigation = useNavigation();
    return (
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:1,backgroundColor:'red',minHeight:100,maxHeight:100}}>
                <PostHeader />
            </View>
            <ScrollView>
            <View style={{flexDirection:'column',marginTop:20,marginLeft:15,marginRight:15}}>
                <View >
                    <Text style={{fontSize:25,fontWeight:'bold'}}>
                        This is a sample title
                    </Text>
                </View>
                <View>
                    <Text style={{fontSize:12,color:'grey'}}>Posted by someOne321</Text>
                </View>
            </View>
            <View style={{margin:15}}>
                <Text style={{fontSize:15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus quis turpis semper mollis. Duis elementum mi imperdiet lectus commodo iaculis. Quisque fermentum nunc ex, in vestibulum tortor tincidunt a.{'\n'}{'\n'} Duis pharetra non nisl quis fringilla. Pellentesque ex lectus, placerat cursus neque pharetra, rhoncus faucibus purus. Phasellus pharetra commodo mattis. Nulla id dui lobortis, ultricies orci in, porta ex. Nullam tincidunt, sem et congue consequat, ante odio finibus erat, eget imperdiet ipsum eros varius sapien.{'\n'}{'\n'} Nulla eget libero maximus, vehicula turpis ut, iaculis lorem. Duis et malesuada arcu. Suspendisse ac justo id urna vehicula scelerisque. Aenean felis mi, pulvinar a mollis quis, eleifend a turpis. Donec erat nisi, volutpat suscipit neque ut, ultricies dignissim velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </Text>
            
            </View>
            <View style={{ minHeight:50,maxHeight:50,minWidth:'100%',backgroundColor:'#D3D3D3'}}>

            </View>
            <View >
                <View style={{margin:15,paddingBottom:50}}>
                    <Comments />
                    <Comments />
                    <Comments />
                </View>
            </View>
            
                
            
                </ScrollView>
                <AddComment />
        </View>

        
                
        
    );
}

export default OneBoardPostView;

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