import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Btn({bgColor, btnLable, textColor, Press}) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 350,
        paddingVertical: 5,
        marginVertical: 10,
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLable}
      </Text>
    </TouchableOpacity>
  );
}
