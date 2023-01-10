

// import { useRef } from 'react';
// import React from 'react';
// import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,View,ImageBackground, Alert,Animated,PanResponder} from 'react-native';
// import styled from 'styled-components';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SecondPage } from './SecondPage';
// export const Categories=({navigation})=>
// {
    
//     const pan = useRef(new Animated.ValueXY()).current;
//      const panResponder = useRef(
//       PanResponder.create({
//         onMoveShouldSetPanResponder: () => true,
//         onPanResponderMove: Animated.event([
//           null,
//           { dx: pan.x, dy: pan.y }
//         ]),
//         onPanResponderRelease: () => {
//           Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
//         }
//       })
//     ).current;
  


//     return(
       
//         <View>
        
      
//        <Text>Categories.</Text>
      
//         <CategoryView>
//         <Iconimg source={require('../Components/Images/Newnut.jpg')} />
//         <Iconimg source={require('../Components/Images/VegIcon.jpg')} />
//         <Iconimg source={require('../Components/Images/NewApple.jpg')} />
//         <Iconimg source={require('../Components/Images/leaf.jpg')} />
//         </CategoryView>

         
//         <Title >Nuts</Title>
//         <Title1 >Vegetables</Title1>
//         <Title2 >Fruits</Title2>
//         <Title3 >Gluten</Title3>
//         <Animated.View
//          style={{
//             transform: [{ translateX: pan.x }, { translateY: pan.y }],
           
//           }}
//           {...panResponder.panHandlers}
//         >
//         <CardView>
//         <CardImage source={require('../Components/Images/BananaNew.jpg')} />
//         <CardImage source={require('../Components/Images/AppleImg.jpg')} />
//         </CardView>
      
//         <CardName>
//        <TitleText>Bunch</TitleText>
//        <TitleMain>Organic Bananas</TitleMain>
//        <TitlePrice>$1.00 </TitlePrice>
//         <Additem>
//         <AddSymbol>+</AddSymbol>
//         </Additem>
//         </CardName>
//         <CardName2>
//         <TitleText2>1Lb</TitleText2>
//        <TitleMain2>Peach</TitleMain2>
//        <TitlePrice2>$1.99 </TitlePrice2>
//        <Additem onPress={()=>Alert.alert("hello")}>
//         <AddSymbol>+</AddSymbol>
//         </Additem>
//         </CardName2>
//         </Animated.View>
//          {/* <Add onPress={() => navigation.navigate('FirstPage')}/> */}
//         </View>
//     )
// } 


// const Add = styled.TouchableOpacity`
// height:20px;
// width:20px;
// color: red;
// border-radius:25px;
// background-color:red;
// margin-left:30px;
// margin-top:-20px;
// `;
// const Text = styled.Text`

// font-size: 25px;
// color: 	black;
// font-weight: 500;
// margin:20px;
// margin-top:50px;
// padding:2px
// `;

// const Iconimg = styled.Image`
// 	width: 70px;
// 	height: 70px;
	
// 	border-radius: 22px;
// 	margin-left: 20px;
//     object-fit: contain;
    
// `;

// const CategoryView = styled.View`
// 	width: 300px;
// 	height: 100px;
//     display:flex;
//     flex-direction:row;
//     margin-top:10px;
// `;

// const CardView = styled.View`
// 	width: 100%;
// 	height: 300px;
//     display:flex;
//     justify-content:center;
//     align-items:center
//     flex-direction:row;
   
// `;

// const Card = styled.View`
// 	width: 200px;
// 	height: 20px;
    
// 	margin-top:-100px;
//     display:flex;
//     flex-direction:row;
// `;

// const CardName = styled.View`
// 	width: 150px;
// 	height: 80px;
//     background-color:#F0F0F0;
// 	margin-top:-130px;
//     margin-left:30px; 
//     border-radius: 5px;  
// `;

// const CardName2 = styled.View`
// 	width: 150px;
// 	height: 80px;
//     background-color:#F0F0F0;
// 	margin-top:-80px;
//     margin-left:200px; 
//     border-radius: 10px;  
// `;

// const CardImage = styled.Image`
// 	width: 150px;
// 	height: 150px;
	
// 	border-radius: 22px;
// 	margin-left: 20px;
//     object-fit: contain;
//     margin-top:-90px;
    
// `;

// const Title = styled.Text`

// font-size: 15px;
// color: 	black;
// font-weight: 500;
// margin-left:35px;
// margin-top:-25px;

// `;

// const Title1 = styled.Text`

// font-size: 15px;
// color: 	black;
// font-weight: 500;
// margin-left:108px;
// margin-top:-22px;

// `;

// const Title2 = styled.Text`

// font-size: 15px;
// color: 	black;
// font-weight: 500;
// margin-left:215px;
// margin-top:-22px;

// `;

// const Title3 = styled.Text`

// font-size: 15px;
// color: 	black;
// font-weight: 500;
// margin-left:300px;
// margin-top:-22px;

// `;

// const TitleText = styled.Text`

// font-size: 10px;
// color: 	black;
// font-weight: 500;
// margin:7px 7px;

// `;

// const TitleMain = styled.Text`

// font-size: 15px;
// color: 	black;
// font-weight: 500;
// margin-left:7px;

// `;

// const TitlePrice = styled.Text`

// font-size: 15px;
// color: 	black;
// font-weight: 500;
// margin-left:7px;

// `;


// const TitleText2 = styled.Text`

// font-size: 10px;
// color: 	black;
// font-weight: 500;
// margin:7px 7px;

// `;

// const TitleMain2 = styled.Text`

// font-size: 15px;
// color: 	black;
// font-weight: 500;
// margin-left:7px;

// `;

// const TitlePrice2 = styled.Text`

// font-size: 15px;
// color: 	black;
// font-weight: 500;
// margin-left:7px;

// `;

// const Additem = styled.TouchableOpacity`
// 	width: 20px;
// 	height: 20px;
//     background-color:white;
//     border-radius:20px;
//     margin-top:-21px;
//     margin-left:110px;
// `;

// const AddSymbol = styled.Text`

// font-size: 20px;
// color: 	black;
// margin-top:-4px;
// margin-left:4px;

// `;

// const Aview= styled.View`
// 	width: 100px;
// 	height: 100px;
//     display:flex;
//     justify-content:center;
//     align-items:center
//     flex-direction:row;
//     background-color:red;
   
// `;












import { useRef } from 'react';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,View,ImageBackground, Alert,Animated,PanResponder} from 'react-native';
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SecondPage } from './SecondPage';
export const Categories=({navigation})=>
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
          Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
        }
      })
    ).current;
  
    return(
       
        <View>
      
        <CategoryView>
        <Iconimg source={require('../Components/Images/Marriage.jpg')} />
        </CategoryView>
       
        <View
        //  style={{
        //     transform: [{ translateX: pan.x }, { translateY: pan.y }],
           
        //   }}
        //   {...panResponder.panHandlers}
        >
        <CardView>
        <CardImage source={require('../Components/Images/Bride1.jpg')} />
        <CardImage source={require('../Components/Images/Bride2.jpg')} />
       
        </CardView>

        <CardView2>
        <CardImage source={require('../Components/Images/Marriage2.jpg')} />
        <CardImage source={require('../Components/Images/Marriage.jpg')} />
       
        </CardView2>
      
        {/* <CardName>
       <TitleText>Bunch</TitleText>
       <TitleMain>Organic Bananas</TitleMain>
       <TitlePrice>$1.00 </TitlePrice>
        <Additem>
        <AddSymbol>+</AddSymbol>
        </Additem>

        </CardName>
        <CardName2>
        <TitleText2>1Lb</TitleText2>
       <TitleMain2>Peach</TitleMain2>
       <TitlePrice2>$1.99 </TitlePrice2>
       <Additem onPress={()=>Alert.alert("hello")}>
        <AddSymbol>+</AddSymbol>
        </Additem>
        </CardName2> */}
        </View>
         {/* <Add onPress={() => navigation.navigate('FirstPage')}/> */}
        </View>
    )
} 


const Add = styled.TouchableOpacity`
height:20px;
width:20px;
color: red;
border-radius:25px;
background-color:red;
margin-left:30px;
margin-top:-20px;
`;
const Text = styled.Text`

font-size: 25px;
color: 	black;
font-weight: 500;
margin:20px;
margin-top:50px;
padding:2px
`;

const Iconimg = styled.Image`
	width:350px;
	height: 200px;
    object-fit: contain;
    
`;

const CategoryView = styled.View`
	width: 300px;
	height: 100px;
    display:flex;
    flex-direction:row;
    margin-top:10px;
`;

const CardView = styled.View`
	width: 100%;
	height: 300px;
    display:flex;
    justify-content:center;
    align-items:center
    flex-direction:row;
   
`;
const CardView2 = styled.View`
	width: 100%;
	height: 300px;
    display:flex;
    justify-content:center;
    align-items:center
    flex-direction:row;
   margin-top:-160px;
`;
const Card = styled.View`
	width: 200px;
	height: 20px;
    
	margin-top:-100px;
    display:flex;
    flex-direction:row;
`;

const CardName = styled.View`
	width: 150px;
	height: 80px;
    background-color:#F0F0F0;
	margin-top:-130px;
    margin-left:30px; 
    border-radius: 5px;  
`;

const CardName2 = styled.View`
	width: 150px;
	height: 80px;
    background-color:#F0F0F0;
	margin-top:-80px;
    margin-left:200px; 
    border-radius: 10px;  
`;

const CardImage = styled.Image`
	width: 150px;
	height: 100px;
	
	
	margin-left: 20px;
    object-fit: contain;
    margin-top:-90px;
    
`;

const Title = styled.Text`

font-size: 15px;
color: 	black;
font-weight: 500;
margin-left:35px;
margin-top:-25px;

`;

const Title1 = styled.Text`

font-size: 15px;
color: 	black;
font-weight: 500;
margin-left:108px;
margin-top:-22px;

`;

const Title2 = styled.Text`

font-size: 15px;
color: 	black;
font-weight: 500;
margin-left:215px;
margin-top:-22px;

`;

const Title3 = styled.Text`

font-size: 15px;
color: 	black;
font-weight: 500;
margin-left:300px;
margin-top:-22px;

`;

const TitleText = styled.Text`

font-size: 10px;
color: 	black;
font-weight: 500;
margin:7px 7px;

`;

const TitleMain = styled.Text`

font-size: 15px;
color: 	black;
font-weight: 500;
margin-left:7px;

`;

const TitlePrice = styled.Text`

font-size: 15px;
color: 	black;
font-weight: 500;
margin-left:7px;

`;


const TitleText2 = styled.Text`

font-size: 10px;
color: 	black;
font-weight: 500;
margin:7px 7px;

`;

const TitleMain2 = styled.Text`

font-size: 15px;
color: 	black;
font-weight: 500;
margin-left:7px;

`;

const TitlePrice2 = styled.Text`

font-size: 15px;
color: 	black;
font-weight: 500;
margin-left:7px;

`;

const Additem = styled.TouchableOpacity`
	width: 20px;
	height: 20px;
    background-color:white;
    border-radius:20px;
    margin-top:-21px;
    margin-left:110px;
`;

const AddSymbol = styled.Text`

font-size: 20px;
color: 	black;
margin-top:-4px;
margin-left:4px;

`;

const Aview= styled.View`
	width: 100px;
	height: 100px;
    display:flex;
    justify-content:center;
    align-items:center
    flex-direction:row;
    background-color:red;
   
`;





