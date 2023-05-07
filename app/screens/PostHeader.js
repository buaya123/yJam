import React from 'react';
import { Text, View,StyleSheet ,Image,ScrollView,TouchableOpacity,StatusBar} from 'react-native';
import { AutoSizeText , ResizeTextMode } from 'react-native-auto-size-text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";

function PostHeader(props) {
    const navigation = useNavigation()
    return (
        <View style={{flex:1}}>
            <View style={{flex:1,flexDirection:'row',minHeight:100,maxHeight:100,backgroundColor:'darkblue'}}>
                <View style={{flex:1,justifyContent:'center',marginTop:StatusBar.currentHeight,marginLeft:15}}>
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                        >
                        <Icon name="arrow-left" size={25} color="white" />  
                    </TouchableOpacity> 
                </View>
                
                <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',marginRight:15,marginTop:StatusBar.currentHeight}}>
                    <Icon name="bookmark" size={25} color="white" />
                </View>
            </View>
        </View>
    );
}

export default PostHeader;