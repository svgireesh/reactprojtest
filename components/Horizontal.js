/* @flow */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

function Horizontal()  {

    return (
      <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
        <View style={[styles.outerbox,styles.bluebox]}>
        <Text style={styles.InnerText}>Welcome to My App </Text>
        </View>
        <View style={[styles.outerbox, styles.redbox]}>
        <Text style={styles.InnerText}> 2nd page </Text>
        </View>
        <View style={[styles.outerbox,styles.greenbox]}>
        <Text style={styles.InnerText}> 3rd page</Text>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {

  },
  outerbox: {

    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,

  },
  bluebox: {
  backgroundColor: '#007bb6',
  },
  redbox: {
    backgroundColor: '#ed3713',
  },
  greenbox: {
    backgroundColor: '#13ed30',
  },
  InnerText : {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',

  },
});
export default Horizontal;
