/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import { useForm } from 'react-hook-form';  
import {Picker} from '@react-native-picker/picker'; 
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Tab, TabView } from 'react-native-elements'; 
import {mainStyle} from '../../pages/styles/mainStyles';   
 
export default function ProfileVerification({ navigation }) { 
    const [index, setIndex] = React.useState(0);

  const [pageHeader, setPageHeader] = useState("Profile Verification")

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
    console.log("fdssd")
    navigation.navigate('Register')
  };

  const onSubmits = () => {  
    console.log("fdssd")
    navigation.navigate('VerifyWith')
  };

  const onSubmitss = () => {  
    console.log("fdssd")
    navigation.navigate('Profile')
  };

  const onSubmitsss = () => {  
    console.log("fdssd")
    navigation.navigate('ForYou')
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

    <View style={styles.firstBlock}>
            <Text style={styles.ptext}>Your Profile is pending for Verification</Text>
    </View>
    
    <View style={styles.secondBlock}>
    <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'green',
          height: 3,
        }} 
      >
        <Tab.Item
          title="ID Verification"
          titleStyle={{ fontSize: 11, color: 'black' }} 
        />
        <Tab.Item
          title="Education Verification"
          titleStyle={{ fontSize: 11, color: 'black' }} 
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <View>
              <View style={styles.warningblock}>
               <Text  onPress={()=>onSubmits()}><AntDesign name="closecircle" size={15} color="pink" /> Your document has been rejected since it is not valid. try again</Text>
              </View>
              <View style={styles.docselecttext}>
                  <Text >Select one of the below document to verify your identity information. 
                      The documents choosen by you will not be shown to other member
                  </Text>
                  <View style={mainStyle.select}> 
                  <Picker
                    style={mainStyle.pickerStyle} >
                    <Picker.Item label="Choose Document" value="" /> 
                    <Picker.Item label="Voter ID" value="" /> 
                    <Picker.Item label="Driving Licence" value="" /> 
                    </Picker>
                    </View>
              </View>
          </View>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
            <View>
            <View style={styles.educationblock}>
                <Text style={styles.educationblockText}>Education qualification mentioned in your profile: BE/B.Tech</Text>
                <Text> </Text>
                <Text style={styles.educationblockText}>Upload your education certificate and help us verify your educational qualification.The certificate uplodaed by you will not be shown to other member.</Text>

                <Text style={styles.educationblockButton} onPress={()=>onSubmitsss()}>Upload from gallery</Text> 
                <Text style={styles.educationblockButton}  onPress={()=>onSubmitss()}>Capture new image</Text>
            </View>

            </View>
          {/* <Text>Favorite</Text> */}
        </TabView.Item> 
      </TabView>
    </View>

    </View>

    
  );
};
const styles = StyleSheet.create({
  firstBlock : {
      backgroundColor: 'green', 
      height : '30%', 
      justifyContent: 'center'
  },
  ptext : {
    justifyContent: 'center',
    fontSize: 20,
    marginLeft: 13,
    color: 'white'
  },
  secondBlock : {
    backgroundColor: 'white', 
    height : '70%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop : -40
  },
  warningblock : {
      borderColor : 'black',
      borderWidth : 1,
      margin: 20,
      padding: 10
  },
  docselecttext : { 
      marginLeft: 20,
      marginRight: 20
  },
  educationblock : {  
    marginTop: 20,
    paddingLeft: 20, 
    paddingRight: 20
  },
  educationblockText : {
    fontWeight: "700",  
  },
  educationblockButton : {
    marginTop: 20,
    borderColor : 'pink',
    padding: 10,
    borderRadius: 5,
    borderWidth : 1,
    color: "pink",
    width: 150
  }
}) 