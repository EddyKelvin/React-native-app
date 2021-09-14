import React, {useState} from 'react';
import { View, Text, ScrollView, TouchableHighlight, Modal } from 'react-native';
import SecondaryButton from '../shared/Button/SecondaryButton';
import PrimaryButton from '../shared/Button/PrimaryButton';
import stateData from '../../utils/data/states.js';
import DateTimePicker from '@react-native-community/datetimepicker';




const Filters = () => {
  // const [date, setDate] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };


    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(null)
    const [dropdownState, setDropdownState] = useState(null)
    
    const [nstate, setNstate] = useState(false);
    const [lgaData, setLgaData] = useState(false)
    const [group, setGroup] = useState(false)
    const [subGroup, setSubGroup] = useState(false)
    const [orderBy, setOrderBy] = useState(false)
    const [caseStatus, setCasesStatus] = useState(false)
    
    
    const genderOptions = [
        "Lagos",
        "Abia",
        "Ondo",
        "Sokoto",
        "Niger",
        "Adamawa"
      ]
      const caseCategoryOptions = [
        "violence",
        "rape",
        "killing",
      ];
    
      const caseSubCategoryOptions = [
        "sub violence",
        "sub rape",
        "sub killing",
      ];
    
      const orderByOptions = [
        "oldest",
        "newest",
        "resolved",
        "unresolved",
      ];
    
      const caseStatusOption = [
        "oldest",
        "newest",
        "resolved",
        "unresolved",
      ];
    
    const stateList = Object.keys(stateData).map((el, i) => {
      return el
    })
    
    const lgaList = () => {
      let defaultLGA = ["Select LGA"]
      if (nstate) {
        Object.keys(stateData).map((el, i) => {
          if (nstate == el) {
            defaultLGA = stateData[el]
          }
        })
        return defaultLGA
      } else {
        return ["Select LGA"]
      }
    }
    
    const selectDropdown = () => {
        return (
          <Modal animationType="fade" transparent={true} >
            <View style={{height: "100%", width: "100%", backgroundColor: "#0006", position: "absolute", top: 0, right: 0, justifyContent: "center", paddingHorizontal: 20}}>
              <View>
                <ScrollView style={{maxHeight: 200}}>
                  {dropdownValue.map((data, i) => {
                  return (
                    <View key={i} style={{backgroundColor: "#ffff", justifyContent: "center", width: "100%", height: 55 }}>
                        {(i != 0) ? <View style={{backgroundColor: "#eee", height: 1, marginLeft: 20, marginRight: 20}}></View> : <View></View>}
                        <TouchableHighlight underlayColor="#eee" onPress={() => {
                          dropdownState.runAm(data)
                          setShowDropdown(false)
                        }}>
                          <View style={{justifyContent: "center", height: "100%", paddingLeft: 20,}}>
                            <Text style={{color: "#919191"}}>{data}</Text>
                          </View>
                        </TouchableHighlight>
                      </View>
                    )
                })}
                </ScrollView>
              </View>
            </View>
          </Modal>
        )
    }
    
    const drobBox = (name, defaultText, stateValue, setStateValue, optionData) => {
        return (
            <View style={{backgroundColor: "#ff663300", marginBottom: 15, flexDirection: "row", alignItems: "center"}}>
            <Text style={{
                fontFamily: 'Poppins',
                fontSize: 16,
                color: "#5d5b5b",
                fontWeight: '300'
            }}>{`${name}:`}</Text>
            <TouchableHighlight underlayColor="#4440" style={{marginLeft: 10, flex: 1}} onPress={() => {
                setDropdownState({
                runAm: (value) => setStateValue(value)
                })
                setDropdownValue(optionData)
                setShowDropdown(true)
            }}><View style={{
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#ccc",
            width: "100%",
            height: 40,
            borderRadius: 4,
            }}>
            <Text style={{color: "#5d5b5b", marginLeft: 10}}>{!stateValue ? defaultText : stateValue}</Text>
            </View>
            </TouchableHighlight>
            </View>
        );
    }
    return (
        <View style={{paddingHorizontal: 20}}>
            {showDropdown ? selectDropdown(genderOptions) : <View></View>}
            <Text style={{ fontFamily: "Poppins", fontSize: 20, marginTop: 20, fontWeight: "500", marginBottom: 9, color: "#555353" }}>Filters</Text>
            
            <ScrollView>
                <View>
                  {drobBox("State", "-- Select States --", nstate, setNstate, stateList)}
                  {drobBox("LGA", "-- select LGA --", lgaData, setLgaData, lgaList())}
                  {drobBox("Case Group category", "-- select group --", group, setGroup, caseCategoryOptions)}
                  {drobBox("Case Sub Category", "-- select sub group --", subGroup, setSubGroup, caseSubCategoryOptions)}
                  {drobBox("Order By", "-- select order --", orderBy, setOrderBy, orderByOptions)}
                  {drobBox("Case Status", "-- select case status --", caseStatus, setCasesStatus, caseStatusOption)}
                  {/* <View style={{flexDirection: "row"}}>
                    <Text style={{
                      fontFamily: 'Poppins',
                      fontSize: 16,
                      color: "#5d5b5b",
                      fontWeight: '300'
                    }}>Date: </Text>
                    <View style={{flex: 1, justifyContent: "center"}}>
                      {<DateTimePicker style={{backgroundColor: "#fff"}} testID="dateTimePicker" value={date} mode={mode} is24Hour={true} display="default" onChange={onChange} />}
                    </View>
                  </View> */}
                </View>

                <View style={{ flexDirection: "row", marginBottom: 10, marginTop: 10, width: "100%", justifyContent: "space-around", alignItems: "space-around" }}>
                <SecondaryButton
                    text="Clear All"
                    onPress={() => {
                    setNstate(false);
                    setLgaData(false)
                    setGroup(false)
                    setSubGroup(false)
                    setOrderBy(false)
                    setCasesStatus(false)
                    }}
                    style={{ borderWidth: 1, borderColor: "#008080", borderRadius: 5, padding: 0, width: 133, height: 45, borderRadius: 4, color: "#fff" }}
                />
                <PrimaryButton
                    text="Apply Filter"
                    onPress={() => { navigation.navigate('SignupScreen') }}
                    style={{ width: 133, height: 45, borderRadius: 4, padding: 0 }}
                />
                </View>
            </ScrollView>
        </View>
    );
}

export default Filters