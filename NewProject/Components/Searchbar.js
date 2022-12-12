
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,View,ImageBackground} from 'react-native';
import styled from 'styled-components';

export const Searchbar=()=>
{
    return(
       <View>
       <TouchableOpacity >
        <Text2>what are you looking for?</Text2>
       </TouchableOpacity >
       <Iconimg source={require('../Components/Images/NewSearch.jpg')} />
       </View>

    )
} 

const TouchableOpacity = styled.TouchableOpacity`
height:55px;
width:90%;
color: red;
margin:30px;
margin-left:20px
border-radius:25px
margin-top:50px;

background-color:#F0F0F0;
`;

const Text2 = styled.Text`

font-size: 15px;
color: 	#C0C0C0;
font-weight: 500;
margin:20px;
margin-top:13px;
margin-left:55px;
padding:2px
`;

const Iconimg = styled.Image`
	width: 30px;
	height: 30px;
    border-radius: 22px;
	margin-left: 40px;
    margin-top:-70px;
    object-fit: contain;
`;

