/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

function Form() {
  return(
  <View style={styles.container}>

  <View style={styles.inputs}>
  <TextInput style={styles.inputtext} placeholder="User Name" />
  <TextInput style={styles.inputtext} placeholder="Password" />
  <Button title="Login"  />

  </View >

  </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputs: {
    padding: 15,

  },
  inputtext: {
    backgroundColor: '#eddfb9',
    padding: 10,
    marginBottom: 15,
  },
});
export default Form;
