import { useRef } from 'react';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,View,ImageBackground,Animated,PanResponder, Alert} from 'react-native';
import {Images} from './Images'
import styled from 'styled-components/native';

export const NewContent=()=>
{
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
   PanResponder.create({
     onMoveShouldSetPanResponder: () => true,
     onPanResponderMove: Animated.event([
       null,
       { dx: pan.x, dy: pan.y }
     ]),
     onPanResponderRelease: () => {
      Alert.alert('Do you want to delete.');
      Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
     }
   })
 ).current;

    return(
    <View
    // style={{
    //   transform: [{ translateX: pan.x }, { translateY: pan.y }],
     
    // }}
    // {...panResponder.panHandlers}
    
    >

      <CardView>
        <CardImage source={require('../Components/Images/Marathi.jpg')} />
        <CardImage source={require('../Components/Images/Marriage3.jpg')} />
        </CardView>
   </View>


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

margin-left: 20px;
object-fit: contain;
margin-top:-250px;      
`;


