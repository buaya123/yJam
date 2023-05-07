import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import OneBoardPost from './OneBoardPost';
import AddPostBtn from './AddPostBtn'

function Board(props) {
    return (
        <View >
            <OneBoardPost />
            <OneBoardPost />
            <OneBoardPost />
            <OneBoardPost />
            <OneBoardPost />
            <OneBoardPost />
            <OneBoardPost />
            
        </View>
        
            
    );
}


export default Board;