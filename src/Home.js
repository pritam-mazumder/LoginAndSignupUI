import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen, green} from './Constants';

const Home = props => {
  return (
    <Background>
      <View style={{marginVertical: 100, marginHorizontal: 40}}>
        <Text style={{fontSize: 64, color: 'white'}}>Let's start</Text>
        <Text style={{fontSize: 64, color: 'white', marginBottom: 40}}>
          Coding
        </Text>
        <Btn
          bgColor={green}
          textColor="white"
          btnLable="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLable="Signup"
          Press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
};

export default Home;
