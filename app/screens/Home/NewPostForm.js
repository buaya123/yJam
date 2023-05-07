import React ,{useState} from 'react';
import { View, Text, FlatList, TextInput,StyleSheet,TouchableOpacity,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../Prelim/CustomButton';



function NewPostForm(props) {
    const navigation = useNavigation();
    const [title,setTitle] = useState('')
    const [tag,setTag] = useState('')
    const [body,setBody] = useState('')
    const [height, setHeight] = useState(0);
    const [heightBody, setHeightBody] = useState(0);
    const [heightTag, setHeightTag] = useState();
    const [listOfTags, setListOfTags] = useState([])


    const addTag= ()=>{
        var cleanedTag = tag

        var regex =/[ ""{}!%#\^\$\(\)+=.\/\/`\[\]''<>\/\\,]/g
        cleanedTag = cleanedTag.replace(regex,"")

       setListOfTags([...listOfTags,{
        data:'#'+cleanedTag
       }])
       
       setTag('')
    }

    const removeTag = (index) =>{
        setListOfTags(tag1 => tag1.filter((el,i)=>i !== index))
    }

    const RenderTag = ({indexs,oneTag})=>{
        return(
        
            <TouchableOpacity onPress={()=>removeTag(indexs)}>
                <View style={{margin:5,backgroundColor:'#81D6C3',borderRadius:20}}>
                    <Text  style={{fontSize:15,margin:5,fontFamily:'Montserrat-SemiBold'}}>{oneTag}</Text>
                </View>
            </TouchableOpacity>
        )

    }
    

    return (
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:1,flexDirection:'row',minHeight:100,maxHeight:100,backgroundColor:'darkblue'}}>
                <View style={{flex:1,justifyContent:'center',marginTop:StatusBar.currentHeight,marginLeft:15}}>
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                        >
                        <Icon name="arrow-left" size={25} color="white" />  
                    </TouchableOpacity> 
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'flex-end',marginTop:StatusBar.currentHeight,marginRight:15}}>
                    <TouchableOpacity>
                        <Text style={{fontSize:20,color:'white',fontFamily:'Montserrat-SemiBold'}}>Post</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={{flexDirection:'column',marginLeft:15,marginRight:15,marginTop:50,minHeight:heightTag}}>
                <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'#D3D3D3',paddingBottom:heightTag,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    
                    <View style={{flex:1,minHeight:25,flexDirection:'row',alignItems:'flex-end'}}>
                        <Icon name="hashtag" size={20} color="black" />
                        <TextInput
                        autoCorrect={false}
                        autoCapitaliz={false}
                        autoComplete='off'
                        value={tag}
                        placeholder="Press enter to add tag"
                        style={{flex:1,fontSize:20,fontFamily:'Montserrat-SemiBold',color:'black',marginLeft:5,minHeight:heightTag}}
                        onChangeText ={tag => setTag(tag)}
                        onContentSizeChange={event => {
                            setHeightTag(event.nativeEvent.contentSize.height);
                            }}
                        onSubmitEditing={addTag}
                        />
                    </View>
                    
                    
                </View>
                
             
            </View>
            <View style={{flexDirection:'column',flexWrap:'wrap',marginLeft:15,marginRight:15}}>
                <FlatList
                    numColumns={3}
                    data={listOfTags}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item,index}) =>(<RenderTag indexs={index} oneTag={item.data} />)}
                />

            </View>
            <View style={{flex:1,flexDirection:'column',minHeight:50,marginLeft:15,marginRight:15,marginTop:20,justifyContent:'center',maxHeight:height}}>
                <View style={{flex:1,borderBottomWidth:1,borderBottomColor:'#D3D3D3',paddingBottom:height}}>
                    <TextInput
                        multiline={true}
                        
                        placeholder="A good title"
                        style={{fontSize:20,fontFamily:'Montserrat-SemiBold',color:'black',marginLeft:20,minHeight:height}}
                        onChangeText ={title => setTitle(title)}
                        onContentSizeChange={event => {
                            setHeight(event.nativeEvent.contentSize.height);
                          }}
                    
                    />
                </View>
             
            </View>
            <View style={{flex:1,marginLeft:15,marginRight:15,marginTop:20}}>
                <TextInput
                    multiline={true}
                    placeholder="Post body"
                    style={{fontSize:20,fontFamily:'Montserrat-Regular',color:'black',marginLeft:20,minHeight:heightBody}}
                    onChangeText ={body => setBody(body)}
                    onContentSizeChange={event => {
                        setHeightBody(event.nativeEvent.contentSize.height);
                        }}
                    
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    backHeader:{
        flexDirection:"row",
        flex:1,
        minHeight:75,
        maxHeight:75,
        alignItems:"center",
        margin:10
    },
    body:{
        flex:1,
        margin:10,
        flexDirection:"column",
        justifyContent:"flex-start",
    },
    subjectInput: {
        flex:3,
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        borderColor:"grey"
      },
      bodyInput:{
        flex:3,
        height: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        borderColor:"grey",
        textAlignVertical: "top"
      }

  });

export default NewPostForm;