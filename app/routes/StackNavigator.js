import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Prelim/Login";
import WhenLogged from "../../WhenLogged"
import React, {useState} from 'react';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import NewPostForm from "../screens/Home/NewPostForm";
import OnePostView from "../screens/Home/OnePostView";
import OneBoardPostView from "../screens/Board/OneBoardPostView";
import ActivitySplash from "../screens/Activity/ActivitySplash";
import AddActivity from "../screens/Home/AddActivity"

const Stack = createNativeStackNavigator();




function StackNavigator() {

    const [checkNull,setCheckNull] = useState('');
    var [initScreen,setInitScreen] = useState('');
    //var initScreen = ""

    const isNullAsyncStorage = async () =>{
        await AsyncStorage.getItem('user').then((val)=>{
            
            if(val != null){
                console.log(val)
                var parsed = JSON.parse(val)
                if(parsed[0].id != undefined){
                    console.log("is not null sa stack")
                    
                    setInitScreen("WhenLogged")
                }else{
                    console.log("is null sa stack")
                    setInitScreen("Login")
                }
            }else{
                console.log("val is null")
                setInitScreen("Login")
            }
            
        })
    }

    
    const waits = async ()=>{
        await isNullAsyncStorage()
    }
    waits()
    
    console.log("initSccreeeeeen="+initScreen)
    return (
        
        <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName={initScreen}>
               
                
                <Stack.Screen name="WhenLogged" component={WhenLogged}/>
                <Stack.Screen name="AddPost" component={NewPostForm}/>
                <Stack.Screen name="AddPostActivity" component={AddActivity}/>
                <Stack.Screen name="OnePostView" component={OnePostView}/>
                <Stack.Screen name="OneBoardPostView" component={OneBoardPostView}/>
                <Stack.Screen name="ActivitySplash" component={ActivitySplash}/>
                <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export default StackNavigator;