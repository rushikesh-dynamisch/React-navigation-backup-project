import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
 
export default function Home2() {
  const [counter, setCounter] = useState(0);
 
  const handleIncreament = () => {
    setCounter(counter + 1);
  };
 
  const handleDecreament = () => {
    setCounter(counter - 1);
  };
 
  return (
    <View style={styles.container}>
        <Text></Text>
      <Text style={styles.title_text}>Counter App</Text>
      <Text style={styles.counter_text}>{counter}</Text>
 
      <TouchableOpacity onPress={handleIncreament} style={styles.btn}>
        <Text style={styles.btn_text}> Increment </Text>
      </TouchableOpacity>
       
      <TouchableOpacity
        onPress={handleDecreament}
        style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}>
        <Text style={styles.btn_text}> Decrement </Text>
      </TouchableOpacity>
     
      <Text style={
        {
            color:'red'
        }
      }>Hello</Text>
   </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
  },
});

