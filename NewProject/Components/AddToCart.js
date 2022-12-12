


import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,View,ImageBackground} from 'react-native';
import {Images} from './Images'
import styled from 'styled-components/native';

export const AddToCart=()=>
{
    return(
        <View>
   <AddToCartView>
  <Text>Add To Cart</Text>
  </AddToCartView>
      </View>
      )
}

const Text = styled.Text`
font-size: 20px;
color: black;
margin:auto;
color:white;
font-weight:bold;
`;

const AddToCartView = styled.View`
	width: 80%;
	height: 50px;
    margin:auto;
    margin-top:50px;
    margin-bottom:50px;
    border-radius:25px;
    background-color:#EC5800;
   `;
