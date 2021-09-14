import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  screen: {backgroundColor: Colors.primary, flex: 1,overflow: 'visible'},
  header: {
    // height: 300,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 25
  },
  background:{
    flex: 1,
    resizeMode: "center",
    justifyContent: "flex-end"
  },
  headerText: {
    fontWeight: 'bold',
    color: Colors.textColor,
    fontSize: 24,
    fontFamily: 'Whitney',
    marginBottom: 30,
    lineHeight: 42.19
  
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    paddingTop: 25,
  },

  scrollView: {
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  // container: {
  //   paddingHorizontal: 20,
  //   paddingTop: 20,
  //   paddingBottom: 50,
  //   flex: 1,
  // },
  menuBtn: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {fontSize: 30, color: '#fff', fontFamily: 'Whitney', fontWeight: '700', marginLeft: 30, paddingTop: 40, paddingBottom: 20},
  input: {
    width: '100%',
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    marginTop: '6%',
    color: '#000',
  },
  submitBtn: {
    backgroundColor: '#FFC866',
    borderRadius: 10,
    width: '100%',
  },
  submitBtnText: {
    color: Colors.primary,
    fontFamily: 'Lato-Semibold',
    textTransform: 'capitalize',
    fontSize: 18,
    paddingVertical: 5,
  },
  acceptView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  acceptText: {
    color: Colors.primary,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.primary,
    textDecorationStyle: 'solid',
  },
  itemStyle: {
    color: Colors.primary,
  },
  selectWrapper: {
    width: '90%',
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    marginTop: '6%',
  },
  selectInput: {
    color: Colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  signinView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  siginDesc: {
    color: '#000',
    fontSize: 16,
  },
  signinText: {
    color: Colors.primary,
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: -20,
    fontSize: 14,
    color: Colors.primary,
    fontFamily: 'Poppins-SemiBold'
  },
  formGroup: {
    marginBottom: 40,
  },

  signUpformGroup: {
    marginBottom: 20
  }
});

export default styles;
