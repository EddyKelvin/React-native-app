/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView , Image, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import styles from '../../styles/case/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const CaseProgress = ({ data, progressWindow }) => {
  const [detailFiles, setDetailFiles] = useState({});


  const tags = (text) => (
    <View style={{height: 26, marginRight: 15, paddingHorizontal: 20, backgroundColor: '#FFC866', justifyContent: "center", alignItems: "center", borderRadius:13}}>
      <Text style={{textAlign: "center", fontSize: 13, fontWeight: "300", color: "#222"}}>{text}</Text>
    </View>
  );

  useEffect(() => {
    console.log(data)
    const newData = { ...data };
    // delete newData._id;
    // delete newData.__v;
    setDetailFiles(newData)
  }, [])
  const renderCase = (read) => {
    return (
      <View>
        {true && (
          <View style={{flexDirection: "row"}}>
              <View style={{alignItems: "center", marginRight: 15}}>
                  <Text style={{color: "#212525", fontSize: 12, fontWeight: "500", marginBottom: 8}}>1/04/21</Text>
                  <Text style={{color: "#BCC1CD", fontSize: 12, fontWeight: "500"}}>12:20pm</Text>
              </View>
              <View style={{flex: 1, borderLeftColor: "#FAF9F9", borderLeftWidth: 2, paddingLeft: 15, paddingBottom: 20}}>    
                <TouchableWithoutFeedback onPress={() => progressWindow(true)}>
                    <View style={{backgroundColor: read ? "#008080" : "#F6F6F5", borderRadius: 16, padding: 15}}>
                        <View style={{marginBottom: 10, flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style={{color: read ? "#fff" : "#212525", fontSize: 16, fontWeight: "600"}}>Case resolved</Text>
                            <View style={{justifyContent: "space-between", height: 15}}>
                                <Icon name="circle" size={5} color={read ? "#fff" : "#88889D"}/>
                                <Icon name="circle" size={5} color={read ? "#fff" : "#88889D"}/>
                            </View>
                        </View>
                        <Text style={{color: read ? "#eee" : "#555353", fontSize: 11, fontWeight: "300", lineHeight: 16}}>
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                        </Text>
                        <View style={{flexDirection: "row", justifyContent: "flex-start", marginTop: 10}}>
                            <Image source={require("../../assets/profile.png")} style={{ width: 16, height: 16, borderRadius: 8, zIndex: 1}} />
                            <Text style={{color: read ? "#fff" : "#212525", fontSize: 12, marginLeft: 8, fontSize: 12, fontWeight: "400"}}>Broklyn Williamson</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
              </View>
          </View>
        )}
      </View>
    )
  };
  return (
        <View style={{ padding: 10, flex: 1}}>
            <ScrollView>
                {renderCase(true)}
                {renderCase(false)}
                {renderCase(false)}
                {renderCase(false)}
            </ScrollView>
        </View>
    )
};

export default CaseProgress;
