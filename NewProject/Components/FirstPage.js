
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
      <Text>Good for you.</Text>
      <Text2>Greate for life.</Text2>
      <Iconimg source={require('../Components/Images/BellIcon.jpg')} />
      {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Categories')}
         /> */}
      </View>
      )
    
}
const Text = styled.Text`

font-size: 25px;
color: black;
font-weight: 500;
margin:20px;
padding:2px

`;

const Text2 = styled.Text`

font-size: 25px;
color: black;
font-weight: 500;
margin:20px;
margin-top:-20px;
padding:2px
`;


const Iconimg = styled.Image`
	width: 50px;
	height: 50px;
	background: black;
	border-radius: 22px;
	margin-left: 315px;
  margin-top:-90px;
`;


// const styles = StyleSheet.create({
//     sectionContainer: {
//       marginTop: 0,
//       paddingHorizontal: 24,
     
//       height:800,
      
//     },
//     sectionTitle: {
     
//       fontSize: 24,
//       fontWeight: '600',
//     },
//     sectionDescription: {
//       marginTop: 8,
//       fontSize: 18,
//       fontWeight: '400',
//     },
//     highlight: {
//       fontWeight: '700',
//     },
//     img:{
//         height:50,
//         width:50
//     },
//     searchbar:
//     {
//         marginTop:20,
//         width:320,
//         height:50,
//         border:2,
//         borderColor:'red',
//         backgroundColor:'red',
//         borderRadius:25
        
//     },
//     heading :
//     {
//         marginTop:20,
//     },
//     content:{
//         width:30,
//         height:30,
//         backgroundColor:'red',

//     }

//   });






// import React from 'react';
// import {SafeAreaView, ScrollView,Text, StyleSheet, useColorScheme,View,ImageBackground} from 'react-native';
// import {Images} from './Images'


// export const FirstPage=()=>
// {

//     return(
//       <View style={styles.sectionContainer}>
//         <Text style={styles.heading}>Good for you.</Text>
//         <Text style={styles.heading}>Greate for life.</Text>
//       </View>

       

//     )
      
   
// }


// const styles = StyleSheet.create({
//     sectionContainer: {
//       marginTop: 0,
//       paddingHorizontal: 24,
//      fontSize:50,
//      fontWeight:'bold',
//       height:800,
      
//     },
//     sectionTitle: {
     
//       fontSize: 24,
//       fontWeight: '600',
//     },
//     sectionDescription: {
//       marginTop: 8,
//       fontSize: 18,
//       fontWeight: '400',
//     },
//     highlight: {
//       fontWeight: '700',
//     },
//     img:{
//         height:50,
//         width:50
//     },
//     searchbar:
//     {
//         marginTop:20,
//         width:320,
//         height:50,
//         border:2,
//         borderColor:'red',
//         backgroundColor:'red',
//         borderRadius:25
        
//     },
//     heading :
//     {
//         marginTop:20,
//         fontSize:30,
//         color:'black',
//     },
//     content:{
//         width:30,
//         height:30,
//         backgroundColor:'red',

//     }

//   });



