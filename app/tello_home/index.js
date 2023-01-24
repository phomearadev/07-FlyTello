import { Pressable, Image, StyleSheet, Text, View, TextInput } from 'react-native';
import { Animated } from 'react-native';
import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';


function HomeScreen({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  //console.log(input);
    const animatedA = new Animated.Value(1);
    const animatedB = new Animated.Value(1);
      const fadeInA = () => {
        Animated.timing(animatedA, {
          toValue: 0.4,
          duration: 100,
          useNativeDriver: true,
        }).start();
      };
      const fadeOutA = () => {
        Animated.timing(animatedA, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      };
      const fadeInB = () => {
        Animated.timing(animatedB, {
          toValue: 0.4,
          duration: 100,
          useNativeDriver: true,
        }).start();
      };
      const fadeOutB = () => {
        Animated.timing(animatedB, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }; 

  return (  
  <View style={{ flex: 1}}>  

    <View style={styles.container1}>
        <Image
        style={styles.tellographic}
        source={require('C:/APP/06-Tello/assets/TelloImage1.png')} />
         <Text style={styles.tellotitle}> Tello </Text>
    </View>

    <View style={styles.container2}>
      <View style={styles.box}>  
          <Text style={styles.title}> Enter IP Address:  </Text>
          <TextInput 
          style={styles.title} onChangeText={(Text) => setInput(text)}
          style={styles.title2}
          placeholder="For Example: 192.168.10.1"
          value={text}
          onChangeText={onChangeText}
          />
      </View>        
    </View>
 
    <View style={styles.container3}>
      <Text style={styles.tello3title}>TELLO APP </Text>
      <Text style={styles.tello3title2}> Fly Your Tello Drone </Text>
    </View>

    <View style={styles.container4}>
      <View style={styles.box2}>  
      <Pressable onPressIn={fadeInA} onPressOut={() => 
            navigation.navigate('Fly', {
            IPAddress: text,
          })}>
            <Animated.View
              style={{
                opacity: animatedA,
                paddingTop: 20,
                paddingBottom: 20,
                borderRadius: 10,
                backgroundColor: "darkgreen",
                borderWidth: 2,
                borderColor: "grey"
              }}
            >
              <View>
                  <Text style={styles.title3}>
                  Test IP & Start (PRESSABLE)
                  </Text>
              </View>
            </Animated.View>
          </Pressable>    

      </View>

      <View style={styles.box2}>     
        <Pressable onPressIn={fadeInB} onPressOut={() => 
            navigation.navigate('Fly', {
            IPAddress: text,
          })}>
            <Animated.View
              style={{
                opacity: animatedB,
                paddingTop: 20,
                paddingBottom: 20,
                borderRadius: 10,
                backgroundColor: "darkgreen",
                borderWidth: 2,
                borderColor: "grey"
              }}
            >
              <View>
                  <Text style={styles.title3}>
                  Test IP & Start (BUTTON)
                  </Text>
              </View>
            </Animated.View>
          </Pressable>    
      </View>
    </View>

  </View>
  );

}
  
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 40,
    backgroundColor: "white",
    alignItems: "center",
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 35,
    backgroundColor: "white",
  },
  container3: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  container4: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 35,
    backgroundColor: "white",
  },
  box: {
    flex: 1,
    marginTop: 40,
    marginBottom: 40,
    height: 20,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "grey"
  },
  box2: {
    flex: 1,
    
    
    height: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "lightgreen",
    borderWidth: 2,
    borderColor: "grey"
  },
  title: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    title: "ME",
  },
  title2: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 18,
    color: "grey",
    fontWeight: "bold",
    title: "ME",
  },
  title3: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    title: "ME",
  },
  tellotitle: {
    marginTop: 5,
    textAlign: "right",
    padding: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: 'white'
  },
  tello3title: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 23,
    color: 'black'
  },
  tello3title2: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 15,
    color: 'black'
  },
  tellotitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'black'
  },
  tellographic: { 
    width: 250,
    height: 125
  }
});

export default HomeScreen;

