import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


async function LoginAPI(username,password,navigation) {

    await fetch('http://192.168.43.245:3000/login', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      username: username,
                      password: password
                    }),
                  }).then(async (response)=>await response.json())
                    .then(async (json) => {
                        if(json.status == 0){
                            console.log("Login Successful")
                            
                            var objString = JSON.stringify(json.message)

                            await AsyncStorage.setItem(
                                'user',
                                objString
                            )

                            navigation.replace("WhenLogged")
                              
                        }else{
                            console.log("Login Unsuccessful")
                           
                        }
                    })
                    .catch((err)=> console.log("Error In fetch="+err));

}
module.exports ={
    LoginAPI
}