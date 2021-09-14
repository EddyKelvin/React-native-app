import React, {useEffect, useRef, useState} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import isEmail from 'validator/lib/isEmail';

import styles from './style';

const CustomTextInput = (props) => {
  const [hidden, setHidden] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputEntered, setInputEntered] = useState(false);
  const inputElement = useRef(null);

  const onTextChanged = (text) => {
    setIsValid(true);
    let inputValidity = true;
    if (text.trim().length > 1) {
      setInputEntered(true);
    }
    if (props.keyboardType === 'email-address') {
      const valid = isEmail(text);
      if (valid === false) {
        inputValidity = valid;
        setIsValid(valid);
        setErrorMessage('Invalid email address');
      }
    }
    if (props.label === 'Confirm password') {
      const valid = text.trim() === props.password;
      inputValidity = valid;
      setIsValid(valid);
      setErrorMessage('Passwords do not match');
    }
    if (props.secureTextEntry) {
      const valid = text.trim().length > 5;
      if (valid === false) {
        inputValidity = valid;
        setIsValid(valid);
        setErrorMessage('Minimum password length is 6 digits');
      }
    }
    if (props.required && text.trim().length < 1 && inputEntered) {
      setErrorMessage(`${props.label} field is required`);
      inputValidity = false;
      setIsValid(false);
    }
    props.onChangeText(text, inputValidity);
  };

  const toggleVisibility = () => {
    setHidden(!hidden);
  };

  useEffect(() => {
    inputElement.current.setNativeProps({
      style: {fontFamily: 'Poppins-SemiBold'},
    });
  }, []);

  useEffect(() => {
    inputElement.current.setNativeProps({
      style: {fontFamily: 'Poppins-SemiBold'},
    });
  }, [hidden]);

  useEffect(() => {
    if (props.triggered === true && props.required) {
      setIsValid(false);
      setErrorMessage(`${props.label} field is required`);
    }
  }, [props.triggered]);
  return (
    <View style={{...styles.container,...props.style}}>
      <Text style={styles.label}>{props.label}</Text>
      {!props.secureTextEntry ? (
        <TextInput
          ref={inputElement}
          style={[
            styles.textInput,
            !isValid
              ? {
                  backgroundColor: '#ffe6eb',
                  borderColor: '#ef5775',
                  borderWidth: 1,
                }
              : {},props.inputStyle
          ]}
          placeholderTextColor="#D8D8D8"
          placeholder={props.placeholder}
          onChangeText={onTextChanged}
          value={props.value}
          placeholder={props.placeholder}
          textAlignVertical="center"
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          multiline={props.multiline}
        />
      ) : (
        <View
          style={[
            {
              borderRadius: 15,
              backgroundColor: '#F5F5F5',
              flexDirection: 'row',
              alignItems: 'center',
              paddingRight: 15,
            },
            !isValid
              ? {
                  backgroundColor: '#ffe6eb',
                  borderColor: '#ef5775',
                  borderWidth: 1,
                }
              : {},props.inputStyle
          ]}>
          <TextInput
            ref={inputElement}
            style={{
              padding: 15,
              fontSize: 13,
              flex: 1,
              fontFamily: 'Poppins-SemiBold',
            }}
            placeholderTextColor="#D8D8D8"
            placeholder={props.placeholder}
            onChangeText={onTextChanged}
            value={props.value}
            placeholder={props.placeholder}
            textAlignVertical="center"
            secureTextEntry={hidden}
            keyboardType={props.keyboardType}
            multiline={props.multiline}
          />
          <TouchableOpacity onPress={toggleVisibility}>
            <Icons
              name={hidden ? 'eye' : 'eye-off'}
              size={20}
              color="#282828"
            />
          </TouchableOpacity>
        </View>
      )}
      {errorMessage && !isValid ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default CustomTextInput;
