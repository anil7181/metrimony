/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState} from 'react';
import { StyleSheet, Text, View,Image,TextInput , Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
const logo = require('../assets/images/download.jpg');
import { useForm, Controller } from 'react-hook-form';   

 
export default function Login({ navigation }) {

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  
  const onSubmit = () => {
    navigation.navigate('ForYou');
  } 

  const onSubmits = () => { 
    navigation.navigate('Register');
  } 

  const { register, setValue, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });
    return ( 
    <View style={styles.container}> 
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
        >
          <Image
            style={styles.logo}
            source={logo}
          />
        </TouchableOpacity>
        <Text style={styles.foryou}>ForYou </Text>
        <Text style={styles.matrimony}>Matrimony</Text>

        <View style={{width: '80%'}}>
          <Text style={styles.label}>Email</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="email"
            rules={{ required: true }}
          />
          <Text style={styles.label}>Mobile Number</Text>
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="mobile_no"
            rules={{ required: true }}
          />
 

         <Text style={styles.label}>I accept <Text style={styles.termsCondition}> Terms & conditions </Text> </Text>
 
            <Button color="#02a789"
              style={styles.buttonInner} 
              title="Next"
              onPress={()=>onSubmit()}
            />  
          
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </View>
        
        <Text style={styles.createNewAccount} onPress={()=>onSubmits()}>Create New Account</Text>
 
    </View>
    )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
    marginTop: 35
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 220,
    height: 150,
  },
  foryou :{
    color: '#ec6a6a',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  matrimony : {
    color: '#a16262',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  label: {
    color: 'black',
    margin: 10,
    marginTop: 20,
    marginLeft: 0,
    fontSize: 12,
    fontWeight: "500"
  }, 
  input: {
    backgroundColor: 'white',
    borderColor: '#b7afaf',
    borderWidth: 1, 
    height: 40, 
    padding: 10,
    borderRadius: 4,
  },
  button: {  
    color: 'white',
    height: 35,
    backgroundColor: '#030807',
    borderRadius: 4,  
    marginBottom: 20
  }, 
  buttonInner: {
    color: 'black',
  },
  createNewAccount : {
    color: 'green',
    fontSize: 18,
    marginTop: 30
  },
  forgotPassword : {
    color: 'green',
    fontSize: 15,
    marginTop: 30,
    textAlign: 'right'
  },
  termsCondition : {
    color: 'green',
    fontSize: 15,
    marginTop: 30, 
  },
  checkbox: {
    alignSelf: "center",
  }
})