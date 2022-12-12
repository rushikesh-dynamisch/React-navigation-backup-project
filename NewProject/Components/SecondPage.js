
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,View,ImageBackground} from 'react-native';
import {Images} from './Images'
import styled from 'styled-components/native';
import { Pineapple } from './Pineapple';
import { Sidebutton } from './Sidebutton';
import { Description } from './Description';
import { AddToCart } from './AddToCart';
export const SecondPage=()=>
{
    return(
        <View>
        {/* <Backbutton source={require('../Components/Images/Backbutton.png')} /> */}
        <Likebutton  source={require('../Components/Images/NewlikeButton.png')} />
        <Text>Richmond, VA</Text>
        <Mapview  source={require('../Components/Images/Googlemap.png')} />
        <Pineapple/>
        <Sidebutton/>
        <Description/>
        <AddToCart/>
      </View>
          )
    
}
const Text = styled.Text`
font-size: 18px;
color: black;
font-weight: 500;
margin:auto;
margin-top:5px
`;

const Topview = styled.View`
	width: 100%;
	height: 100px;
    display:flex;
    justify-content:center;
    align-items:center
    flex-direction:row;
    margin-top:-65px;
    background-color:red;
   `;

   const Backbutton = styled.Image`
   width: 50px;
   height: 50px;
   background: black;
   border-radius: 22px;
   margin-left: 18px;
  
`;

   const Likebutton = styled.Image`
    width: 50px;
	height: 50px;
	background: black;
	border-radius: 22px;
	margin-left: 290px;
    margin-top:-50px;
`;

const Mapview = styled.Image`
	width: 25px;
	height: 25px;
    border-radius:25px;
    background-color:red;
    margin-left:98px;
    margin-top:10px;
    
   `;
