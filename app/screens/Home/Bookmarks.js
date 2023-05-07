import React, {useState, useCallback} from 'react';
import { ScrollView, Text, View ,Image, TouchableHighlight} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";


function Bookmarks(props) {
    const navigation = useNavigation()
    return (
        <TouchableHighlight onPress={()=>navigation.navigate("OneBoardPostView")} underlayColor='none'>
        <View style={{flexDirection:'column',minWidth:200,maxWidth:200,borderRadius:15,backgroundColor:'white',elevation:5,marginRight:15,paddingBottom:15}}>
            
            
                <View style={{flex:1}}>
                    <Text style={{fontSize:20,fontFamily:'Montserrat-SemiBold',margin:15}}>
                        This is a sample Bookmarked Board Post
                    </Text>
                </View>
                <View style={{flex:1, minHeight:50,maxHeight:50,flexDirection:'row'}}>
                    <View style={{marginLeft:15,flex:1,minWidth:50,maxWidth:50}}>
                        <Image 
                                style={{flex:1,maxHeight:50,minHeight:50,minWidth:50,maxWidth:50,borderRadius:25}}
                                source={require('../../assets/favicon.png')}
                            />
                    </View>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={{flex:1,marginLeft:10,justifyContent:'flex-end'}}>
                            <Text numberOfLines={1} style={{textAlign:'left',fontSize:17,fontFamily:'Montserrat-Regular'}}>Ivan Bentic</Text>
                        </View>
                        <View style={{flex:1 ,justifyContent:'flex-end',marginRight:15}}>
                            <Text style={{textAlign:'right',fontSize:12,color:'grey'}}>09/09/2009</Text>
                        </View>
                    </View>
                </View>
            
        </View>
        </TouchableHighlight>
    );
}

export default Bookmarks;