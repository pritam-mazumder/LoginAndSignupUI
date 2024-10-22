import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './Background';
import {darkGreen} from './Constants';
import Field from './Field';
import Btn from './Btn';

const Signup = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 430}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            marginBottom: 20,
            fontSize: 19,
            fontWeight: 'bold',
          }}>
          Creata a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 770,
            width: '100%',
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="First name" />
          <Field placeholder="Last name" />
          <Field placeholder="Email/Username" keyboardType={'email-address'} />
          <Field placeholder="Contact Number" keyboardType={'number'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              By Signin in, you are agree to our{' '}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Terms & Conditons
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              fontWeight: 'bold',
              fontSize: 16,
              justifyContent: 'center',
              marginBottom: 10,
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>and </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Privecy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLable="Signup"
            Press={() => {
              alert('Account Created'), props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
