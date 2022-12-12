
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, useColorScheme,ImageBackground} from 'react-native';
import styled from 'styled-components';

export const Cards=()=>
{
    return(
        
        <Card>

        </Card>
    
    )
} 

const Card = styled.View`

width:30px;
height:30px,
background-color:red;

`;

const Iconimg = styled.Image`
	width: 70px;
	height: 70px;
	
	border-radius: 22px;
	margin-left: 20px;
    object-fit: contain;
    
`;

const CategoryView = styled.View`
	width: 300px;
	height: 300px;
    display:flex;
    flex-direction:row;
    margin-top:20px;
	
`;

