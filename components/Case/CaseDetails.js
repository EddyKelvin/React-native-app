/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import moment from 'moment';
import axios from 'axios';
import styles from '../../styles/case/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const CaseDetails = ({data}) => {
  const [isFetching, setIsFetching] = useState(true);
  const [details, setDetals] = useState(null)

  // console.log(data)

  const url = "https://sorosokeapi.onrender.com/api/v1/public/cases/"+data._id;
  // console.log(`url ${url}`)
  useEffect(() => {
    axios.get(url)
    .then(res => {
      setDetals(res.data.data)
      // console.log("THis is it: "+res.data)
      setIsFetching(false)
    })
    .catch(err => {
      setIsFetching(false)
      console.log("An error occured: " + err)
    })
    /// console.log('render');
  }, [url]);


  const tags = (data) => {
    return data.map((data, i) => {
      return (
        <View  key={i} style={{height: 26, marginRight: 15, paddingHorizontal: 20, backgroundColor: '#FFC866', justifyContent: "center", alignItems: "center", borderRadius:13}}>
          <Text style={{textAlign: "center", fontSize: 13, fontWeight: "300", color: "#222"}}>{data}</Text>
        </View>
      )
    })
  }

  const body = () => {
    if (details == null) {
      return <Text>An error occured</Text>
    } else {
      const caseTime = moment(details.dateOfIncident).format('h:mm a');
      const caseDate = moment(details.dateOfIncident).format('Do MMM, YYYY');
      const casePublished = moment(details.datePublished).format('Do MMM, YYYY');
      return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{color: "#222", fontSize: 14, fontWeight: "500"}}>State: </Text>
                <Text style={{color: "#555353", fontSize: 14}}>{details.state}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{color: "#222", fontSize: 14, fontWeight: "500"}}>LGA: </Text>
                <Text style={{color: "#555353", fontSize: 14}}>{details.lga}</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{color: "#222", fontSize: 14, fontWeight: "500"}}>Date: </Text>
                <Text style={{color: "#555353", fontSize: 14}}>{caseDate}</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{color: "#222", fontSize: 14, fontWeight: "500"}}>Time: </Text>
                <Text style={{color: "#555353", fontSize: 14}}>{caseTime}</Text>
              </View>
            </View>

            <View style={{marginBottom: 5}}>
              <Text style={{color: "#222", fontSize: 14, fontWeight: "500", marginBottom: 5}}>Background:</Text>
              <Text style={{color: "#555353", fontSize: 14, fontWeight: "300", lineHeight: 20}}>{details.caseSummary}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", marginVertical: 25 }}>
              <Text style={{color: "#222", fontSize: 14, fontWeight: "500"}}>Reseolution Status: </Text>
              <Text style={{color: "#555353", fontSize: 14}}>{details.resolutionStatus}</Text>
            </View>

            <View style={{justifyContent: "space-between" }}>
              <Text style={{color: "#222", fontSize: 14, fontWeight: "500"}}>Case Category Tags</Text>
              <View style={{flexDirection: "row", marginLeft: 30, marginTop: 15, marginBottom: 30}}>
                {tags(details.categories)}
              </View>
            </View>

            <View style={{marginTop: 20}}>
              <Text style={{color: "#f00", fontSize: 12, fontWeight: "300", fontStyle: "italic"}}>Published on {casePublished}</Text>
            </View>
          </View>
      )
    }
  }

  const renderCase = () => {
    return (
      <View>
        {isFetching ? <ActivityIndicator size="small" color="#008080" /> : body()}
      </View>
    )
  };
  return <View style={{ padding: 10 }}>{renderCase()}</View>;
};

export default CaseDetails;
