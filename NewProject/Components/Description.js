


import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,View,ImageBackground} from 'react-native';
import {Images} from './Images'
import styled from 'styled-components/native';

export const Description=()=>
{
    return(
        <View>
     <Text>Crushed pineapple is used in yugurt,jam</Text>
     <Text2>Sweets and icecream.</Text2>
     <Text3>Crushed pineapple is used in yugurt,jam</Text3>
     <Text4>Sweets and icecream.</Text4>
     </View>
      )
}

const Text = styled.Text`
font-size: 15px;
color: black;
margin-left:25px;
`;
const Text2 = styled.Text`
font-size: 15px;
color: black;
margin-left:25px;
margin-bottom:20px;
`;
const Text3 = styled.Text`
font-size: 15px;
color: black;
margin-left:25px;

`;
const Text4 = styled.Text`
font-size: 15px;
color: black;
margin-left:25px;
`;



