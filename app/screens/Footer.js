import React from 'react';
import { Text, View,StyleSheet ,Image,ScrollView} from 'react-native';
import { AutoSizeText , ResizeTextMode } from 'react-native-auto-size-text';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Footer(props) {
    return (
        <View style={{flex:1 , flexDirection:'row',backgroundColor:'#362FD9',margin:-10,marginTop:10,minHeight:90,maxHeight:90,borderBottomLeftRadius:45,borderTopLeftRadius:45,marginLeft:10}}>
            <View style={{flex:1,minWidth:90,maxWidth:90,marginLeft:20,justifyContent:'center'}}>
                <Image 
                    style={{minHeight:75,maxHeight:75,minWidth:75,maxWidth:75}}
                    source={require('../assets/favicon.png')}
                />
            </View>
            <View style={{flex:1, flexDirection:'column',justifyContent:'center'}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-end'}}>
                    <AutoSizeText
                        mode={ResizeTextMode.group}
                        numberOfLines={1}
                        style={{color:"#DEFCF9",fontFamily:'Montserrat-SemiBold'}}>
                            Kimberly Anne P. Velasco
                    </AutoSizeText>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start'}}>
                    <Icon style={styles.IconStyle} name="spider" size={20}  />
                    <Icon style={styles.IconStyle} name="snowman" size={20}  />
                    <Icon style={styles.IconStyle} name="shield-virus" size={20}  />
                    <Icon style={styles.IconStyle} name="registered" size={20}  />
                    <Icon style={styles.IconStyle} name="podcast" size={20}  />
                </View>
            </View>
            
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({

    
  });