import React, {Component} from 'react';
import {View,ImageBackground} from 'react-native';

const image = {
  uri: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={image} style={{height: '100%'}} />
      <View style={{position: 'absolute'}}>{children}</View>
    </View>
  );
};

export default Background;
