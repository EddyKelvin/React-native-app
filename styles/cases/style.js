import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    // height: 300,
    paddingHorizontal: 20,
    marginBottom: 13
  },
  headerWrapper: {
    paddingHorizontal: 10,
    marginTop: 10,
    alignSelf: "center",
    start: -7,
    flex: 11
  },
  headerTitle: {
    fontSize: 32,
    color: Colors.secondary,
    fontFamily: 'Poppins',
    alignSelf: "center",
    marginBottom: 15
  },
  headerSubTitle: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    color: Colors.secondary,
    marginTop: -10,
    alignSelf: "center"
  },
  menuBtn: {
    flex: 1,
    start: 1,
    end: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 100
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  casesFilterWrapper: {
    flexDirection: 'row',
    padding: 10
  },
  casesPicker: {
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    flex: 1,
    borderRadius: 15,
  },
  caseCard: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
    marginBottom: 15,
    borderRadius: 15,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 4, height: 4 },
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 5,
    flexDirection: 'row',
    width: '95%',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee'
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.37,
    // shadowRadius: 7.49,

    // elevation: 5,

  },
  caseCardLeft: {
    // width: '20%',
    marginRight: 5
  },
  caseCardImgCont: {
    backgroundColor: '#e2ffff',
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caseImg: {
    width: 40,
    height: 40
  },
  caseCardRight: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 7
  },
  caseCardTop: {
    // paddingRight: 7
  },
  caseCardTopHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  caseCardTopHeadRight: {
    alignItems: 'flex-end',
  },
  caseCardTime: {
    fontSize: 11,
    color: 'rgba(64, 64, 64, 0.3)'
  },
  caseCardHead: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#002b2b',
  },
  caseCardAuthor: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    color: '#9f9f9f',
    marginTop: -7,
    // fontStyle: 'italic'
  },
  caseCardComments: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    color: '#87ABA4',
    marginRight: 2,
    textAlign: 'right'
  },
  caseCardBottom: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 4,
    justifyContent: 'flex-end'
  },

  caseCardButtonText: {
    color: "rgba(0,0,0,0.3)",
    marginLeft: 3
  },
  caseCardButton: {
    flexDirection: 'row',
    marginRight: 10
  },

  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: 10
  }
});

export default styles;
