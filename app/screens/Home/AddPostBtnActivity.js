import React from 'react';
import { View, Text, Image, ScrollView,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';


function AddPostBtnActivity(props) {
    const navigation = useNavigation();
    return (
        
                    
                        <View style={styles.actionBar}>
                            <TouchableOpacity
                                onPress={()=>navigation.navigate("AddPostActivity")}
                                style={styles.addBtn}>
                                    <Icon name="pen" size={30} color="white" />  
                            </TouchableOpacity>
                        </View>
                
    );
}

const styles = StyleSheet.create({
    actionBar: {
        position:'absolute',
        bottom:0,
        right:0,
        margin:20 
    },
    addBtn:{
        minWidth: 70,
        minHeight: 70,
        maxWidth: 70,
        maxHeight: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'darkblue',
    }
    
  });
export default AddPostBtnActivity;