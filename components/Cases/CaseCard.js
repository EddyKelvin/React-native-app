import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from '../../styles/cases/style';
import Icon from 'react-native-vector-icons/FontAwesome';

// Images
import defImg from '../../assets/brutalityImg.png';

const CaseCard = ({data, goToCase}) => {
  return (
    <TouchableWithoutFeedback onPress={() => {goToCase.navigate('CaseScreen', {data: data, type: "public"})}}>
        <View style={{flexDirection: "row", alignItems: "space-between", paddingBottom: 20, marginBottom: 20, borderBottomWidth: 1, borderBottomColor: "#C2BDBD33"}}>
            <View style={{justifyContent: "center", alignItems: "center",marginRight: 10, width: 52, height: 52, borderRadius: 26, fontSize: 14}}>
                <Image style={{width: 52, height: 52, borderRadius: 26}} source={{uri: data.caseAvatar}} />
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={{color: "#194E48"}}>{data.caseTitle}</Text>
                <Text style={{color: "#96B1AC", marginBottom: 8, fontSize: 12}}>{data.publisher.firstName + " " + data.publisher.lastName}</Text>
                <View style={{flexDirection: "row"}}>
                    <View style={{flexDirection: "row", marginRight: 8, alignItems: "center"}}><Icon name="eye" size={9} color="#F2994A" /><Text style={{fontSize: 9, color: "#404040"}}> view</Text></View>
                    <View style={{flexDirection: "row", alignItems: "center"}}><Icon name="check" size={9} color="#008080" /><Text style={{fontSize: 9, color: "#494040"}}> follow</Text></View>
                </View>
            </View>
            <View>
                <Text style={{fontSize: 9, color: "#40404066"}}>Feburary 2013</Text>
                <Text style={{fontSize: 9, color: "#009688"}}>0 comments</Text>
            </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  );
};

export default CaseCard;
