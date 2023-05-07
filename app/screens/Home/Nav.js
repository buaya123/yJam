import React, {useState, useCallback} from 'react';
import { ScrollView, Text, View ,Image, TouchableOpacity,Alert,StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Feed from './Feed';
import Profile from '../Profile/Profile';
import Board from '../Board/Board';
import AddPostBtn from '../Board/AddPostBtn'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Bookmarks from './Bookmarks';
import { Modal, ModalContent } from 'react-native-modals';
import { CheckBox, Iconn } from '@rneui/themed';
import AddPostBtnActivity from './AddPostBtnActivity';

function FeedScreen() {
  const [user,setUser] = useState({});

  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection:'column' }}>
      <View style={{flex:1}}>
          <Feed></Feed>
      </View>
      <AddPostBtnActivity />
    </View>
  );
}

function BoardScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [Help, setHelp] = useState(false);
  const [Need, setNeed] = useState(false);
  const [Game, setGame] = useState(false);
  const [Selling, setSelling] = useState(false);
  const [Buying, setBuying] = useState(false);
  const [LookingFor, setLookingFor] = useState(false);
  const [Sports, setSports] = useState(false);
  const [Computer, setComputer] = useState(false);
  const [Mobile, setMobile] = useState(false);


  return (
    
    <View style={{flex:1,flexDirection:'column'}}>
      
        <ScrollView showsVerticalScrollIndicator={false}>
          
            <View style={{flex:1,minWidth:'100%',flexDirection:'column',flexWrap:'wrap'}}>
              <View style={{flex:1,flexDirection:'row', backgroundColor:'white',borderRadius:15,margin:20,elevation:5,alignItems:'center',flexWrap:'wrap'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'flex-start',margin:5,marginLeft:20,minWidth:25,maxWidth:25}}>
                  <TouchableOpacity onPress={()=>setModalVisible(true)} style={{flex:1}}>
                    <Icon name="list" size={25} color="black" />
                  </TouchableOpacity>
                  
                </View>
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start',alignItems:'center',marginLeft:15}}>
                {Help? 
                <View style={{backgroundColor:'#85CDFD',borderRadius:7.5,margin:2}}>
                  <Text style={{fontSize:15,fontFamily:'Montserrat-Bold',margin:2}}> #Help </Text>
                </View>
                :null}
                {Need? 
                <View style={{backgroundColor:'#85CDFD',borderRadius:7.5,margin:2}}>
                  <Text style={{fontSize:15,fontFamily:'Montserrat-Bold',margin:2}}> #Need </Text>
                </View>
                :null}
                {Game? 
                <View style={{backgroundColor:'#85CDFD',borderRadius:7.5,margin:2}}>
                  <Text style={{fontSize:15,fontFamily:'Montserrat-Bold',margin:2}}> #Game </Text>
                </View>
                :null}
                {Selling? 
                <View style={{backgroundColor:'#85CDFD',borderRadius:7.5,margin:2}}>
                  <Text style={{fontSize:15,fontFamily:'Montserrat-Bold',margin:2}}> #Selling </Text>
                </View>
                :null}
                {Buying? 
                <View style={{backgroundColor:'#85CDFD',borderRadius:7.5,margin:2}}>
                  <Text style={{fontSize:15,fontFamily:'Montserrat-Bold',margin:2}}> #Buying </Text>
                </View>
                :null}
                {LookingFor? 
                <View style={{backgroundColor:'#85CDFD',borderRadius:7.5,margin:2}}>
                  <Text style={{fontSize:15,fontFamily:'Montserrat-Bold',margin:2}}> #LookingFor </Text>
                </View>
                :null}
                {Sports? 
                <View style={{backgroundColor:'#85CDFD',borderRadius:7.5,margin:2}}>
                  <Text style={{fontSize:15,fontFamily:'Montserrat-Bold',margin:2}}> #Sports </Text>
                </View>
                :null}
                {Computer? 
                <View style={{backgroundColor:'#85CDFD',borderRadius:7.5,margin:2}}>
                  <Text style={{fontSize:15,fontFamily:'Montserrat-Bold',margin:2}}> #Computer </Text>
                </View>
                :null}
                {Mobile? 
                <View style={{backgroundColor:'#85CDFD',borderRadius:7.5,margin:2}}>
                  <Text style={{fontSize:15,fontFamily:'Montserrat-Bold',margin:2}}> #Mobile </Text>
                </View>
                :null}
                </View>
              </View>
            </View>
            <Text style={{fontFamily:'Montserrat-Bold',fontSize:30,marginLeft:20,marginBottom:10}}>Pinned Posts</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} decelerationRate={0}>
              <View style={{flex:1,flexDirection:'column',marginLeft:20,marginBottom:15}}>
                  <View style={{flex:1,flexDirection:'row'}}>
                    <Bookmarks />
                    <Bookmarks />
                    <Bookmarks />
                  </View>
              </View>
            </ScrollView>
            <Text style={{fontFamily:'Montserrat-Bold',fontSize:30,marginLeft:20,marginTop:5}}>Free Board</Text>
            
            <View style={{flex:1}}>
                <Board></Board>
            </View>
      
        </ScrollView>
      <AddPostBtn />
      <Modal
        
        visible={modalVisible}
        onTouchOutside={() => {
          setModalVisible(false);
        }}
        style={{flex:1}}
        >
          <View style={{flex:1,flexDirection:'column',minHeight:250,maxHeight:250,minWidth:'80%'}}>
            <View style={{flex:1,flexDirection:'row',minHeight:50,maxHeight:50,backgroundColor:'#362FD9',alignItems:'center'}}>
              
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={{marginLeft:15,fontSize:25,fontFamily:'Montserrat-SemiBold',color:'#DEFCF9'}}>Filter Tags</Text>
              </View>
              <View style={{flex:1,alignItems:'flex-end',marginRight:15,minWidth:40,maxWidth:40}}>
                <TouchableOpacity onPress={()=>setModalVisible(false)}>
                  <Icon name="times" size={35 } color="black" />
                </TouchableOpacity>
                
              </View>
            </View>
            <ModalContent style={{flex:1,maxWidth:'100%'}}>
              <View style={{flex:1,flexDirection:'column'}}>
              <View style={{flex:1,flexDirection:'row'}}>
                <CheckBox
                  center
                  title="#Help"
                  checked={Help}
                  onPress={() => setHelp(!Help)}
                  containerStyle={{flex:1,alignItems:'flex-start',padding:0,maxHeight:25}}
                  
                />
                <CheckBox
                  center
                  title="#Need"
                  checked={Need}
                  onPress={() => setNeed(!Need)}
                  containerStyle={{flex:1,alignItems:'flex-start',padding:0,maxHeight:25}}
                />
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <CheckBox
                  center
                  title="#Game"
                  checked={Game}
                  containerStyle={{flex:1,alignItems:'flex-start',padding:0,maxHeight:25}}
                  onPress={() => setGame(!Game)}
                />
                <CheckBox
                  center
                  title="#Selling"
                  checked={Selling}
                  containerStyle={{flex:1,alignItems:'flex-start',padding:0,maxHeight:25}}
                  onPress={() => setSelling(!Selling)}
                />
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
              <CheckBox
                center
                title="#Buying"
                checked={Buying}
                containerStyle={{flex:1,alignItems:'flex-start',padding:0,maxHeight:25}}
                onPress={() => setBuying(!Buying)}
              />
              <CheckBox
                center
                title="#Mobile"
                checked={Mobile}
                containerStyle={{flex:1,alignItems:'flex-start',padding:0,maxHeight:25}}
                onPress={() => setMobile(!Mobile)}
              />
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
              <CheckBox
                center
                title="#Sports"
                checked={Sports}
                containerStyle={{flex:1,alignItems:'flex-start',padding:0,maxHeight:25}}
                onPress={() => setSports(!Sports)}
              />
              <CheckBox
                center
                title="#Computer"
                checked={Computer}
                containerStyle={{flex:1,alignItems:'flex-start',padding:0,maxHeight:25}}
                onPress={() => setComputer(!Computer)}
              />
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
              <CheckBox
                center
                title="#LookingFor"
                checked={LookingFor}
                containerStyle={{flex:1,alignItems:'flex-start',padding:0,maxHeight:25}}
                onPress={() => setLookingFor(!LookingFor)}
              />

              </View>
              

              </View>
            </ModalContent>
          </View>
        
      </Modal>
    </View>
  );
}

function ProfileScreen() {
  return (
    
      <View >
        <Profile></Profile>
      </View>
    
  );
}

const Tab = createMaterialTopTabNavigator();


function MyTabs(route) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor:'red',
        tabBarLabelStyle: { fontSize: 12, },
        tabBarStyle: { backgroundColor: 'transparent',elevation:0,shadowOpacity: 0, borderBottomLeftRadius:15,borderBottomRightRadius:15,overflow:'hidden',minHeight:50,maxHeight:50},
        tabBarIndicatorStyle:{
          backgroundColor:'#81D6C3',
          height:5,
            
        }
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ 
                      tabBarLabelStyle:{
                        color:"white",
                        fontFamily:'Montserrat-SemiBold',  
                        fontSize:15
                      },
                      
                      
                      
                    
      }}
      />
      <Tab.Screen
        name="Home"
        component={FeedScreen}
        options={{ 
            tabBarLabelStyle:{
              color:"white",
              fontFamily:'Montserrat-SemiBold',
              fontSize:15
            }
          
        }}
      />
      <Tab.Screen
        name="Board"
        component={BoardScreen}
        options={{ 
            tabBarLabelStyle:{
              color:"white",
              fontSize:15,
              fontFamily:'Montserrat-SemiBold',
            }
        }}
      />
      
    </Tab.Navigator>
  );
}


export default function Nav() {
  const [searchInput,setSearchInput] = useState()
  return (
   
      <MyTabs/>
   
        
        
       
      
  );
}
