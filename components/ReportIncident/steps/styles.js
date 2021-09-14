import { StyleSheet } from "react-native";
import Colors from '../../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "6%"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "6%"
  },
  step1: {
    flex: 1
  },
  step2: {
    flex: 1
  },
  step3: {
    flex: 1
  },
  step4: {
    flex: 1
  },
  input: {
    width: "90%",
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    marginTop: "6%"
  },
  inputTextArea: {
    width: "90%",
    borderColor: Colors.primary,
    borderWidth: 2,
    marginTop: "6%"
  },
  btnStyle: {
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary
  },
  btnImage: {
    width: "40%",
    height: "40%",
  },
  backBtn: {
    transform: [{ rotate: "180deg" }]
  },
  marginAround: {
    width: "40%",
    justifyContent: "space-between"
  },
  currentStepText: {
    color: Colors.primary,
    fontSize: 22
  },
  dateInput: {
    width: "90%",
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    marginTop: "9%",
    color: Colors.primary
  },
  dateInputText: {
    color: Colors.primary,
    paddingBottom: 20,
    paddingLeft: 4
  },
  itemStyle: {
    color: Colors.primary
  },
  selectWrapper: {
    width: "90%",
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    marginTop: "6%"
  },
  selectInput: {
    color: Colors.primary, borderBottomWidth: 2, borderBottomColor: Colors.primary
  },
  modalWrapper: {
    justifyContent: 'center', alignItems: 'center'
  },
  modalBody:{
    width: '95%',
    // height: 300,
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 15
  },
  modalTitle: {
    fontSize: 28,
    color: 'rgba(0,0,0,0.6)',
    fontFamily: 'Lato-Regular',
    textAlign: 'center'
  },
  modalSubTitle: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.4)',
    fontFamily: 'Lato-Regular',
    textAlign: 'center'
  },
  modalButton: {
    width: '100%',
    padding: 15,
    borderRadius: 50,
    backgroundColor: Colors.primaryLight,
    marginTop: 10
  },
  modalButtonText: {
    color: Colors.primary,
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 18
  }
});