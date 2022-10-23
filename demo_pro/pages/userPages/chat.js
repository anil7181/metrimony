/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView} from 'react-native';
const logo = require('../../assets/images/userprofile.jpg');

 
export default function Chat({navigation}) {

    return(
    <ScrollView>
    <View>

    <View style={styles.eachChat}>
      <View style={{flex: 0.18 }} >
        <Image
            style={styles.logo}
            source={logo}
          /> 
      </View> 
      <View style={{flex: 0.65 }} >
      <Text> <View><Text style={styles.userName}>Rocky</Text>  
      <Text style={styles.chatMessage}> Hiii how are you dude...</Text></View>
      </Text> 
      </View> 
      <View style={{flex: 0.17 }} >
      <Text style={styles.rightSideData}>
        <View>
            <Text style={styles.chatTime}>6:16PM</Text>
        </View>
        <View style={styles.chatCount}>
            <Text style={styles.unreadMessageCount}>8</Text>
        </View>  &nbsp;
      </Text>
      </View>
    </View>

    
    <View style={styles.eachChat}>
      <View style={{flex: 0.18 }} >
        <Image
            style={styles.logo}
            source={logo}
          /> 
      </View> 
      <View style={{flex: 0.65 }} >
      <Text> <View><Text style={styles.userName}>Rocky</Text>  
      <Text style={styles.chatMessage}> Good , nd You!</Text></View>
      </Text> 
      </View> 
      <View style={{flex: 0.17 }} >
      <Text style={styles.rightSideData}>
        <View>
            <Text style={styles.chatTime}>10:15AM</Text>
        </View>
        <View style={styles.chatCount}>
            <Text style={styles.unreadMessageCount}>8</Text>
        </View>  &nbsp;
      </Text>
      </View>
    </View>

    
    <View style={styles.eachChat}>
      <View style={{flex: 0.18 }} >
        <Image
            style={styles.logo}
            source={logo}
          /> 
      </View> 
      <View style={{flex: 0.65 }} >
      <Text> <View><Text style={styles.userName}>Rocky</Text>  
      <Text style={styles.chatMessage}> hii,</Text></View>
      </Text> 
      </View> 
      <View style={{flex: 0.17 }} >
      <Text style={styles.rightSideData}>
        <View>
            <Text style={styles.chatTime}>Yesterday</Text>
        </View> 
      </Text>
      </View>
    </View>

    
    <View style={styles.eachChat}>
      <View style={{flex: 0.18 }} >
        <Image
            style={styles.logo}
            source={logo}
          /> 
      </View> 
      <View style={{flex: 0.65 }} >
      <Text> <View><Text style={styles.userName}>Rocky</Text>  
      <Text style={styles.chatMessage}> what?</Text></View>
      </Text> 
      </View> 
      <View style={{flex: 0.17 }} >
      <Text style={styles.rightSideData}>
        <View>
            <Text style={styles.chatTime}>Yesterday</Text>
        </View> 
      </Text>
      </View>
    </View>

    
    <View style={styles.eachChat}>
      <View style={{flex: 0.18 }} >
        <Image
            style={styles.logo}
            source={logo}
          /> 
      </View> 
      <View style={{flex: 0.65 }} >
      <Text> <View><Text style={styles.userName}>Rocky</Text>  
      <Text style={styles.chatMessage}> ok.</Text></View>
      </Text> 
      </View> 
      <View style={{flex: 0.17 }} >
      <Text style={styles.rightSideData}>
        <View>
            <Text style={styles.chatTime}>Yesterday</Text>
        </View>
        <View style={styles.chatCount}>
            <Text style={styles.unreadMessageCount}>4</Text>
        </View>  &nbsp;
      </Text>
      </View>
    </View>

    
    <View style={styles.eachChat}>
      <View style={{flex: 0.18 }} >
        <Image
            style={styles.logo}
            source={logo}
          /> 
      </View> 
      <View style={{flex: 0.65 }} >
      <Text> <View><Text style={styles.userName}>Rocky</Text>  
      <Text style={styles.chatMessage}>Say..</Text></View>
      </Text> 
      </View> 
      <View style={{flex: 0.17 }} >
      <Text style={styles.rightSideData}>
        <View>
            <Text style={styles.chatTime}>08/12/2022</Text>
        </View> 
      </Text>
      </View>
    </View>

    
    <View style={styles.eachChat}>
      <View style={{flex: 0.18 }} >
        <Image
            style={styles.logo}
            source={logo}
          /> 
      </View> 
      <View style={{flex: 0.55 }} >
      <Text> <View><Text style={styles.userName}>Rocky</Text>  
      <Text style={styles.chatMessage}>Yeah!</Text></View>
      </Text> 
      </View> 
      <View style={{flex: 0.27 }} >
      <Text style={styles.rightSideData}>
        <View>
            <Text style={styles.chatTime}>01/01/2022</Text>
        </View> 
      </Text>
      </View>
    </View>
 
    </View>
    </ScrollView>
    )

}

const styles = StyleSheet.create({ 
      chatCount : { 
            backgroundColor: 'green',
            borderRadius: 20,
            width: 22,
            height: 22, 
            marginTop: -15
      },   
      logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50, 
        height: 50, 
        borderRadius: 50
      },
      eachChat :{
        flexDirection: "row",
        height: 80, 
        paddingHorizontal: 10,
        paddingVertical: 10
      },
      unreadMessageCount : {
          padding: 1,
          textAlign: 'center',
          color: 'white'
        },
        userName : {
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 3
        },
    chatTime : {
        textAlign: 'right',
        marginBottom: 5
    },
    chatMessage : {
        marginTop: 7
    },
    rightSideData : {
        textAlign: 'right'
    }
      
})