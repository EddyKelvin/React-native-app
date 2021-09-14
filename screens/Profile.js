import React, { useState } from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  Animated,
  SafeAreaView,
  dropdown,
  TextInput,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Alert,
  ImageBackground,
  Image,
  Easing,
  Dimensions,
  TouchableHighlightComponent
} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';
//import { TouchableRipple } from 'react-native-paper';
import { useDispatch } from 'react-redux';
//import Icon from 'react-native-vector-icons/dist/AntDesign';
//import { Button } from 'react-native-paper';
import Overlay from '../components/Overlay';

import styles from '../styles/signup/style';
import {StyleSheet} from 'react-native';
import AppStatusBar from '../components/AppStatusBar';
import Colors from '../constants/Colors';
import Loading from '../components/utils/Loading';
import { signinUser } from '../../redux/actions/authActions';

import CustomTextInput from '../components/shared/TextInput';
//import GradientButton from '../components/shared/Button/GradientButton';
import OutlineButton from '../components/shared/Button/OutlineButton';
import PrimaryButton from '../components/shared/Button/PrimaryButton';

import Filters from '../components/Cases/Filters'

const Profile = ({ navigation, route }) => {
  const [showOverlay, setShowOverlay] = useState(false);

    const topForm = {
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
    }
    
  const [form, setForm] = useState({
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
      country: {
        value: '',
        placeholder: 'Enter Country',
        type: 'text',
        label: 'Country',
        required: true
      },
      state: {
        value: '',
        placeholder: 'Enter State',
        type: 'text',
        label: 'State',
        required: true
      },
      lga: {
        value: '',
        placeholder: 'Enter LGA of residence',
        type: 'text',
        label: 'Local Government Area',
        required: true
      },
      address: {
        value: '',
        placeholder: 'Enter address',
        type: 'text',
        label: 'Address',
        required: true
      },
      addressLandmark: {
        value: '',
        placeholder: 'Enter the closest landmark of the address',
        type: 'text',
        label: 'Address Landmark',
        required: true
      },
      religion: {
        value: '',
        placeholder: 'Enter religion',
        type: 'text',
        label: 'Religious Orientation',
        required: true
      },
      disability: {
        value: '',
        placeholder: 'Enter disability',
        type: 'text',
        label: 'Disability',
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
  
    axios.post(url, payload)
    .then(res => {
      console.log(res.data)
      setLoader(false)
      setMessage(apiMessage(true, res.data.message))
      setTimeout(() => navigation.navigate('Main'), 200)
    })
    .catch(err => {
      console.log(err)
      setLoader(false)
      setMessage(apiMessage(false, "Invalid credentials"))
    })

    //console.log(Object.keys(form))
    // setIsLoading(true);
    // dispatch(signinUser(data, success, fail));
  };

  const renderInput = () => {
    return Object.keys(form).map((el) => {
      return (
        <CustomTextInput
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
  }

  const topFormInput = () => {
    return Object.keys(topForm).map((el) => {
      return (
        <CustomTextInput
          key={el}
          // style={styles.input}
          onChangeText={(text) => onTextChange(text, el)}
          value={topForm[el].value}
          placeholder={topForm[el].placeholder}
          placeholderTextColor={Colors.primary}
          textAlignVertical="center"
          secureTextEntry={topForm[el].type === 'password'}
          keyboardType={topForm[el].type === 'email' ? 'email-address' : 'default'}
          label={topForm[el].label}
          required={topForm[el].required}
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
  const [profileTab, setProfileTab] = useState("none")
  const [profileScreen, setProfileScreen] = useState(edithProfile())

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
  function edithProfile() {
    return (
        <View>
            <Text style={{
              color: "#5E5E5E",
              fontSize: 20,
              fontWeight: "600",
              fontFamily: "Whitney",
              marginBottom: 20,
              textTransform: "capitalize"
          }}>Complete your profile</Text>

          {message ?? message}
          <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: 105
          }}>
              {topFormInput()}
          </View>
          <View>{renderInput()}</View>
          <View style={{ marginTop: 0}}>
            <PrimaryButton
              text="Save Details"
              onPress={() => {
                signin()
                setLoader(loadingScreen)
              }}
              style={{ marginBottom: 20 }}
            />
          </View>
        </View>
    )
}

function personalCases() {
    return (
        <View>
            <Text style={{
              color: "#5E5E5E",
              fontSize: 14,
              fontWeight: "600",
              fontFamily: "Poppins",
              marginBottom: 20,
              textTransform: "capitalize"
          }}>Follow Up on Your Cases</Text>
            {searchCase()}
            {personalCaseCards()}
            {personalCaseCards()}
            {personalCaseCards()}
            {personalCaseCards()}
            {personalCaseCards()}
            {personalCaseCards()}
            {personalCaseCards()}
            {personalCaseCards()}
            {personalCaseCards()}
        </View>
    )
}

const caseCards = () => {
  const data = {
    _id: "uhwiducwdicwd",
    caseTitle: "Brutality Case 1"
  }
  return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('CaseScreen', {data: data, type: "public"})}>
          <View style={{flexDirection: "row", alignItems: "space-between", paddingBottom: 20, marginBottom: 20, borderBottomWidth: 1, borderBottomColor: "#C2BDBD33"}}>
              <View style={{justifyContent: "center", alignItems: "center",marginRight: 10, width: 52, height: 52, borderRadius: 26, fontSize: 14}}>
                  <Image style={{width: 52, height: 52, borderRadius: 26}} source={require('../assets/brutalityImg.png')} />
              </View>
              <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flex: 1}}>
              <View style={{flex: 1}}>
                  <Text style={{color: "#194E48"}}>Brutality Case 1</Text>
                  <Text style={{color: "#96B1AC", marginBottom: 8, fontSize: 12}}>Samuel Johnson</Text>
                  <View style={{flexDirection: "row"}}>
                      <View style={{flexDirection: "row", marginRight: 8, alignItems: "center"}}><Icon name="eye" size={9} color="#F2994A" /><Text style={{fontSize: 9, color: "#404040"}}> view</Text></View>
                      <View style={{flexDirection: "row", alignItems: "center"}}><Icon name="check" size={9} color="#008080" /><Text style={{fontSize: 9, color: "#494040"}}> follow</Text></View>
                  </View>
              </View>
              <View>
                  <Text style={{fontSize: 9, color: "#40404066"}}>Feburary 2013</Text>
                  <Text style={{fontSize: 9, color: "#009688"}}>0 comments</Text>
              </View>
              </View>
          </View>
      </TouchableWithoutFeedback>
  )
  
}

const personalCaseCards = () => {
  const data = {
    _id: "uhwiducwdicwd",
    caseTitle: "Brutality Case 1"
  }
  return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('CaseScreen', {data: data, type: "private"})}>
          <View style={{flexDirection: "row", alignItems: "space-between", paddingBottom: 20, marginBottom: 20, borderBottomWidth: 1, borderBottomColor: "#C2BDBD33"}}>
              <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flex: 1}}>
              <View style={{flex: 1}}>
                  <Text style={{color: "#194E48", fontSize: 14, fontWeight: "600", fontFamily: "Lato", marginBottom: 8}}>Brutality Case 1</Text>
                  <Text style={{color: "#969696", marginBottom: 8, fontSize: 10, fontStyle: "italic"}}>Assigned to Andrew Johnson</Text>
              </View>
              <View>
                  <Text style={{fontSize: 9, color: "#40404066", marginBottom: 8}}>Feburary 2013</Text>
                  <View style={{borderRadius: 20, paddingHorizontal: 8, paddingVertical: 4, borderWidth: 1, borderColor: "#FFC866", backgroundColor: "#FFC86622"}}>
                    <Text style={{fontSize: 7, color: "#FFC866", fontWeight: "400"}}>Brutality Case</Text>
                  </View>
              </View>
              </View>
          </View>
      </TouchableWithoutFeedback>
  )
  
}

const searchCase = () => {
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 30}}>
            <View style={{flex: 1, marginRight: 20, justifyContent: "center", height: 40}}>
                <TextInput style={{
                    backgroundColor: "#F3F1F1",
                    textAlign: "center",
                    borderRadius: 20,
                    width: "100%",
                    height: 40,
                    padding: 10,
                }}
                placeholder="Search Cases" />
            </View>
            <View style={{width: 40, alignItems: "center", justifyContent: "center"}}>
              <TouchableWithoutFeedback onPress={() => setShowOverlay(true) }>
                <Image style={{ width: 25, height: 15 }} source={require('../assets/filter.png')}></Image>
              </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

function followedCases() {
    return (
        <View>
            <Text style={{
              color: "#5E5E5E",
              fontSize: 14,
              fontWeight: "600",
              fontFamily: "Poppins",
              marginBottom: 20,
              textTransform: "capitalize"
          }}>Your Followed Cases</Text>
            {searchCase()}
            {caseCards()}
            {caseCards()}
            {caseCards()}
            {caseCards()}
            {caseCards()}
            {caseCards()}
            {caseCards()}
            {caseCards()}
            {caseCards()}
        </View>
    )
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
        source={require('../assets/Vector.png')}>
        <View>
            <View style={{
                alignItems: "center",
                paddingTop: 20,
                paddingBottom: 20,
            }}>
                <View style={{alignItems: "flex-start", width: "100%", paddingLeft: 20, marginBottom: 10}}>
                    <TouchableHighlight onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={20} color="#fff" />
                    </TouchableHighlight>
                </View>
                <View style={{
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                    backgroundColor: "#099",
                    marginBottom: 10
                }}>
                    <View style={{
                        height: 20,
                        width: 20,
                        borderRadius: 40,
                        backgroundColor: "#FFC866",
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        bottom: 5,
                        right: 0,
                        zIndex: 3
                    }}>
                        <Icon name="pencil" size={10} color="#fff" />
                    </View>
                
                    <Image
                        source={require("../assets/profile.png")}
                        style={{ width: 80, height: 80, borderRadius: 40, zIndex: 1}}
                        />
                </View>
                <Text style={{
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: "600"
                }}>Michelle Anaekwe</Text>
                <Text style={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "400",
                    marginBottom: 20
                }}>@vanmishka</Text>

                <View style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    // backgroundColor: "#ff6633"
                }}>
                    <View style={{
                        // flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottomColor: "#FFC866",
                        borderBottomWidth: (profileTab == "personal") ? 2 : 0,
                        paddingBottom: 4
                    }}>
                        <TouchableWithoutFeedback onPress={() => {
                            setProfileTab("personal")
                            setProfileScreen(personalCases())
                        }}>
                            <View style={{alignItems: "center"}}>
                                <Text style={{marginBottom: 2, fontSize: 14, fontWeight: "600", color: "#fff"}}>05</Text>
                                <Text style={{color: "#fff", fontWeight: "600", }}>Personal Cases</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{
                        //flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderBottomColor: "#FFC866",
                        borderBottomWidth: (profileTab == "followed") ? 2 : 0,
                        paddingBottom: 4
                    }}>
                        <TouchableWithoutFeedback onPress={() => {
                            setProfileTab("followed")
                            setProfileScreen(followedCases())
                        }}>
                            <View style={{alignItems: "center"}}>
                                <Text style={{marginBottom: 2, fontSize: 14, fontWeight: "600", color: "#fff"}}>26</Text>
                                <Text style={{
                                    color: "#fff",
                                    fontSize: 14,
                                    fontWeight: "500",
                                }}>Followed Cases</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.main}>
          <ScrollView style={styles.scrollView}>
            {profileScreen}
          </ScrollView>
        </View>
      </ImageBackground>
      {loader ?? loader}
      <Overlay content={<Filters />} style={{ marginTop: '50%' }} close={() => { setShowOverlay(false) }} show={showOverlay} />
    </SafeAreaView>
  );
};

export default Profile;
