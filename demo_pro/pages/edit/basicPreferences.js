/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, ScrollView} from 'react-native';
import { useForm, Controller } from 'react-hook-form';  
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker'; 
import {mainStyle} from '../../pages/styles/mainStyles';
 
export default function BasicPreferences({ navigation }) { 

  const [pageHeader, setPageHeader] = useState("Edit Basic Preferences")

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
 
  const onSubmit = () => {  
    navigation.navigate('HoroscopePreferences')
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
    <View style={styles.basicPreferensePage}>
    <ScrollView>
       <Text style={styles.label}>Age</Text>
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
     <Text style={styles.label}>Height</Text>
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
      <Text style={styles.label}>Marital Status</Text>
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
      <Text style={styles.label}>Mother Tongue</Text>
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
      <Text style={styles.label}>Physical Status</Text>
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
      <View style={styles.basicPreferensePageFooter}> 
      <View style={mainStyle.button}>
              <Button color="#02a789"
                style={mainStyle.buttonInner} 
                title="Next"
                onPress={()=>onSubmit()}
              /> 
          </View>
      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
    margin: 10,
    marginTop: 20,
    marginLeft: 0,
    fontSize: 12,
    fontWeight: "500"
  },
  basicPreferensePageFooter: {
    height: '10%',
    margin: 10,
  },
  basicPreferensePage: {
    height: '80%',
    margin: 10,
  },
});
