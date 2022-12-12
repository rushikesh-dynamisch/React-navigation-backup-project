
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,View,ImageBackground} from 'react-native';
import {Images} from './Images'
import styled from 'styled-components/native';

export const Pineapple=()=>
{
    
    return(
    <View>
     <PineappleImg source={require('../Components/Images/fruitimg.png')} />
     <Text>1 item</Text>
     <MainText>Pineapple</MainText>
     <PriceText>$2.39.</PriceText>
    </View>
      )
    
}
const Text = styled.Text`
font-size: 15px;
color: black;
margin-left:20px;
`;
const MainText = styled.Text`
font-size: 25px;
color: black;
margin-left:20px;
font-weight:bold;
`;
const PriceText = styled.Text`
font-size: 20px;
color: black;
margin-left:20px;
color:#EC5800;
`;

const Text2 = styled.Text`

font-size: 25px;
color: black;
font-weight: 500;
margin:20px;
margin-top:-20px;
padding:2px
`;

const PineappleImg = styled.Image`
	width: 150px;
	height: 160px;
	
	border-radius: 22px;
	margin-left:100px;
    margin-bottom:10px;
    
  
`;

 