/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button, Alert, ScrollView} from 'react-native';
import { useForm, Controller } from 'react-hook-form'; 
import StepIndicator from 'react-native-step-indicator';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import {mainStyle} from '../pages/styles/mainStyles'

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
 
export default function Register({ navigation }) {

  const [currentPosition, setCurrentPosition] = useState(0) 
  
  const [currentPage, setCurrentPage] = useState("Personl Information") 
  const [pageHeader, setPageHeader] = useState("New Account")

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

    console.log(data);

    let current_pos = data + 1; 
    let pagehead = pageHeader; 
  
    setCurrentPosition(current_pos) 
  
    if(current_pos === 0){
      pagehead = "New Account";
    }
    else if(current_pos === 1){
      pagehead = "Basic Information";
    }
    else if(current_pos === 2){
      pagehead = "Religious Information";
    }
    else if(current_pos === 3){
      pagehead = "Horoscope Information";
    }
    else if(current_pos === 4){
      pagehead = "Professional Information";
    }
    else if(current_pos === 5){
      pagehead = "Location Information";
    } 
    else if(current_pos === 6){
      pagehead = "Family Information";
    } 
    else {
      navigation.navigate('Preferances');
    }    

    console.log(pagehead);

    setPageHeader(pagehead)
    setCurrentPosition(current_pos)
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
        <View style={styles.registerPage}>
        {
          currentPosition === 0
          ?
          <ScrollView>
          <Text style={mainStyle.label}>Email</Text>
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
            name="email"
            rules={{ required: true }}
          />
          <Text style={mainStyle.label}>Mobile Number</Text>
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
            name="mobile_no"
            rules={{ required: true }}
          /> 
     
        <Text style={mainStyle.label}>Password</Text>
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
            name="password"
            rules={{ required: true }}
          />
     
        <Text style={mainStyle.label}>Confirm Password</Text>
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
            name="confirm_password"
            rules={{ required: true }}
          /> 
     
          </ScrollView>
          :
          currentPosition === 1
          ?
          <ScrollView>
          <Text style={mainStyle.label}>Created For</Text>
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
          <Text style={mainStyle.label}>First name</Text>
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
     
        <Text style={mainStyle.label}>Last name</Text>
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
          <Text style={mainStyle.label}>Gender</Text>
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

          
        <Text style={mainStyle.label}>Date Of Birth</Text>
        <Controller
            control={control}
            render={() => (
              
        <TouchableOpacity
           onPress={showDatepicker}
        >
              <TextInput
                style={mainStyle.input}
                label='Shift Starts At'
                placeholder={"01/01/2019 - 09:00 AM"}
                editable={false} 
              />
              </TouchableOpacity>
            )}
            name="lastName"
            rules={{ required: true }}
          />   
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )} 

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
     
          </ScrollView>
          :
          currentPosition === 2
          ?
          <ScrollView>
          <Text style={mainStyle.label}>Religion</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <View style={mainStyle.select}>
  <Picker style={mainStyle.pickerStyle}>
	<Picker.Item label="select" value="" /> 
  </Picker>
</View>
            )}
            name="firstName"
            rules={{ required: true }}
          />
          <Text style={mainStyle.label}>Caste</Text>
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
     
        <Text style={mainStyle.label}>Sub Caste</Text>
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
          :
          currentPosition === 3
          ?
          <ScrollView>
          <Text style={mainStyle.label}>Time</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TouchableOpacity
           onPress={showDatepicker}
        >
              <TextInput
                style={mainStyle.input}
                label='Shift Starts At'
                placeholder={"01/01/2019 - 09:00 AM"}
                editable={false} 
              />
              </TouchableOpacity>
            )}
            name="firstName"
            rules={{ required: true }}
          />
          <Text style={mainStyle.label}>Week Day</Text>
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
     
        <Text style={mainStyle.label}>Zodiac</Text>
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
     
        <Text style={mainStyle.label}>Star</Text>
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
          : 
          currentPosition === 4
          ?
          <ScrollView>
          <Text style={mainStyle.label}>Education Category</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <View style={mainStyle.select}>
  <Picker style={mainStyle.pickerStyle}>
	<Picker.Item label="select" value="" /> 
  </Picker>
</View>
            )}
            name="firstName"
            rules={{ required: true }}
          />
          <Text style={mainStyle.label}>College / Institution</Text>
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
     
        <Text style={mainStyle.label}>Occupation</Text>
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
     
        <Text style={mainStyle.label}>Organization</Text>
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
          
        <Text style={mainStyle.label}>Employed In</Text>
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

        <Text style={mainStyle.label}>Annual income</Text>
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
          :
          currentPosition === 5
          ?
          <ScrollView>
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
            name="firstName"
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
     
          </ScrollView>
          :
          currentPosition === 6
          ?
          <ScrollView>
          <Text style={mainStyle.label}>Father Occupation</Text>
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
            name="firstName"
            rules={{ required: true }}
          />
          <Text style={mainStyle.label}>Mother Occupation</Text>
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
     
        <Text style={mainStyle.label}>Brother(s)</Text>
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
     
        <Text style={mainStyle.label}>Brother(s) Married</Text>
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

        <Text style={mainStyle.label}>Sister(s)</Text>
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

        <Text style={mainStyle.label}>Sister(s) Married</Text>
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
          : 
          currentPosition === 7
          ?
          <ScrollView>
          <Text style={mainStyle.label}>Email</Text>
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
            name="firstName"
            rules={{ required: true }}
          />
          <Text style={mainStyle.label}>Mobile Number</Text>
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
     
        <Text style={mainStyle.label}>Password</Text>
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
     
        <Text style={mainStyle.label}>Confirm Password</Text>
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
     
          </ScrollView>
          :
          currentPosition === 8
          ?
          <ScrollView>
          <Text style={mainStyle.label}>Email</Text>
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
            name="firstName"
            rules={{ required: true }}
          />
          <Text style={mainStyle.label}>Mobile Number</Text>
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
     
        <Text style={mainStyle.label}>Password</Text>
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
     
        <Text style={mainStyle.label}>Confirm Password</Text>
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
     
          </ScrollView>
          :
          null
      } 

        </View>
        <View style={styles.registerPageFooter}> 
        <View style={mainStyle.button}>
              <Button color="#02a789"
                style={mainStyle.buttonInner} 
                title="Next"
                onPress={()=>onSubmit(currentPosition)}
              /> 
          </View>

          <View >
          <Text style={styles.page_name}>Personl Information</Text>
          </View>
      
          <StepIndicator   
            stepCount={7}
            currentPosition={currentPosition}
            customStyles={thirdIndicatorStyles}
          /> 
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  registerPage: {
    height: '75%',
    margin: 10,
  },
  registerPageFooter : {
    height: '18%',
    margin: 10,
  },
  page_name: {  
    color: 'black',
    fontSize: 13,
    fontWeight: "400", 
    textAlign: "center",
    margin: 10
  },

});
