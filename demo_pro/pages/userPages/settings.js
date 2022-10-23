/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { StyleSheet, Text, View,Image,TextInput , Button, ScrollView } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
 
export default function Settings({ navigation }) {

  const onSubmit = (url) => { 
    navigation.navigate(url)
  } 

    return(
      <ScrollView>
      <View style={{padding: 10}}>
        <View style={{flexDirection: "row",flex: 1, borderBottomColor: 'black', borderBottomWidth: 1 }}>
          <View style={{flex: 0.25 }}>
          <FontAwesome name="edit" style={styles.mainIcons}  color="#777f87" />
          </View>
          <View style={{flex: 0.50 }}>
          <Text style={styles.mainHeader}>Edit Profile</Text>
          </View> 
        </View>

        <View style={{flexDirection: "row",flex: 1, marginVertical: 10}}>
        <View style={{flex: 0.1 }}>
          </View>
          <View style={{flex: 0.80 }}>
          <Text style={styles.editOption} onPress={()=>onSubmit('PersonalInfo')}>Edit Personal Information</Text>
          </View> 
          <View style={{flex: 0.1 }}>
          <SimpleLineIcons name="pencil" style={styles.editOptionIcons}  color="#777f87" />
          </View>
        </View>

        
        <View style={{flexDirection: "row",flex: 1, marginVertical: 10}}>
        <View style={{flex: 0.1 }}>
          </View>
          <View style={{flex: 0.80 }}>
          <Text style={styles.editOption} onPress={()=>onSubmit('HoroscopeInfo')}>Edit Horoscope Information</Text>
          </View> 
          <View style={{flex: 0.1 }}>
          <SimpleLineIcons name="pencil" style={styles.editOptionIcons}  color="#777f87" />
          </View>
        </View>

        
        <View style={{flexDirection: "row",flex: 1, marginVertical: 10}}>
        <View style={{flex: 0.1 }}>
          </View>
          <View style={{flex: 0.80 }}>
          <Text style={styles.editOption} onPress={()=>onSubmit('ProfessionalInfo')}>Edit Professional Information</Text>
          </View> 
          <View style={{flex: 0.1 }}>
          <SimpleLineIcons name="pencil" style={styles.editOptionIcons}  color="#777f87" />
          </View>
        </View>

        
        <View style={{flexDirection: "row",flex: 1, marginVertical: 10}}>
        <View style={{flex: 0.1 }}>
          </View>
          <View style={{flex: 0.80 }}>
          <Text style={styles.editOption} onPress={()=>onSubmit('LocationInfo')}>Edit Location Information</Text>
          </View> 
          <View style={{flex: 0.1 }}>
          <SimpleLineIcons name="pencil" style={styles.editOptionIcons}  color="#777f87" />
          </View>
        </View>

        
        <View style={{flexDirection: "row",flex: 1, marginVertical: 10}}>
        <View style={{flex: 0.1 }}>
          </View>
          <View style={{flex: 0.80 }}>
          <Text style={styles.editOption} onPress={()=>onSubmit('FamilyInfo')}>Edit Family Information</Text>
          </View> 
          <View style={{flex: 0.1 }}>
          <SimpleLineIcons name="pencil" style={styles.editOptionIcons}  color="#777f87" />
          </View>
        </View>
 
      </View>

      <View style={{padding: 10}}>
        <View style={{flexDirection: "row",flex: 1, borderBottomColor: 'black', borderBottomWidth: 1 }}>
          <View style={{flex: 0.25 }}>
          <FontAwesome5 name="user-edit" style={styles.mainIcons}  color="#777f87" />
          </View>
          <View style={{flex: 0.50 }}>
          <Text style={styles.mainHeader}>Edit Preferences</Text>
          </View> 
        </View>

        <View style={{flexDirection: "row",flex: 1, marginVertical: 10}}>
        <View style={{flex: 0.1 }}>
          </View>
          <View style={{flex: 0.80 }}>
          <Text style={styles.editOption} onPress={()=>onSubmit('BasicPreferences')}>Edit Basic Preferences</Text>
          </View> 
          <View style={{flex: 0.1 }}>
          <SimpleLineIcons name="pencil" style={styles.editOptionIcons}  color="#777f87" />
          </View>
        </View>

        
        <View style={{flexDirection: "row",flex: 1, marginVertical: 10}}>
        <View style={{flex: 0.1 }}>
          </View>
          <View style={{flex: 0.80 }}>
          <Text style={styles.editOption} onPress={()=>onSubmit('HoroscopePreferences')}>Edit Horoscope Preferences</Text>
          </View> 
          <View style={{flex: 0.1 }}>
          <SimpleLineIcons name="pencil" style={styles.editOptionIcons}  color="#777f87" />
          </View>
        </View>

        
        <View style={{flexDirection: "row",flex: 1, marginVertical: 10}}>
        <View style={{flex: 0.1 }}>
          </View>
          <View style={{flex: 0.80 }}>
          <Text style={styles.editOption} onPress={()=>onSubmit('ProfessionalPreferences')}>Edit Professional Preferences</Text>
          </View> 
          <View style={{flex: 0.1 }}>
          <SimpleLineIcons name="pencil" style={styles.editOptionIcons}  color="#777f87" />
          </View>
        </View>

        
        <View style={{flexDirection: "row",flex: 1, marginVertical: 10}}>
        <View style={{flex: 0.1 }}>
          </View>
          <View style={{flex: 0.80 }}>
          <Text style={styles.editOption} onPress={()=>onSubmit('LocationPreferences')}>Edit Location Preferences</Text>
          </View> 
          <View style={{flex: 0.1 }}>
          <SimpleLineIcons name="pencil" style={styles.editOptionIcons}  color="#777f87" />
          </View>
        </View> 
 
      </View>

      <View style={{padding: 10}}>
        <View style={{flexDirection: "row",flex: 1, borderBottomColor: 'black', borderBottomWidth: 1 }}>
          <View style={{flex: 0.25 }}>
          <Feather  name="user" style={styles.mainIcons}  color="#777f87" />
          </View>
          <View style={{flex: 0.50 }}>
          <Text style={styles.mainHeader}>Account</Text>
          </View> 
        </View>

        <View style={{flexDirection: "row",flex: 1, marginVertical: 10}}>
        <View style={{flex: 0.1 }}>
          </View>
          <View style={{flex: 0.80 }}>
          <Text style={styles.editOption} onPress={()=>onSubmit('AccountEdit')}>Edit Account</Text>
          </View> 
          <View style={{flex: 0.1 }}>
          <SimpleLineIcons name="pencil" style={styles.editOptionIcons}  color="#777f87" />
          </View>
        </View> 
      </View>

    </ScrollView>
    )

}

const styles = StyleSheet.create({ 
  mainIcons : {
      fontSize: 25
  },
  mainHeader : {
    textAlign: 'center',
    fontSize: 18,
    color: 'green'
  },
  editOption : { 
    textAlign: 'center',
    fontSize: 16,
    color: 'black'
  },
  editOptionIcons : {
    fontSize: 18
  }
})