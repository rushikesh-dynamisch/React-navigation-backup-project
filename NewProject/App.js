
import * as React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstPage } from './Components/FirstPage';
import { Searchbar } from './Components/Searchbar';
import styled from 'styled-components/native';
import { Categories } from './Components/Categories';
import { Cards } from './Components/Cards';
import { NewCards, NewContent } from './Components/NewContent';
import { BottomMenu } from './Components/BottomMenu';
import PressableButton from './Components/PressableButton';
import { SecondPage } from './Components/SecondPage';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>

  );
}
function HomeScreen({ navigation }) {
  return (
  
     <ScrollView>
     <Component>
     <FirstPage/>
     <Categories/>
     <Add onPress={() => navigation.navigate('SecondPage')}><AddText></AddText></Add>
    <NewContent/>
    </Component>
    </ScrollView>
  );
}
 
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="Searchbar" component={Searchbar} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="PressableButton" component={PressableButton} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const Component = styled.View`
height:100%;
width:100%;
color: red;

background-color:white;
margin-left:-10px;
`;

const Add = styled.TouchableOpacity`
height:20px;
width:20px;
color: red;
border-radius:25px;

margin-left:140px;
margin-top:-28px;
`;

const AddText = styled.Text`
font-color:yellow;
font-size:10px
`;


