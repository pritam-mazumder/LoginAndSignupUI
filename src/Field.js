import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {darkGreen} from './Constants';

const Field = ({placeholder, props}) => {
  return (
    <TextInput
      {...props}
      placeholder={placeholder}
      style={{
        borderRadius: 100,
        color: darkGreen,
        paddingHorizontal: 10,
        width: '78%',
        backgroundColor: 'rgb(220,220,220)',
        marginVertical: 10,
      }}
      placeholderTextColor={darkGreen}></TextInput>
  );
};

export default Field;
