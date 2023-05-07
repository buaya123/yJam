import React,{useState} from 'react';
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from './CustomButton';
import InputField from './InputField';
import {LoginAPI} from '../APIhelper/APIHelper'
import WhenLogged from '../../../WhenLogged';

function Login() {
    const navigation = useNavigation();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');


    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
          <View style={{paddingHorizontal: 25}}>
            <View style={{alignItems: 'center'}}>
              <Image
              source={require('../../assets/favicon.png')}

                style={{transform: [{rotate: '-5deg'}],minHeight:300,maxHeight:300,minWidth:300,maxWidth:300}}
              />
            </View>
    
            <Text
                style={{
                    fontSize: 28,
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: 30,
                }}>
              Login
            </Text>
   
                <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        paddingBottom: 8,
                        marginBottom: 25,
                }}>
                <MaterialIcons
                    name="alternate-email"
                    size={20}
                    color="#666"
                    style={{marginRight: 5}}/>
                    <TextInput
                    placeholder="Username"
                    style={{flex: 1, paddingVertical: 0}}
                    onChangeText ={newText => setUsername(newText)}
                />

            </View>

    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      <Ionicons
        name="ios-lock-closed-outline"
        size={20}
        color="#666"
        style={{marginRight: 5}}
        />
      
        <TextInput
          placeholder={"Password"}
          style={{flex: 1, paddingVertical: 0}}
          secureTextEntry={true}
          onChangeText ={newText => setPassword(newText)}
        />
      </View>
            <CustomButton label={"Login"} onPress={()=>LoginAPI(username,password,navigation)} />
          
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 30,
              }}>
              <Text>New to the app?</Text>
              <TouchableOpacity>
                <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      );
}

export default Login;