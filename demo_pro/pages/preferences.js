/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button, Alert, ScrollView} from 'react-native';
import { useForm, Controller } from 'react-hook-form'; 
import StepIndicator from 'react-native-step-indicator';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker'; 
import {mainStyle} from '../pages/styles/mainStyles';

const thirdIndicatorStyles = {
  stepIndicatorSize: 16,
  currentStepIndicatorSize: 16,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#f44336',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#f44336',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#f44336',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#f44336',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#f44336',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#f44336',
};
 
export default function Preferances({ navigation }) {

  const [currentPosition, setCurrentPosition] = useState(0) 
  
  const [currentPage, setCurrentPage] = useState("Personl Information") 
  const [pageHeader, setPageHeader] = useState("Basic Preferences")

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
 
  const onSubmit = (data) => { 

    let current_pos = data + 1; 
    let pagehead = pageHeader; 
  
    setCurrentPosition(current_pos) 
  
    if(current_pos === 0){
      pagehead = "Basic Preferences";
    }
    else if(current_pos === 1){
      pagehead = "Horoscope Preferences";
    }
    else if(current_pos === 2){
      pagehead = "Professional Preferences";
    }
    else if(current_pos === 3){
      pagehead = "Location Preferences";
    } 
    else {
      navigation.navigate('ProfileVerification')
      pagehead = "";
    }    

    setPageHeader(pagehead)
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
    <View style={mainStyle.header} >
      <Text style={mainStyle.headerText}>{pageHeader}</Text>
    </View>

    <View style={styles.preferencesPage}>
    <ScrollView>
    {
          currentPosition === 0
          ?
          <View>
           <Text style={mainStyle.label}>Age</Text>
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
         <Text style={mainStyle.label}>Height</Text>
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
          <Text style={mainStyle.label}>Marital Status</Text>
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
          <Text style={mainStyle.label}>Mother Tongue</Text>
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
          <Text style={mainStyle.label}>Physical Status</Text>
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
     
          </View>
          :
          currentPosition === 1
          ?
          <View>
          <Text style={mainStyle.label}>Zodiac</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={mainStyle.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="createdfor"
            rules={{ required: true }}
          />
          <Text style={mainStyle.label}>Star</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={mainStyle.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="lastName"
            rules={{ required: true }}
          />  
     
          </View>
          :
          currentPosition === 2
          ?
          <View>
          <Text style={mainStyle.label}>Education</Text>
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
         <Text style={mainStyle.label}>Occupation</Text>
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
          <Text style={mainStyle.label}>Employee In</Text>
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
          <Text style={mainStyle.label}>Currency</Text>
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
          <Text style={mainStyle.label}>Annual Income</Text>
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
     
          </View>
          :
          currentPosition === 3
          ?
          <View>
         <Text style={mainStyle.label}>Country</Text>
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
         <Text style={mainStyle.label}>State</Text>
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
          <Text style={mainStyle.label}>District</Text>
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
          <Text style={mainStyle.label}>Taluq</Text>
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
          <Text style={mainStyle.label}>City/Village</Text>
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
     
          </View>
          :  
          null
      } 
      </ScrollView>
    </View>

    <View style={styles.preferencePageFooter}>
        <View style={mainStyle.button}>
          <Button color="#02a789"
            style={mainStyle.buttonInner} 
            title="Next"
            onPress={()=>onSubmit(currentPosition)}
          /> 
        </View>

        <View >
        <Text style={styles.page_name}>Preferances</Text>
        </View>

        <StepIndicator   
            stepCount={4}
            currentPosition={currentPosition}
            customStyles={thirdIndicatorStyles}
          /> 

    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  preferencesPage: {
    height: '75%',
    margin: 10,
  },
  preferencePageFooter: {
    height: '18%',
    margin: 10,
  },
  page_name: {
    color: 'black',
    fontSize: 13,
    fontWeight: "400", 
    textAlign: "center",
    margin: 10
  }
});
