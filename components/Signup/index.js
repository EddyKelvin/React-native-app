import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {StyleSheet} from 'react-native';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Alert,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Easing,
  TouchableHighlight,
  Dimensions,
  KeyboardAvoidingView,
  Button,
  Platform
} from 'react-native';

import styles from '../../styles/signup/style';
import AppStatusBar from '../../components/AppStatusBar';
import Colors from '../../constants/Colors';
import states from '../../utils/data/states';
import Loading from '../utils/Loading';
import {signupUser} from '../../redux/actions/authActions';

import TextInput from '../shared/TextInput';
import PrimaryButton from '../shared/Button/PrimaryButton';

const Signup = ({navigation, route}) => {
  const [form, setForm] = useState({
    firstName: {
      value: '',
      placeholder: 'Enter first name',
      type: 'text',
      label: "First Name",
      required: true
    },
    middleName: {
      value: '',
      placeholder: 'Enter middle name',
      type: 'text',
      label: "Middle Name"
    },
    lastName: {
      value: '',
      placeholder: 'Enter last name',
      type: 'text',
      label: 'Last Name',
      required: true
    },

    email: {
      value: '',
      placeholder: 'Enter email address',
      type: 'email',
      label: 'Email Address'
    },

    phoneNumber: {
      value: '',
      placeholder: 'Enter phone number',
      type: 'text',
      label: 'Phone Number',
      required: true
    },

    age: {
      value: '',
      placeholder: 'Select Age',
      type: 'dropdown',
      label: 'Age',
      required: true
    },

    gender: {
      value: '',
      placeholder: 'Select Gender',
      type: 'dropdown',
      label: 'Gender',
      required: true
    },
    userName: {
      value: '',
      placeholder: 'Enter username',
      type: 'text',
      label: 'Username',
      required: true
    },
    password: {
      value: '',
      placeholder: 'Enter password',
      type: 'password',
      label: 'Password',
      required: true
    },
    confirmPassword: {
      value: '',
      placeholder: 'Enter password again',
      type: 'password',
      label: 'Confirm Password',
      required: true
    },
  });

  const [gender, setGender] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [age, setAge] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loader, setLoader] = useState(false)
  const [message, setMessage] = useState(false)

  // spinValue = new Animated.Value(0);
 
  // Animated.loop(
  //   Animated.timing(
  //     this.spinValue,
  //     {
  //       toValue: 1,
  //       duration: 600,
  //       iteration: 20,
  //       easing: Easing.linear,
  //       useNativeDriver: true
  //     }
  //   )
  // )

// Next, interpolate beginning and end values (in this case 0 and 1)
  // const spin = this.spinValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['0deg', '360deg']
  // })

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
  // const loadingScreen = <View style={loftyStyles.loadingScreen}>
  // <Animated.View 
  //   style={{
  //     width: 60,
  //     height: 60,
  //     borderRadius: 30,
  //     borderWidth: 4,
  //     borderColor: "white",
  //     borderLeftColor: "#2222",
  //     borderRightColor: "#2222",
  //     borderBottomColor: "#2222",
  //     transform: [{ rotate: spin}]
  //   }} />
  // </View>

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

  const onTextChange = (text, el) => {
    const newForm = {...form};
    const formEl = {...newForm[el]};
    formEl.value = text;
    newForm[el] = formEl;
    if (el === 'state') {
      const locality = {...newForm['lga']};
      locality.options = states[text];
      newForm['lga'] = locality;
    }
    setForm(newForm);
  };

  const success = () => {
    console.log('stop')
    setIsLoading(false);
    Alert.alert(
      "Success",
      "Account created successfully",
      [
        
        { text: "OK", onPress: () => navigation.replace('Main') }
      ],
      { cancelable: false }
    );
  }

  const fail = () => {
    setIsLoading(false);
  }

  const signup = () => {
    const data = {};
    Object.keys(form).map(el =>{
      data[el] = form[el].value;
    });
    
    console.log(`The firstname is ${form.firstName.value}`)
    // setIsLoading(true);
    // dispatch(signupUser(data, success, fail));

    console.log(data.email)
  
    let payload = {
      "partnerID": "60b01f6b669e34779cd05ab5",
      "firstName": form.firstName.value,
      "lastName": form.lastName.value,
      "userName": form.userName.value,
      "gender": gender,
      "email": form.email.value,
      "address": "12, Verifier Ar.",
      "phoneNumber": form.phoneNumber.value,
      "stateOfAssignment": "Abuja",
      "userType": "verifier",
      "stateOfAssignment": form.firstName.value,
      "password": form.password.value,
      "confirmPassword": form.confirmPassword.value
    }
    console.log(payload)

    const url = "https://sorosokeapi.onrender.com/api/v1/partner/signup";
  
    axios.post(url, payload)
    .then(res => {
      console.log(res.data)
      setLoader(false)
      setMessage(apiMessage(true, res.data.message))
      setTimeout(() => navigation.navigate('Cases'), 200)
    })
    .catch(err => {
      console.log(err)
      setLoader(false)
      setMessage(apiMessage(false, "Invalid credentials"))
    })
  };

  

  const renderInput = () => {
    return Object.keys(form).map((el, i) => {
      // console.log(i)
      return (
        (i == 6 ) ? 
          drobBox(
            "Gender",
            "Select Gender",
            showGender,
            setShowGender,
            gender,
            setGender,
            genderOptions, 3, i) : 
            
            (i == 5 ) ?  drobBox(
              "Age",
            "Select Age",
            showAge,
            setShowAge,
            age,
            setAge,
            ageOptions, 4, i) : 
           <TextInput
          key={i}
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
          style={styles.signUpformGroup}
          />
      )
    });
  };

  const genderOptions = {
    male: {
      label: "Male",
      value: "Male"
    },
    female: {
      label: "Female",
      value: "Female"
    }
  }

  const ageOptions = {
    1: {
      label: "Baby (0-2 years)",
      value: "Baby (0-2 years)"
    },
    2: {
      label: "Child (3-12 years)",
      value: "Child (3-12 years)"
    },
    3: {
      label: "Adolescence (13-18 years)",
      value: "Adolescence (13-18 years)"
    },
    4: {
      label: "Young Adults (19-30 years)",
      value: "Young Adults (19-30 years)"
    },
    5: {
      label: "Mid-Age Adult (31-59 years)",
      value: "Mid-Age Adult (31-59 years)"
    },
    5: {
      label: "Senior Adult (60 years and above)",
      value: "Senior Adult (60 years and above)"
    }
  }

  const drobBox = (name, defaultText, dropDown, setDropdown, stateValue, setStateValue, optionData, layer, key) => {
      const option = () => {
        return Object.keys(optionData).map((el, i) => {
          return (
            <View
                key={i}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  width: "100%",
                  height: 55
                }}>
                  {(i != 0) ? <View style={{backgroundColor: "#eee", height: 1, marginLeft: 20, marginRight: 20}}></View> : <View></View>}
                <TouchableHighlight underlayColor="#eee" onPress={() => {
                  setStateValue(optionData[el].value)
                  setDropdown(false)
                }}>
                  <View style={{justifyContent: "center", height: "100%", paddingLeft: 20,}}>
                    <Text style={{color: "#919191"}}>{optionData[el].label}</Text>
                  </View>
                </TouchableHighlight>
              </View>
            )
        })
      }
      return (
        <View key={key} style={{backgroundColor: "#ff663300", marginBottom: 10}}>
          <Text style={{
            fontFamily: 'Whitney',
            fontSize: 16,
            color: "#5E5E5E",
            marginBottom: 18,
            fontWeight: 'bold'
          }}>{name}</Text>
          <TouchableHighlight underlayColor="#4440" style={{marginLeft: 5}} onPress={() => {
        !dropDown ? setDropdown(true) : setDropdown(false)
        }}><View style={{
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#F5F5F5",
          width: "100%",
          height: 50,
          borderRadius: 10,
          }}>
          <Text style={{color: "#5d5b5b", marginLeft: 10}}>{!stateValue ? defaultText : stateValue}</Text>
        </View>
        </TouchableHighlight>
          {dropDown ? <View style={{
            flexDirection: "column",
            alignSelf: "center",
            width: "90%",
            marginTop: 15,
            borderRadius: 2,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#ccc2",
            shadowColor: "#ccc",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.5,
            shadowRadius: 20,
            elevation: 20,
            }}>
              <ScrollView style={{maxHeight: 200}}>{option()}</ScrollView>
            </View> : <Text></Text>}
        </View>
        )
      }

  return (
    <SafeAreaView style={styles.screen}>
      <AppStatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
      <ImageBackground style={styles.background} source={require('../../assets/Vector.png')}>
      <View style={styles.header}>
        <Text style={[styles.heading]}>Create {"\n"}Your Account</Text>
        {/* <Text style={styles.heading}>Started!</Text> */}
      </View>
      <View style={styles.main}>
      <ScrollView style={styles.scrollView}>
        <Loading isVisible={isLoading} />
        {message ?? message}
        <View style={{paddingTop: 25}}>
          {renderInput()}
        </View>
        <View style={{paddingBottom: 50, zIndex: 2}}>
        <PrimaryButton text="Create Account" onPress={() => {
          signup()
          setLoader(loadingScreen)
        }} style={{marginBottom: 10}} />
          <View style={styles.signinView}>
            <Text style={styles.siginDesc}>Have an account?</Text>
            <TouchableOpacity style={{marginLeft: 5}} onPress={() => {
              navigation.navigate('SigninScreen');
            }}>
              <Text style={styles.signinText}>Sign in</Text>  
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* {loader ?? loader} */}
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Signup;
