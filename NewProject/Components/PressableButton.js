import React from 'react';
import styled from 'styled-components/native';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,View,ImageBackground,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstPage } from './FirstPage';
const ButtonContainer = styled.TouchableOpacity`
  margin-vertical: 40px;
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: yellow;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color:red;
`;
const PressableButton = ({navigation}) => (

   <ButtonContainer onPress={() => navigation.navigate('FirstPage')}>
   <ButtonText>ClickMe</ButtonText>
   </ButtonContainer>
   
   
   //     <ButtonContainer onPress={()=>Alert.alert("something new")} bgColor={bgColor}>
    //     <ButtonText>{title}</ButtonText>
    //   </ButtonContainer>
 );

    // return(
    //     <View>
    //     <ButtonText>Hello</ButtonText>
    //     <ButtonContainer />
    //     </View>
    // )


export default PressableButton;
