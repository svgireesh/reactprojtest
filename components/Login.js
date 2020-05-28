/* @flow */

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import Form from './Form';

function Login() {

    return (
      <View style={styles.container}>

        <View style={styles.logo}>
        <Image style={styles.logoimg} source={require('./logo.png')} />
        <Text> Company slogon </Text>
        </View>
        <View style={styles.forms}>
        <Form />
        </View>

      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ed3713',

  },
  logo: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
  logoimg: {
    height: 100,
    width: 100,

  },
  forms: {
    flex: 2,
  },
});

export default Login;
