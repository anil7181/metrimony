/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet,PixelRatio,  TouchableOpacity, Image, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import {mainStyle} from '../../pages/styles/mainStyles';
const logo = require('./../../assets/images/user1.jpg'); 
 
export default function Profile({ navigation }) { 
    const [pageHeader, setPageHeader] = useState("Rocky")
   
  return (

    <View style={mainStyle.mainScreen}>
    <View style={mainStyle.header} >
      <Text style={mainStyle.headerText}>{pageHeader}</Text>
    </View>

    <View style={styles.preferencesPage}>
    <ScrollView>
    <View>
      <TouchableOpacity
          onPress={() => { 
            navigation.navigate('Register')
          }}
        >
          <Image
            style={styles.logo}
            source={logo}
          />
       </TouchableOpacity>
    </View>
    <View style={{paddingLeft: 12, marginBottom: 30}}>
        <View style={styles.headings}>
          <Text style={styles.headingText}>Basic Information</Text>
        </View>
        <View>
        <Text style={{marginTop: 10}} ><Feather name="user" size={16} color="#777f87" />&nbsp;&nbsp; Robert Lamn</Text>
        <Text style={{marginTop: 10}} ><AntDesign name="calendar" size={15} color="#777f87" />&nbsp;&nbsp; 25-09-1995</Text>
        <Text style={{marginTop: 10}} ><MaterialCommunityIcons name="human-male-height" size={15} color="#777f87" />&nbsp;&nbsp; 5'1"</Text>
        <Text style={{marginTop: 10}} ><Foundation name="male-female" size={15} color="#777f87" />&nbsp;&nbsp; Single</Text>
        <Text style={{marginTop: 10}} ><FontAwesome name="language" size={15} color="#777f87" />&nbsp;&nbsp; Language</Text>
        <Text style={{marginTop: 10}} ><MaterialIcons name="directions-run" size={15} color="#777f87" />&nbsp;&nbsp; Physical Good</Text>
        </View>

        <View style={styles.headings}>
          <Text style={styles.headingText}>Religious Information</Text>
        </View>
        <View>
        <Text style={{marginTop: 10}} ><MaterialIcons name="directions-run" size={15} color="#777f87" />&nbsp;&nbsp; Hindu</Text>
        <Text style={{marginTop: 10}} ><MaterialIcons name="directions-run" size={15} color="#777f87" />&nbsp;&nbsp; Lingyat</Text>
        <Text style={{marginTop: 10}} ><MaterialIcons name="directions-run" size={15} color="#777f87" />&nbsp;&nbsp; Panchamsali</Text>
        </View>

        <View style={styles.headings}>
            <Text style={styles.headingText}>Horoscope Information</Text>
        </View>
        <View>
            <Text style={{marginTop: 10}} ><MaterialIcons name="access-time" size={15} color="#777f87" />&nbsp;&nbsp; 09:45pm</Text>
            <Text style={{marginTop: 10}} ><AntDesign name="calendar" size={15} color="#777f87" />&nbsp;&nbsp; Monday</Text>
            <Text style={{marginTop: 10}} ><MaterialCommunityIcons name="zodiac-cancer" size={15} color="#777f87" />&nbsp;&nbsp; Crab</Text>
            <Text style={{marginTop: 10}} ><MaterialIcons name="directions-run" size={15} color="#777f87" />&nbsp;&nbsp; Leo</Text>
        </View>

        <View style={styles.headings}>
            <Text style={styles.headingText}>Professional Information</Text>
        </View>
        <View>
            <Text style={{marginTop: 10}} ><FontAwesome name="graduation-cap" size={15} color="#777f87" />&nbsp;&nbsp; Bachelor Of Engineering</Text>
            <Text style={{marginTop: 10}} ><FontAwesome name="university" size={15} color="#777f87" />&nbsp;&nbsp; M S Rammayya</Text>
            <Text style={{marginTop: 10}} ><MaterialIcons name="work" size={15} color="#777f87" />&nbsp;&nbsp; Software developer</Text>
            <Text style={{marginTop: 10}} ><FontAwesome name="building-o" size={15} color="#777f87" />&nbsp;&nbsp; Mahindra info tech Pvt Ltd</Text>
            <Text style={{marginTop: 10}} ><FontAwesome name="building-o" size={15} color="#777f87" />&nbsp;&nbsp; Private Sector</Text>
            <Text style={{marginTop: 10}} ><FontAwesome name="inr" size={15} color="#777f87" />&nbsp;&nbsp; INR</Text>
            <Text style={{marginTop: 10}} ><MaterialCommunityIcons name="cash" size={15} color="#777f87" />&nbsp;&nbsp; 1,00,000</Text>
        </View>

        <View style={styles.headings}>
            <Text style={styles.headingText}>Professional Information</Text>
        </View>
        <View>
            <Text style={{marginTop: 10}} ><MaterialCommunityIcons name="map-marker-outline" size={15} color="#777f87" />&nbsp;&nbsp; Indian</Text>
            <Text style={{marginTop: 10}} ><MaterialCommunityIcons name="map-marker-outline" size={15} color="#777f87" />&nbsp;&nbsp; Karnatak </Text>
            <Text style={{marginTop: 10}} ><MaterialCommunityIcons name="map-marker-outline" size={15} color="#777f87" />&nbsp;&nbsp; Dharwad</Text>
            <Text style={{marginTop: 10}} ><MaterialCommunityIcons name="map-marker-outline" size={15} color="#777f87" />&nbsp;&nbsp; Hubli</Text>
            <Text style={{marginTop: 10}} ><MaterialCommunityIcons name="map-marker-outline" size={15} color="#777f87" />&nbsp;&nbsp; Lingrajnagar</Text>
        </View>

        <View style={styles.headings}>
            <Text style={styles.headingText}>Family Information</Text>
        </View>
        <View>
            <Text style={{marginTop: 10}} ><MaterialCommunityIcons name="map-marker-outline" size={15} color="#777f87" />&nbsp;&nbsp; Retired Government Employee</Text>
            <Text style={{marginTop: 10}} ><MaterialCommunityIcons name="map-marker-outline" size={15} color="#777f87" />&nbsp;&nbsp; House </Text>
            <Text style={{marginTop: 10}} ><MaterialCommunityIcons name="map-marker-outline" size={15} color="#777f87" />&nbsp;&nbsp; 02</Text>
            <Text style={{marginTop: 10}} ><MaterialCommunityIcons name="map-marker-outline" size={15} color="#777f87" />&nbsp;&nbsp; 01</Text>
        </View>

    </View>
    </ScrollView>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center', 
    height: PixelRatio.getPixelSizeForLayoutSize(140), 
    width: '100%'
  },
  headings : {
        marginTop : 12,
        borderBottomColor: '#b7afaf',
        borderBottomWidth: 1, 
  },
  headingText : {
      color : "#777f87",
      fontWeight: 'bold',
      fontSize: 16
  },
  preferencesPage: {
    height: '90%',
    margin: 10,
  },
}) 