
import React, { useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,View,ImageBackground, Alert} from 'react-native';
import {Images} from './Images'
import styled from 'styled-components/native';
import { Pineapple } from './Pineapple';

export const Sidebutton=()=>
{
    let count=1;
    const [number,setNumber]=useState(0);
    return(
     <Mainview>
     <Add onPress={()=>setNumber(number-1)}><AddText>__</AddText></Add>
     <Number>{number}</Number>
     <Minus onPress={()=>setNumber(number+1)}><Mark>+</Mark></Minus>
     </Mainview>
      
     )
}

const Add = styled.TouchableOpacity`
font-size: 15px;
color: black;
margin-left:2px;
margin-top:2px;
`;
const AddText = styled.Text`
font-size: 15px;
color: black;
margin-left:20px;
margin-top:8px;
`;


const Mark = styled.Text`
font-size: 22px;
color: black;
margin-left:2px;
margin-top:5px;
`;
const Number = styled.Text`
font-size: 15px;
color: black;
margin-left:60px;
margin-top:-15px;
`;

const Minus = styled.TouchableOpacity`
font-size: 30px;
color: black;
margin-left:100px;
margin-top:-32px;
color:#EC5800;
`;

const Mainview = styled.View`
	width: 140px;
	height: 50px;
   
    margin-left:200px;
    margin-top :-65px;
    margin-bottom:40px;
    border-radius:15px;
    border:1px solid black;
   `;
