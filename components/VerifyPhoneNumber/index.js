import React, {useState} from 'react';
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
import {TouchableRipple} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import {Button} from 'react-native-paper';

import styles from '../../styles/forgotpassword/style';
import AppStatusBar from '../AppStatusBar';
import Colors from '../../constants/Colors';
import Loading from '../utils/Loading';
import {signinUser} from '../../redux/actions/authActions';

import TextInput from '../shared/TextInput';
import GradientButton from '../shared/Button/GradientButton';
import OutlineButton from '../shared/Button/OutlineButton';
import PrimaryButton from '../shared/Button/PrimaryButton';
import BackArrow from '../BackArrow';
import OtpInputs from 'react-native-otp-inputs';


// import

const VerifyPhoneNumberScreen = ({navigation, route}) => {
  const [form, setForm] = useState({
    phone: {
      value: '',
      placeholder: 'Enter Phone Number',
      type: 'text',
      label: 'Phone Number',
      required: true
    },
    
  });

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onTextChange = (text, el) => {
    const newForm = {...form};
    const formEl = {...newForm[el]};
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
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: true},
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
      <View
        style={styles.background}
       >
       
        <View style={styles.header}>
           <BackArrow style={{}} navigation={navigation}/>
          
          <ImageBackground
              style={{ resizeMode: "center",alignSelf: 'center', width: 198, height: 198}}
              source={require('../../assets/Group.png')}></ImageBackground>
        </View>
      
        <View style={styles.main}>
          <ScrollView style={styles.scrollView}>
            
            <Loading isVisible={isLoading} />
            <Text style={styles.headerText}>Verify Your Phone Number</Text>
            <Text style={styles.info}>Enter the OTP sent to +2349036893829</Text>
            
     
              <View style={{color: 'red', borderColor: '#000  '}}>
              <OtpInputs
                inputStyles={{width: 62, height: 70, backgroundColor: '#F3F1F1', borderRadius: 10, paddingLeft: 25, fontSize: 24, fontFamily: "Poppins", color: "#5E5E5E"}}
                handleChange={(code) => console.log(code)}
                numberOfInputs={4}
              />
            </View>
            <View style={{marginTop: 40, paddingBottom: 0}}>
              <PrimaryButton
                text="Verify"
                onPress={() => { navigation.navigate('UpdatePassword') }} 
                style={{marginBottom: 28}}
              />

              <TouchableOpacity>
                <Text style={{color: "#FFC866", fontSize: 18, fontWeight: '600', alignSelf: 'center'}}>Resend Code</Text>
              </TouchableOpacity>
            </View>

            
       
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyPhoneNumberScreen;
