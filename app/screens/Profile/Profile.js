import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity,ScrollView, Touchable} from 'react-native';
import BasicInfo from './BasicInfo';
import CustomButton from '../Prelim/CustomButton'
import { useNavigation } from "@react-navigation/native";
import { StackActions, NavigationActions } from 'react-navigation';
import { Card } from 'react-native-elements';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import QRCode from 'react-native-qrcode-svg';


function Profile(props) {
    
    const navigation = useNavigation()
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Login' })],
      });

    return (
        <ScrollView>
        <View style={{flex:1, flexDirection:"column", justifyContent:"flex-start"   }}>
            
            <View style={styles.qr}>
            <QRCode
                value="Jusadsdasdt some string valudawdadse"
                logoSize={30}
                logoBackgroundColor='transparent'
                size={270}
            />
            </View>
            <View style={{flex:1, flexDirection:'row' ,minHeight:90,maxHeight:90}}>
            
                <View style={{flex:1,flexDirection:'row'}}>
                   <View style={{flex:1, flexDirection:'column',justifyContent:'center',alignItems:'center',borderRightColor:'black',borderRightWidth:2}}>
                        <View style={{flex:1, justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{fontSize:25, fontFamily:'Montserrat-Bold'}}>SOLO Kar</Text>
                            <TouchableOpacity style={{borderRadius:25, backgroundColor:"#9b88bb",minHeight:25,maxHeight:25,minWidth:25,maxWidth:25,marginLeft:5,justifyContent:'center',alignItems:'center'}}>
                                <Icon name="question" size={15} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Text style={{fontSize:35,fontFamily:'Montserrat-Bold'}}>35</Text>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <View style={{flex:1, justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                <Text style={{fontSize:25,fontFamily:'Montserrat-Bold'}}>GROUP Kar</Text>
                            <TouchableOpacity style={{borderRadius:25, backgroundColor:"#9b88bb",minHeight:25,maxHeight:25,minWidth:25,maxWidth:25,marginLeft:5,justifyContent:'center',alignItems:'center'}}>
                                <Icon name="question" size={15} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Text style={{fontSize:35,fontFamily:'Montserrat-Bold'}}>180</Text>
                        </View>
                    </View> 
                </View>
            </View>
            <View style={{flex:1,flexDirection:'row',margin:10,marginTop:10}}>
                <View style={{flex:1,flexDirection:'column'}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:25,fontFamily:'Montserrat-SemiBold'}}>
                            Badges
                        </Text>
                        <TouchableOpacity style={{borderRadius:25, backgroundColor:"#9b88bb",minHeight:25,maxHeight:25,minWidth:25,maxWidth:25,marginLeft:5,justifyContent:'center',alignItems:'center'}}>
                            <Icon name="question" size={15} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>Display Badges</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:1,flexDirection:'row',margin:10,marginTop:10}}>
                <View style={{flex:1,flexDirection:'column'}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontSize:25,fontFamily:'Montserrat-SemiBold'}}>
                            Organizations
                        </Text>
                        <TouchableOpacity style={{borderRadius:25, backgroundColor:"#9b88bb",minHeight:25,maxHeight:25,minWidth:25,maxWidth:25,marginLeft:5,justifyContent:'center',alignItems:'center'}}>
                            <Icon name="question" size={15} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>Display Orgs</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row',flex:1,minHeight:110,maxHeight:120}}>
                <View style={{flex:1,backgroundColor:'white',margin:10,borderRadius:10,elevation:10}} >
                      
                            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate("ActivitySplash")}>
                            
                                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <View style={{flex:5}}>
                                        <Text style={{fontFamily:'Montserrat-SemiBold',fontSize:22,marginLeft:5}}>Your Activity</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Icon name="calendar-check" size={30} color="darkblue" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                </View>
                
                
            </View>
            <View style={{margin:10,minHeight:100,maxHeight:100, flex:1}}>
                <CustomButton label={"Logout"} onPress={async ()=>{
                    await AsyncStorage.removeItem('user')

                    //navigation.navigate("Login")
                    await AsyncStorage.getItem('user').then((val)=>{
                        console.log("API+"+val)
                      })
                    navigation.replace("Login")
                    
                }} />
            </View>
            
            
        </View>
        </ScrollView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    imageStyle: {
        minHeight:100,
        maxHeight:100,
        flex:1,
        maxWidth:100,
        minWidth:100,
        borderRadius:50

    },
    imageContainerStyle: {
        minHeight:150,
        maxHeight:150,
        flex:1,
        maxWidth:150,
        minWidth:150,
        justifyContent:"center",
        alignItems:"center",

    },
    qr:{
        minHeight:300,
        maxHeight:300,
        margin:10,
        justifyContent:"center",
        alignItems:"center"
    }
    
  });