import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import OnePost from './OnePost';

function Feed(props) {


    return (
        <ScrollView >
            <OnePost />
            <OnePost />
            <OnePost />
            <OnePost />
        </ScrollView>
        
            
    );
}


export default Feed;