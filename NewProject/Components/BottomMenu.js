
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,View,ImageBackground} from 'react-native';
import {Images} from './Images'
import styled from 'styled-components/native';

export const BottomMenu=()=>
{
    return(
    
     <CategoryView>
        <Iconimg source={require('../Components/Images/CartNew.jpg')} />
        <Iconimg source={require('../Components/Images/Dislike.jpg')} />
        
        <HomeIcon source={require('../Components/Images/HomeNew.jpg')} />
        
        <Iconimg source={require('../Components/Images/NewMsg.jpg')} />
        <Iconimg source={require('../Components/Images/NewSetting.jpg')} />
        </CategoryView>

      )
    
}


const Text = styled.Text`

font-size: 25px;
color: black;
font-weight: 500;

`;

const CardView = styled.View`
	width: 100%;
	height: 300px;
    display:flex;
    justify-content:center;
    align-items:center
    flex-direction:row;
    margin-top:-65px;
   `;

   const CardImage = styled.Image`
	width: 150px;
	height: 120px;
	
	border-radius: 22px;
	margin-left: 20px;
    object-fit: contain;
`;

const CategoryView = styled.View`
	width: 300px;
	height: 55px;
    display:flex;
    flex-direction:row;
    margin-top:-80px;
 
`;

const Iconimg = styled.Image`
	width: 40px;
	height: 40px;
	
	border-radius: 22px;
	margin-left: 27px;
    object-fit: contain;
    
`;

const HomeIcon = styled.Image`
	width: 55px;
	height: 55px;
	margin-top:-13px;
	border-radius: 27px;
	margin-left: 30px;
    object-fit: contain;
    
`;
const HomeView = styled.View`
	width: 30px;
	height: 30px;
    background-color:red;
`;

