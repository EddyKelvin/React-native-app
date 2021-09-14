import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  // TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableRipple } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { Button } from 'react-native-paper';

import styles from '../../styles/signup/style';
import AppStatusBar from '../../components/AppStatusBar';
import Colors from '../../constants/Colors';
import Loading from '../utils/Loading';
import { signinUser } from '../../redux/actions/authActions';

import TextInput from '../shared/TextInput';
import GradientButton from '../shared/Button/GradientButton';
import OutlineButton from '../shared/Button/OutlineButton';
import PrimaryButton from '../shared/Button/PrimaryButton';


// import

const UpdatePassword = ({ navigation, route }) => {
  const [form, setForm] = useState({
  
    password: {
      value: '',
      placeholder: 'Enter your password',
      type: 'password',
      label: 'New Password',
      required: true
    },
    passwords: {
      value: '',
      placeholder: 'Confirm Password',
      type: 'password',
      label: 'Confirm Password',
      required: true
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onTextChange = (text, el) => {
    const newForm = { ...form };
    const formEl = { ...newForm[el] };
    formEl.value = text;
    newForm[el] = formEl;
    setForm(newForm);
  };

  const success = () => {
    console.log('stop');
    setIsLoading(false);
    navigation.replace('Main');
  };

  const fail = () => {
    setIsLoading(false);
    Alert.alert(
      'Login Failed',
      'Username or password incorrect',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: true },
    );
  };

  const signin = () => {
    const data = {};
    Object.keys(form).map((el) => {
      data[el] = form[el].value;
    });
    setIsLoading(true);
    dispatch(signinUser(data, success, fail));
  };

  const renderInput = () => {
    return Object.keys(form).map((el) => {
      return (
        <TextInput
          key={el}
          // style={styles.input}
          onChangeText={(text) => onTextChange(text, el)}
          value={form[el].value}
          placeholder={form[el].placeholder}
          placeholderTextColor={Colors.primary}
          textAlignVertical="center"
          secureTextEntry={form[el].type === 'password'}
          keyboardType={form[el].type === 'email' ? 'email-address' : 'default'}
          label={form[el].label}
          required={form[el].required}
          style={styles.formGroup}
        />
      );
    });
  };
  return (
    <SafeAreaView style={styles.screen}>
      <AppStatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground
        style={styles.background}
        source={require('../../assets/Vector.png')}>
        <View style={styles.header}>
          <Text style={styles.heading}>Verified!</Text>
        
        </View>
        <View style={styles.main}>
          <ScrollView style={styles.scrollView}>
            <Loading isVisible={isLoading} />
            <Text style={styles.headerText}>Enter New Password</Text>
       
            <View>{renderInput()}</View>
          
            <View style={{ marginTop: 40, paddingBottom: 50 }}>
              <PrimaryButton
                text="Submit"
                onPress={signin}
                style={{ marginBottom: 20 }}
              />
           
             
            </View>
     
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UpdatePassword;
