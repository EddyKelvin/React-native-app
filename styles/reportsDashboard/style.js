import React from 'react';
import {
  StyleSheet
} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
    flex: 1,
    overflow: 'visible'
  },

  header: {
    // height: 300,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 25
  },

  ButtonStyle: {
    color: '#008080',
    padding: 15,
    marginBottom: 50,
    borderRadius: 25,
  },

  menuBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 100
  },
  headerWrapper: {
    paddingHorizontal: 10,
    marginTop: 10,

    alignSelf: "center",
    start: -7,
    flex: 11
  },
  headerTitle: {
    fontSize: 25,
    color: Colors.secondary,
    fontFamily: 'Poppins',
    alignSelf: "center",
    marginBottom: 15
  },
  headerSubTitle: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    color: Colors.secondary,
    marginTop: -10,
    alignSelf: "center",
    marginBottom: 20,
    marginLeft: 20
  },
  main: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  titleText: {
    fontSize: 30,
    fontFamily: 'Lato-Bold',
    color: 'rgba(0,0,0,0.8)',
  },

  subTitleText: {
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    color: 'rgba(0,0,0,0.30)',
  },
  caseCategory: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 15
  },
  caseCard: {
    width: 140,
    height: 160,
    borderRadius: 40,
    backgroundColor: '#f5f6f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 5,
    marginHorizontal: 10
  },
  caseImg: {
    width: 80,
    height: 80
  },
  caseCardTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    textTransform: 'uppercase',
    color: '#194e48',
    textAlign: 'center'
  },

  TypeImage: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: 'center'
  },

  ReportType: {
    width: 160,
    height: 180,
    borderRadius: 25,
    borderColor: '#008080',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 25,
  },

  ReportTypeContainer: {
    flexDirection: 'column',
  },

  TypeText: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    color: '#008080',
    alignSelf: 'center'
  },

  
});

export default styles;