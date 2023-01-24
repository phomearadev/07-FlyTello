import React from 'react';
import { Pressable, Image, StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';

function CommandScreen({ route, navigation }) {

  const { MyCommand} = route.params;
  
  return (
    <View style={{ flex: 1 }}>

      <View style={styles.container1}>
       
      </View> 

      <View style={styles.container2}>
        
      </View>

      <View style={styles.container3}>
      <Text style={styles.heading1}>Command Sent</Text>
        <View style={styles.button}>
        <Text style={styles.textbox}>{MyCommand}</Text>
        </View>
      </View>

      <View style={styles.container4}>
      
      </View>

      <View style={styles.container5}>
       
      </View>

      <View style={styles.container6}>
        <Pressable
              onPress={() => 
              navigation.navigate('Fly', {
            })}>   
                <View>
                  <View style={styles.button2}>
                  <Text style={styles.button2text}> Return to Flying </Text>
                  </View>
                </View>
        </Pressable>
      </View>

    </View>
  );
}

export default CommandScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 3,
    flexDirection: "column",
    paddingTop: 10,
    backgroundColor: "white",
    alignItems: "center",
  },
  container2: {
    flex: 2,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "white",
    paddingTop: 40,
  },
  container3: {
    flex: 2,
    flexDirection: "Column",
    backgroundColor: "white",
    alignItems: "center",
    paddingLeft: 10,
  },
  container4: {
    flex: 2,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "white",
  },
  container5: {
    flex: 3,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "white",
    paddingTop: 50,
  },
  container6: {
    flex: 2,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "white",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 210,
    marginBottom: 120,
    borderRadius: 8,
    backgroundColor: 'lightgreen',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 210,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: 'grey',
  },
  button2text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button5A: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
  },
  textbox: {
    height: 50,
    width: 210,
    paddingTop: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  heading1: {
    flexDirection: "column",
    marginBottom: 10,
    alignItems: "center",
    fontSize: 14,
  },
  spacer: {
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
  },
  control1: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    width: 80,
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 25,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
  },
  controltext: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  control2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 28,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
  },
  control3: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 100,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 25,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
  },
  control4: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 170,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: 'plum',
    borderWidth: 3,
    borderColor: "darkslategrey",
    marginTop: 40,
  }
});