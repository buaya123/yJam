import React ,{useState} from 'react';
import { View, Text, Image, TextInput,StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import NewPostForm from './NewPostForm';
import { Card, ListItem, Button } from 'react-native-elements';
import { SearchBar } from "@rneui/base";

function ActionBar(props) {
    const navigation = useNavigation();
    const [searchInput,setSearchInput] = useState()
    return (
        <View style={{flexDirection:"row"}}>
            <View style={styles.actionBarCard}  >
            
                <Card 
                    borderRadius={10}
                    title='Options'
                    style={{zIndex:-1}}>
                    <View style={{ flexDirection:'row',minHeight:50,maxHeight:50}}>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        
                            
                        </View>
                        <View style={{flex:1}}>
                            <Text>asdasd</Text>
                        </View>
                    </View>

                    
                </Card>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    actionBarCard:{

        flexDirection:"column",
        flex:1
    },
    actionBar: {
        justifyContent:"center",
        alignItems:"flex-end",
        

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
        backgroundColor: 'blue',
    },
    ssearchInput: {
        flex:3,
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        borderColor:"grey"
      }
    
  });
export default ActionBar;