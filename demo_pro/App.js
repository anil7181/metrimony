/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login  from './pages/login';
import Register  from './pages/register';
import Preferances from './pages/preferences';


import PersonalInfo from './pages/edit/personInfo';
import ReligionInfo from './pages/edit/religionInfo';
import HoroscopeInfo from './pages/edit/horoscopeInfo';
import ProfessionalInfo from './pages/edit/professionalInfo';
import LocationInfo from './pages/edit/locationInfo';
import FamilyInfo from './pages/edit/familyInfo';

import BasicPreferences from './pages/edit/basicPreferences';
import HoroscopePreferences from './pages/edit/horoscopePreferences';
import ProfessionalPreferences from './pages/edit/professionalPreferences';
import LocationPreferences from './pages/edit/locationPreferences';
import AccountEdit from './pages/edit/accountEdit';
import ProfileVerification from './pages/userPages/profileVerification'; 
import Profile from './pages/userPages/profile'; 
import VerifyWith from './pages/userPages/verifyWith'; 
import ForYou from './pages/userPages/forYou'; 


const Stack = createNativeStackNavigator();

export default function App ()  {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerTitle: 'login'}}
        /> 

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerTitle: 'register'}}
        />

      <Stack.Screen
          name="Preferances"
          component={Preferances}
          options={{ headerTitle: 'preferances'}}
        />

        
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{ headerTitle: 'PersonalInfo'}}
        />
        
        <Stack.Screen
          name="ReligionInfo"
          component={ReligionInfo}
          options={{ headerTitle: 'ReligionInfo'}}
        />
        
        <Stack.Screen
          name="HoroscopeInfo"
          component={HoroscopeInfo}
          options={{ headerTitle: 'HoroscopeInfo'}}
        />
        
        <Stack.Screen
          name="ProfessionalInfo"
          component={ProfessionalInfo}
          options={{ headerTitle: 'ProfessionalInfo'}}
        />
        
        <Stack.Screen
          name="LocationInfo"
          component={LocationInfo}
          options={{ headerTitle: 'LocationInfo'}}
        />
 
        <Stack.Screen
          name="FamilyInfo"
          component={FamilyInfo}
          options={{ headerTitle: 'FamilyInfo'}}
        />
        
        <Stack.Screen
          name="BasicPreferences"
          component={BasicPreferences}
          options={{ headerTitle: 'BasicPreferences'}}
        />
        
        <Stack.Screen
          name="HoroscopePreferences"
          component={HoroscopePreferences}
          options={{ headerTitle: 'HoroscopePreferences'}}
        />
        
        <Stack.Screen
          name="ProfessionalPreferences"
          component={ProfessionalPreferences}
          options={{ headerTitle: 'ProfessionalPreferences'}}
        />
        
        <Stack.Screen
          name="LocationPreferences"
          component={LocationPreferences}
          options={{ headerTitle: 'LocationPreferences'}}
        />
        
        <Stack.Screen
          name="AccountEdit"
          component={AccountEdit}
          options={{ headerTitle: 'AccountEdit'}}
        />
        
        <Stack.Screen
          name="ProfileVerification"
          component={ProfileVerification}
          options={{ headerTitle: 'ProfileVerification'}}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerTitle: 'Profile'}}
        />

        <Stack.Screen
          name="VerifyWith"
          component={VerifyWith}
          options={{
            headerTitle: "VerifyWith" 
          }}
        />

        <Stack.Screen
          name="ForYou"
          component={ForYou}
          options={{
            headerTitle: "ForYou" 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};