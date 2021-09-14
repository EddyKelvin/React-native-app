import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../assets/sorosoke_logo.png';
import Colors from '../constants/Colors';
import StatusBar from '../components/AppStatusBar';
import {authSuccessAction} from '../redux/actions/actions';

const LoadingScreen = ({navigation}) => {
    const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.getItem('token').then((value) => {
      if (value === null) {
        navigation.replace('SigninScreen');
      } else {
        const decoded = jwtDecode(value);
        dispatch(authSuccessAction(decoded))
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          AsyncStorage.removeItem('token');
          dispatch(authSuccessAction({}))
          navigation.replace('SigninScreen');
        } else {
          navigation.replace('Main');
        }
      }
    });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={logo} style={{width: 150, height: 150}} />
      </View>
      <View style={{flex: 1}}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    </View>
  );
};

export default LoadingScreen;
