import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  screen: {backgroundColor: Colors.primary, flex: 1},
  shape: {
    height: 400,
    backgroundColor: '#fff',
    width: '150%',
    transform: [{rotateZ: '35deg'}],
    borderBottomEndRadius: 80,
    top: -130,
    left: -150,
  },
  imageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 300,
    overflow: 'hidden',
  },
  image: {
      width: 200,
      height: 200
  },
  heading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#fff',
  },
  text: {
    fontFamily: 'Lato-Light',
    fontSize: 14,
    color: '#fff',
    marginTop: 14
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  buttonFull: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '55%',
  },
  buttonSignup: {
    backgroundColor: '#fff',
    borderRadius: 10
  },
  buttonSignupText:{
    color: Colors.primary,
    fontFamily: 'Lato-Semibold',
    textTransform: 'capitalize',
    fontSize: 18,
    paddingVertical: 8,
  },
  buttonFullText:{
    color: Colors.primary,
    fontFamily: 'Lato-Medium',
    textTransform: 'capitalize',
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonOutlined: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    width: 120
  },
  buttonOutlineText: {
    color: "#fff",
    fontFamily: 'Lato-Medium',
    textTransform: 'capitalize',
    fontSize: 16,
    paddingVertical: 8
  },
  signinView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  siginDesc: {
    color: "#FFF",
    fontSize: 16
  },
  signinText: {
    color: "#FFC866",
    fontSize: 16
  }
});

export default styles;
