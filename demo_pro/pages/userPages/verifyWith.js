/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,ScrollView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { mainStyle } from '../../pages/styles/mainStyles';
import { useForm, Controller } from 'react-hook-form';  
 
export default function VerifyWith({ navigation }) {

    const { register, setValue, control, reset, formState: { errors } } = useForm({
        defaultValues: {
          firstName: '',
          lastName: ''
        }
      });
 
  return ( 
    <View style={mainStyle.mainScreen}>
    <View style={mainStyle.header} >
    <View style={styles.headerBlock}>
            <View style={{ flex: 0.25}}>
                <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" />
            </View>

            <View style={{ flex: 0.75}}>
                <Text style={styles.headingText}>Verify with Driving Licence</Text>
            </View> 
        </View>
    </View>

    <View style={styles.preferencesPage}>
    <ScrollView>
    <Text style={styles.inputlabel}>Enter your Driving Licence Number</Text>
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
          
            <Text style={styles.verifyButton}>Verify</Text>

            <Text style={styles.warninfo}>Don't remember Driving Licence Number uplod or take photo of your Driving Licence instead</Text>

            <View style={styles.blocks}>
                <View style={styles.blockone}> 
                        <Feather name="camera"  style={{marginLeft: 25}} size={50} color="black" />
                        <Text style={styles.textBlock}>Take Photo</Text> 
                    
                </View> 

                <View style={styles.blocksecond}> 
                        <MaterialCommunityIcons name="image-multiple-outline" style={{marginLeft: 25}} size={50} color="black" />
                        <Text style={styles.gallerytextBlock}>Gallery</Text> 
                </View> 
            </View>
    </ScrollView>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        display: 'flex', 
        height: '100%', 
        marginTop: 35
      },
    backButton : {
        justifyContent: 'flex-start'
    },
    headingText : {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    headerBlock: { 
        flexDirection: 'row',
        paddingLeft: 15,
        marginTop: 10
    },
    inputlabel:{
        color: 'black',
        margin: 10,
        marginTop: 20,
        marginLeft: 0,
        fontSize: 12,
        fontWeight: "bold"
    },
    verifyButton: {
        marginTop: 15, 
        textAlign: 'center',
        backgroundColor: '#ebbbaa',
        borderColor: '#b7afaf',
        borderWidth: 1, 
        width: 90,
        padding: 8,
        borderRadius: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 60
    },
    warninfo: {
            fontWeight: 'bold',
            fontSize: 15,
            borderColor: '#b7afaf',
            borderTopWidth: 1, 
            paddingTop: 10
    },
    textBlock : {
        fontWeight: '500',
        fontSize: 15, 
        color: 'black',
        marginLeft: 14
    },
    gallerytextBlock : {
        fontWeight: '500',
        fontSize: 15, 
        color: 'black',
        marginLeft: 28
    },
    blocks: {
        flexDirection: 'row', 
        marginTop: 10
    },
    blockone: { 
        flex: 0.4, 
        borderColor: 'black',
        borderWidth: 1, 
        padding: 10,
        borderRadius: 10
    },
    blocksecond :{
        flex: 0.4,
        marginLeft: 30,
        borderColor: 'black',
        borderWidth: 1, 
        padding: 10,
        borderRadius: 10, 
    },
    preferencesPage: {
        height: '90%',
        margin: 10,
      },
});
 