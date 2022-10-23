/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button, Alert, ScrollView} from 'react-native';
import { useForm, Controller } from 'react-hook-form';  
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker'; 
import {mainStyle} from '../../pages/styles/mainStyles';
 
export default function HoroscopeInfo({ navigation }) { 

  const [pageHeader, setPageHeader] = useState("Edit Horoscope Info")

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

  const [formObj, setFormOnj] = useState({})

  // useEffect(()=>{
  //       constants.forms.map(e=>{
  //         console.log(e);
  //       })
  // },[])
 
  const onSubmit = () => {  
    navigation.navigate('ProfessionalInfo')
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
        <Text style={styles.label}>Time</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TouchableOpacity
           onPress={showDatepicker}
        >
              <TextInput
                style={styles.input}
                label='Shift Starts At'
                placeholder={"01/01/2019 - 09:00 AM"}
                editable={false} 
              />
              </TouchableOpacity>
            )}
            name="firstName"
            rules={{ required: true }}
          />
          <Text style={styles.label}>Week Day</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <View style={mainStyle.select}>
  <Picker style={mainStyle.pickerStyle}>
	<Picker.Item label="select" value="" /> 
  </Picker>
</View>
            )}
            name="lastName"
            rules={{ required: true }}
          /> 
     
        <Text style={styles.label}>Zodiac</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <View style={mainStyle.select}>
  <Picker style={mainStyle.pickerStyle}>
	<Picker.Item label="select" value="" /> 
  </Picker>
</View>
            )}
            name="lastName"
            rules={{ required: true }}
          />
     
        <Text style={styles.label}>Star</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <View style={mainStyle.select}>
  <Picker style={mainStyle.pickerStyle}>
	<Picker.Item label="select" value="" /> 
  </Picker>
</View>
            )}
            name="lastName"
            rules={{ required: true }}
          />
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
  header: { 
    backgroundColor: '#e1dede' , 
    borderRadius: 5, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: 75,
    shadowOpacity: 0.27,
    shadowRadius: 4.65, 
    elevation: 6, 
    textAlign: "center", 
    justifyContent: 'center',
    fontWeight: "500"
  },
  headerText: {
    color: 'black',
    justifyContent: 'center', 
    marginTop: 30,
    textAlign: "center", 
    fontSize: 18,
    fontWeight: "500"
  },
  label: {
    color: 'black',
    margin: 10,
    marginTop: 20,
    marginLeft: 0,
    fontSize: 12,
    fontWeight: "500"
  },
  button: { 
    marginTop: "35%",
    color: 'white',
    height: 35, 
    backgroundColor: '#030807',
    borderRadius: 4,  
    marginBottom: 20
  }, 
  buttonInner: {
    color: 'black',
  },
  page_name: {  
    color: 'black',
    fontSize: 13,
    fontWeight: "400", 
    textAlign: "center",
    marginBottom: 10
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#b7afaf',
    borderWidth: 1, 
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  accountEditPageFooter: {
    height: '10%',
    margin: 10,
  },
  accountEditPage: {
    height: '80%',
    margin: 10,
  },
});
