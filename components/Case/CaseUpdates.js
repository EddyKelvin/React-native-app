/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import styles from '../../styles/case/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const CaseUpdates = ({ data, chatWindow, setMessageWindow }) => {
  const [detailFiles, setDetailFiles] = useState({});

  useEffect(() => {
    console.log(data)
    const newData = { ...data };
    // delete newData._id;
    // delete newData.__v;
    setDetailFiles(newData)
  }, [])

  const chat = (left, initials) => {
      return (
          <TouchableWithoutFeedback onPress={()=> setMessageWindow(true)}>
                <View style={{
                alignItems: left ? "flex-start" : "flex-end", 
                marginBottom: 25}}>
                    <View style={{borderRadius: 25, padding: 20, width: "100%", maxWidth: 240, borderColor: "#C2BDBD", borderStyle: "dashed", borderWidth: 1}}>
                        <View style={{flexDirection:"row", justifyContent: "space-between", alignItems: "center", marginBottom: 10}}>
                            <View style={{width: 40, height: 40, backgroundColor: left ? "#72C8CC" : "#8E4B6E", justifyContent: "center", alignItems: "center", borderRadius: 10}}><Text  style={{color: "white"}}>{initials}</Text></View>
                            <View><Text style={{color: "#BDBDBD", fontSize: 8, fontWeight: "600"}}>Jan 2, 12:31pm</Text></View>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                            <View>
                                <Text style={{color: "#333", fontSize: 12, marginBottom: 8}}>James Robinson</Text>
                                <Text style={{fontSize: 10, color: "#BDBDBD", fontWeight: "600"}}>JI need some maintenanc...</Text>
                            </View>
                            <Icon name="chevron-right" size={10} color="#333" />
                        </View>
                    </View>
            </View>
          </TouchableWithoutFeedback>        
      )
  }

  const renderCase = () => {
    return (
      <View>
        {true && (
            <ScrollView>
                {chat(true, "j")}
                {chat(false, "E")}
                {chat(true, "j")}
                {chat(false, "E")}
                {chat(true, "j")}
                {chat(false, "E")}
                {chat(true, "j")}
            </ScrollView>
        )}
            <View style={{position: "absolute", bottom: 20, alignItems: "center", justifyContent: "center", width: "100%", height: 40, flex: 1}}>
                <TouchableWithoutFeedback onPress={() => chatWindow(true)}>
                    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#008080", borderRadius: 32, height: 38, width: 129 }}><Text style={{color: "#fff", fontSize: 11}}>Reply</Text></View>
                </TouchableWithoutFeedback>
                
            </View>
      </View>
    )
  }
    return (
        <View style={{flex: 1}}>
            {renderCase()}
        </View>
    );
};

export default CaseUpdates;
