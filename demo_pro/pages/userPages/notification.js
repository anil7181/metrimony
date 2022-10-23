import React, {useState} from 'react';
import { StyleSheet, Text, View,Image,TextInput , Button } from 'react-native';
 
export default function Notification() {

    return(
      <View style={styles.mainBlock}>
        <Text style={styles.notify}>xyz accept your request</Text>
        <Text style={styles.notify}>xyz declainmed your request</Text>
        <Text style={styles.notify}>admin warning</Text>
        <Text style={styles.notify}>admin blocked</Text>
      </View>
    )

}

const styles = StyleSheet.create({

  mainBlock : {
    paddingLeft: 15,
    paddingRight: 15,
  },
  notify : {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  }



})