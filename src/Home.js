import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';

const Home = () => {
  return (
    <Background>
      <View style={{marginVertical: 100, marginHorizontal: 40}}>
        <Text style={{fontSize: 64, color: 'white'}}>Let's start</Text>
        <Text style={{fontSize: 64, color: 'white'}}>Coding</Text>
        <Btn bgColor={darkGreen} textColor="white" btnLable="Login" />
      </View>
    </Background>
  );
};

export default Home;
