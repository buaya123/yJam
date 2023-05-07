import React from 'react';
import { Text, View,StyleSheet ,Image,ScrollView} from 'react-native';
import { AutoSizeText , ResizeTextMode } from 'react-native-auto-size-text';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Footer(props) {
    return (
        <View style={{flex:1 , flexDirection:"row", minHeight:100,maxHeight:100}}>
            <View style={styles.container}>
                <View style={styles.imageContainerStyle}>
                    <Image 
                        style={styles.imageStyle}
                        source={require('../assets/favicon.png')}
                        />
                </View>
                <View style={styles.basicInfo}>
                    <View style={{flex:1,justifyContent:"flex-end",alignItems:"flex-start"}}>
                        <AutoSizeText
                            mode={ResizeTextMode.group}
                            numberOfLines={2}
                            style={{color:"white",fontFamily:'Montserrat-SemiBold'}}>
                            Joseph June Y. Joe
                        </AutoSizeText>
                    </View>
                    
                    <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start"}}>
                        <Icon style={styles.IconStyle} name="spider" size={20}  />
                        <Icon style={styles.IconStyle} name="snowman" size={20}  />
                        <Icon style={styles.IconStyle} name="shield-virus" size={20}  />
                        <Icon style={styles.IconStyle} name="registered" size={20}  />
                        <Icon style={styles.IconStyle} name="podcast" size={20}  />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"transparent",
        flexDirection:"row",

        
    },
    imageStyle: {
        minHeight:75,
        maxHeight:75,
        flex:1,
        maxWidth:75,
        minWidth:75,
        borderRadius:35

    },
    imageContainerStyle: {
        margin:10,
        minHeight:75,
        maxHeight:75,
        flex:1,
        maxWidth:75,
        minWidth:75,
        justifyContent:"center",
        alignItems:"center",

    },
    basicInfo:{
        flex: 1,
    },
    IconStyle:{
        marginRight:3,
        marginTop:3
    }

    
  });