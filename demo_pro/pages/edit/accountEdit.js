/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button, Alert, ScrollView} from 'react-native';
import { useForm, Controller } from 'react-hook-form';  
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {mainStyle} from '../../pages/styles/mainStyles'

 
export default function AccountEdit({ navigation }) { 

  const [pageHeader, setPageHeader] = useState("Edit Account")

  const [selectedLanguage, setSelectedLanguage] = useState();
  
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
 
  const { register, setValue, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  }); 
 
  const onSubmit = () => {  
    navigation.navigate('ProfileVerification')
  };


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    console.log(currentMode);
    console.log(show);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
 

  return (
    <View style={mainStyle.mainScreen}>
    <View style={mainStyle.header}>
      <Text style={mainStyle.headerText}>{pageHeader}</Text>
    </View>
    <View style={styles.accountEditPage}>
      <ScrollView> 
        <Text style={styles.warning}>Note : If you delete your profile , it cannot be restored</Text>
        <Text style={styles.label}> <AntDesign style={styles.ico} name="retweet" size={22} color="black" /> <Text > &nbsp;Change Password</Text></Text>
        <Text style={styles.label}> <AntDesign name="logout" size={22} color="black" /> &nbsp;Logout</Text>
        <Text style={styles.label}> <MaterialIcons name="delete-outline" size={24} color="black" /> &nbsp;Delete Account</Text>
      </ScrollView>
    </View>
      <View style={styles.accountEditPageFooter}> 
        <View style={mainStyle.button}>
              <Button color="#02a789"
                style={mainStyle.buttonInner} 
                title="Save"
                onPress={()=>onSubmit()}
              /> 
          </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 30, 
    marginTop: 0
  },
    label: {
    color: 'black',
    margin: 10,
    marginTop: 20,
    marginLeft: 0,
    fontSize: 20,
    fontWeight: "500"
  },
  warning : {
    color: 'red',
    fontSize : 12,
    fontWeight: "700",  
    marginTop: 10
  },
  ico : {
    marginRight: 20
  },
  accountEditPageFooter: {
    height: '10%',
    margin: 10,
  },
  accountEditPage: {
    height: '80%',
    margin: 10,
  },
})
