import React, { Component, useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import Button from './components/Button';
import { Pressable, Image, StyleSheet, View, SafeAreaView, TextInput } from 'react-native';


const Wrapper = styled.View`
  align-self: center;
  justify-content: center;
  bbackground-color: #151667;
  flex: 1;
  width: 100%;
`;

//background-color: #151667;
//background-color: #155567;


function ButtonFlyScreen({ route, navigation }) {

  const { IPAddress} = route.params;
  
  return (
    <View style={{ flex: 1 }}>

      <View style={styles.container1}>
        <Text style={styles.heading1}>IP Connection Working on:</Text>
        <View style={styles.button}>
          <Text style={styles.textbox}>{IPAddress}</Text>
        </View>
      </View> 
      
      <View style={styles.container2}>
        <Wrapper>  
          <Button>
            Forwardz
            </Button>   
        </Wrapper>

        <Wrapper>
          <Button>Backward</Button>  
        </Wrapper>
      </View> 
      

      <View style={styles.container2}>
        <Wrapper>
          <Button>Left</Button>  
        </Wrapper>
        <Wrapper>
          <Button>Turn Left</Button>  
        </Wrapper>
        <Wrapper>
          <Button>Turn Right</Button>  
        </Wrapper>
        <Wrapper>
          <Button>Right</Button>  
        </Wrapper>
      </View> 

      <View style={styles.container2}>
        <Wrapper>
          <Button>  Up  </Button>  
        </Wrapper>
        <Wrapper>
          <Button>  Down  </Button>  
        </Wrapper>
      </View> 
  

      <View style={styles.container3}>
        <Wrapper>
          <Button> Take-Off </Button>  
        </Wrapper>
        <Wrapper>
          <Button>    Land    </Button>  
        </Wrapper>
      </View>

      <View style={styles.container4}>
        <Pressable
              onPress={() => 
              navigation.navigate('Home', {
            })}>   
                <View>
                  <View style={styles.button2}>
                  <Text style={styles.button2text}> Return to Home </Text>
                  </View>
                </View>
        </Pressable>
      </View>
    </View>
  );
};


export default ButtonFlyScreen;

const styles = StyleSheet.create({
  container1: {
    flex: 3,
    flexDirection: "column",
    paddingTop: 10,
    backgroundColor: "#151667",
    alignItems: "center",
    alignItems: "center",
  },
  container2: {
    flex: 2,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "#151667",
    paddingTop: 40,
  },
  container3: {
    flex: 3,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "#151667",
    paddingTop: 50,
  },
  container4: {
    flex: 2,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: "#151667",
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
    color: "white",
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
