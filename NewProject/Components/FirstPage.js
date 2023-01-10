
import React from 'react';
import {SafeAreaView, ScrollView, Button, StyleSheet, useColorScheme,View,ImageBackground} from 'react-native';
import {Images} from './Images'
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const FirstPage=({navigation})=>
{

    return(
    <View>
      <Text>Welcome To</Text>
      <Text2>ShadiSargam.com</Text2>
      <Iconimg source={require('../Components/Images/BellIcon.jpg')} /> 
      </View>
      )
    
}
const Text = styled.Text`

font-size: 20px;
color: #D2691E;
font-weight: 500;
margin:25px;
margin-left:135px;
padding:2px

`;

const Text2 = styled.Text`

font-size: 20px;
color: #D2691E;
font-weight: 500;
margin:25px;
margin-top:-20px;
padding:2px;
margin-left:105px;
`;


const Iconimg = styled.Image`
	width: 50px;
	height: 50px;
	background: black;
	border-radius: 22px;
	margin-left: 315px;
  margin-top:-90px;
`;
