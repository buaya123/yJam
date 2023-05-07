import React from 'react';
import { Text, View,StyleSheet ,Image,ScrollView} from 'react-native';
import { AutoSizeText , ResizeTextMode } from 'react-native-auto-size-text';
import Footer from '../Footer';

function PostDetails(props) {
    return (
        
        <View style={styles.container}>
            <View style={styles.heading}>
                <AutoSizeText
                    style={{marginBottom:10,fontFamily:'Montserrat-Bold'}}
                        mode={ResizeTextMode.group}
                        numberOfLines={2}>
                        This is the subject.
                </AutoSizeText>
            </View>

            <View style={styles.body}>
                <Text style={{fontSize:20,marginTop:20,textAlign:'justify'}}>{'\t\t\t\t'}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus quis turpis semper mollis. Duis elementum mi imperdiet lectus commodo iaculis. Quisque fermentum nunc ex, in vestibulum tortor tincidunt a.{'\n'}{'\n'} Duis pharetra non nisl quis fringilla. Pellentesque ex lectus, placerat cursus neque pharetra, rhoncus faucibus purus. Phasellus pharetra commodo mattis. Nulla id dui lobortis, ultricies orci in, porta ex. Nullam tincidunt, sem et congue consequat, ante odio finibus erat, eget imperdiet ipsum eros varius sapien.{'\n'}{'\n'} Nulla eget libero maximus, vehicula turpis ut, iaculis lorem. Duis et malesuada arcu. Suspendisse ac justo id urna vehicula scelerisque. Aenean felis mi, pulvinar a mollis quis, eleifend a turpis. Donec erat nisi, volutpat suscipit neque ut, ultricies dignissim velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </Text>
            </View>
            <View>
                <Text style={{alignSelf:"flex-end",marginTop:15}}>09/09/2023</Text>
            </View>
            <Footer />
        </View>
        
    );
}

export default PostDetails;

const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:"tomato",
        flexDirection:"column"
    },
    heading:{
        flex:1,
    },
    image:{
        
        height:250,
        backgroundColor:"tomato",
        justifyContent:"center",
        alignItems:"center"
    },
    body:{
        flex:3,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
       
        
    },
    imageStyle: {
        

    }
    

    
  });