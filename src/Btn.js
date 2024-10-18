import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Btn({bgColor, btnLable, textColor}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 350,
      }}>
      <Text style={{color: textColor, fontSize: 22, fontWeight: 'bold'}}>
        {btnLable}
      </Text>
    </TouchableOpacity>
  );
}
