import React, { useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Animated,
  SafeAreaView,
  dropdown,
  // TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Easing,
  Dimensions
} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';
//import { TouchableRipple } from 'react-native-paper';
import { useDispatch } from 'react-redux';
//import Icon from 'react-native-vector-icons/dist/AntDesign';
//import { Button } from 'react-native-paper';

import styles from '../../styles/signup/style';
import {StyleSheet} from 'react-native';
import AppStatusBar from '../../components/AppStatusBar';
import Colors from '../../constants/Colors';
import Loading from '../utils/Loading';
import { signinUser } from '../../redux/actions/authActions';

import TextInput from '../shared/TextInput';
//import GradientButton from '../shared/Button/GradientButton';
import OutlineButton from '../shared/Button/OutlineButton';
import PrimaryButton from '../shared/Button/PrimaryButton';



const Signin = ({ navigation, route }) => {
  const [form, setForm] = useState({
    userName: {
      value: '',
      placeholder: 'Enter your username',
      type: 'text',
      label: 'Username',
      required: true
    },
    password: {
      value: '',
      placeholder: 'Enter your password',
      type: 'password',
      label: 'Password',
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
    let data = {};
    Object.keys(form).map((el) => {
      data[el] = form[el].value;
      
    });
    // data = JSON.parse(data)
    console.log(data.email)
  
    let payload = {
      "userName": form.userName.value,
      "password": form.password.value
    }
    console.log(payload)

    const url = "https://sorosokeapi.onrender.com/api/v1/partner/login";
  
    // axios.post(url, payload)
    // .then(res => {
    //   console.log(res.data)
    //   setLoader(false)
    //   setMessage(apiMessage(true, res.data.message))
    //   setTimeout(() => navigation.navigate('Main'), 200)
    // })
    // .catch(err => {
    //   console.log(err)
    //   setLoader(false)
    //   setMessage(apiMessage(false, "Invalid credentials"))
    // })

    navigation.navigate('Main')

    //console.log(Object.keys(form))
    // setIsLoading(true);
    // dispatch(signinUser(data, success, fail));
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

  const loftyStyles = StyleSheet.create({
    loadingScreen: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: "100%",
      height: Dimensions.get('window').height,
      backgroundColor: "#0006"
    }
  })

  const [loader, setLoader] = useState(false)
  const [message, setMessage] = useState(false)

  spinValue = new Animated.Value(0);
 
  Animated.loop(
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 600,
        iteration: 20,
        easing: Easing.linear,
        useNativeDriver: true
      }
    )
  ).start()

// Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

console.log("Testing Loading well")

  const loadingScreen = <View style={loftyStyles.loadingScreen}>
    <Animated.View 
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 4,
        borderColor: "white",
        borderLeftColor: "#2222",
        borderRightColor: "#2222",
        borderBottomColor: "#2222",
        transform: [{ rotate: spin}]
      }}
    />
  </View>
    
  const apiMessage = (status, msg) => {
    return <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: !status ? "#ffcece" : "#ceffce",
      height: 50,
      borderRadius: 4,
      marginBottom: 20
    }}>
      <Text style={{
        color: !status ? "#800" : "#008000",
        fontWeight: "600"
      }}>{msg}</Text>
    </View>
  }

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
          <Text style={styles.heading}>Welcome!</Text>

        </View>
        <View style={styles.main}>
          <ScrollView style={styles.scrollView}>
            <Loading isVisible={isLoading} />
            <Text style={styles.headerText}>Login</Text>

            {message ?? message}
       
            <View>{renderInput()}</View>
            <TouchableOpacity onPress={() => { navigation.navigate('ForgotPassword') }}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 40, paddingBottom: 50 }}>
              <PrimaryButton
                text="Login"
                onPress={() => {
                  signin()
                  setLoader(loadingScreen)
                }}
                style={{ marginBottom: 20 }}
              />
              <OutlineButton
                text="Create Account"
                onPress={() => {
                  navigation.navigate('SignupScreen');
                }}
              />
            </View>
     
          </ScrollView>
        </View>
      </ImageBackground>
      {loader ?? loader}
    </SafeAreaView>
  );
};

export default Signin;
