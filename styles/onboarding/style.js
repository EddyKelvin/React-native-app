import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContainer: {
    paddingTop: 40,
    paddingHorizontal: 15
  },
  slideImage: {
    alignItems: 'center',
    marginTop: 20,
    padding: 20
  },
  nextBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
  },
  nextBtnText: {
    color: '#fff',
    fontFamily: 'Lato-Semibold',
    fontSize: 16,
    textAlign: 'center'
  },
  dots: {
    width: 9,
    height: 9,
    borderRadius: 50,
    marginHorizontal: 3,
  },
  titleStyles: {
    color: Colors.primary,
    fontSize: 28,
    fontFamily: 'Poppins-SemiBold',
  },
  subTitleStyles: {
    color: Colors.primary,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  textStyles: {
    fontSize: 16,
    color: Colors.primary,
    fontFamily: 'Lato-Light',
    textAlign: 'center',
    marginTop: 20
  },
  skipBtn: {
    paddingVertical: 15,
  },
  skipBtnText: {
    color: Colors.primary,
    fontFamily: 'Lato-Semibold',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default styles;
