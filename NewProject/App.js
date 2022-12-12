// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   ImageBackground,
//   Alert
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import { FirstPage } from './Components/FirstPage';
// import { Searchbar } from './Components/Searchbar';
// import styled from 'styled-components/native';
// import { Categories } from './Components/Categories';
// import { Cards } from './Components/Cards';
// import { NewCards } from './Components/NewCards';
// import { BottomMenu } from './Components/BottomMenu';
// import PressableButton from './Components/PressableButton';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// // const Section = ({children, title}): Node => {
// //   const isDarkMode = useColorScheme() === 'light';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.white,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.light,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // };


// // const App= () => {
// //   // const isDarkMode = useColorScheme() === 'light';

// //   // const backgroundStyle = {
// //   //   backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
// //   // };
// //   function DetailsScreen() {
// //     return (
// //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //         <Text>Details Screen</Text>
// //       </View>
// //     );
// //   }

// //   function HomeScreen({ navigation }) {
// //     return (
// //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //         <Text>Home Screen</Text>
// //         <Button
// //           title="Go to Details"
// //           onPress={() => navigation.navigate('Details')}
// //         />
// //       </View>
// //     );
// //   }




// //   return (

// //     <View>
// //       <Text>Hello</Text>
// //     </View>
// //   //   <ScrollView>
// //   //  <Component>
// //   //  <FirstPage/>
// //   //  <Searchbar/>
// //   //  <Categories/>
// //   //  {/* <Cards/> */}
// //   //  <NewCards/>
// //   //  <BottomMenu/>
// //   //  <PressableButton />
// //   //      {/* <PressableButton
// //   //       onPress={() => Alert.alert("Button is pressed")}
// //   //       title='Main Button'
// //   //       bgColor='papayawhip'
// //   //     /> */}


// //   //  </Component>
// //   //  </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   body:{
// //     backgroundColor:'skyblue',
// //     height:800,
// //   },

// // });





// const App= () => {


// };













// const Component = styled.View`
// height:100%;
// width:100%;
// color: red;

// background-color:white;
// `;


// export default App;

// In App.js in a new project

// import * as React from 'react';
// import { View, Text, Button, ScrollView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { FirstPage } from './Components/FirstPage';
// import { Searchbar } from './Components/Searchbar';
// import styled from 'styled-components/native';
// import { Categories } from './Components/Categories';
// import { Cards } from './Components/Cards';
// import { NewCards } from './Components/NewCards';
// import { BottomMenu } from './Components/BottomMenu';
// import PressableButton from './Components/PressableButton';

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>

//   );
// }
// function HomeScreen({ navigation }) {
//   return (
  

//        <ScrollView>
//        <Text>Welcome To Home</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => navigation.navigate('FirstPage')}
//          />
//         <Component>
       
//         <Searchbar />
        
//         {/* <Cards/> */}
//         <NewCards />
//         <BottomMenu />
//         <PressableButton />
//         {/* <PressableButton
//        onPress={() => Alert.alert("Button is pressed")}
//        title='Main Button'
//       bgColor='papayawhip'
//      /> */}

//       </Component>
//     </ScrollView>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//         <Stack.Screen name="FirstPage" component={FirstPage} />
//         <Stack.Screen name="Searchbar" component={Searchbar} />
//         <Stack.Screen name="Categories" component={Categories} />
//         <Stack.Screen name="PressableButton" component={PressableButton} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// const Component = styled.View`
// height:100%;
// width:100%;
// color: red;

// background-color:white;
// `;




import * as React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstPage } from './Components/FirstPage';
import { Searchbar } from './Components/Searchbar';
import styled from 'styled-components/native';
import { Categories } from './Components/Categories';
import { Cards } from './Components/Cards';
import { NewCards } from './Components/NewCards';
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
     <Searchbar/>
     <Categories/>
     <Add onPress={() => navigation.navigate('SecondPage')}><AddText></AddText></Add>
     {/* <Cards/> */}
     <NewCards/>
     <BottomMenu/>
     {/* <PressableButton /> */}
         {/* <PressableButton
          onPress={() => Alert.alert("Button is pressed")}
          title='Main Button'
         bgColor='papayawhip'
       /> */}
        
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


