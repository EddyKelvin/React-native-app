/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, Dimensions, FlatList, TouchableWithoutFeedback, TouchableOpacity, ImageBackground, Image, Animated, useWindowDimensions, Modal } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppStatusBar from '../../components/AppStatusBar';

import styles from '../../styles/case/style';
import { getAllCases } from '../../redux/actions/caseActions';

// components


import CustomTextInput from '../shared/TextInput';
import Select from '../shared/Select';

import { TextInput } from 'react-native-gesture-handler';
import Overlay from '../Overlay';
import SecondaryButton from '../shared/Button/SecondaryButton';
import PrimaryButton from '../shared/Button/PrimaryButton';
import BackArrow from '../BackArrow';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import CaseDetails from './CaseDetails';
import CaseProgress from './CaseProgress';
import CaseUpdates from './CaseUpdates';
import Comments from './Comments';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Colors from '../../constants/Colors';

const caseTypes = ['Brutality', 'Killings', 'Rape'];
const filters = ['state', 'date', 'time'];

const { event, ValueXY } = Animated;
const scrollY = new ValueXY();


const index = (props) => {
  const [selectedType, setSelectedType] = useState('');
  const [filter, setFilter] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const [index, setIndex] = useState(0);
  const [routes] = useState(sceneRoutes());

  function sceneRoutes() {
    if (props.route.params.type != "public") {
      return [
        { key: 'Details', title: 'Details' },
        { key: 'Progress', title: 'Progress' },
        { key: 'Comments', title: 'Comments' },
        { key: "Updates", title: 'Updates' }
      ]
    } else {
      return [
        { key: 'Details', title: 'Details' },
        { key: 'Progress', title: 'Progress' },
        { key: 'Comments', title: 'Comments' }
      ]
    }
  }

  const layout = useWindowDimensions();
  const [chatWindow, setChatWindow] = useState(false);
  const [messageWindow, setMessageWindow] = useState(false);
  const [checkProgressWindow, setCheckProgressWindow] = useState(false);

  const sendMessage = () => {
    return (
      <Modal animationType="slide" transparent={true} >
        <View style={{position: "absolute", justifyContent: "flex-end", backgroundColor: "#2226", top: 0, left: 0, width: "100%", height: Dimensions.get('window').height}}>
            <View style={{alignItems: "center", marginBottom: 20}}>
              <TouchableWithoutFeedback onPress={() => setChatWindow(false)}>
                <View style={{width: 48, height: 48, borderRadius: 24, backgroundColor: "#FFC866", justifyContent: "center", alignItems: "center"}}>
                  <Icon name="remove" size={18} color="#070648" />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={{borderTopRightRadius: 24, borderTopLeftRadius: 24, backgroundColor: "#fff", paddingVertical: 40, paddingHorizontal: 20, alignItems: "center"}}>
                <Text style={{marginBottom: 10, color: "#555353", fontSize: 20, fontWeight: "500"}}>Send Your Reply</Text>
                <Text style={{marginBottom: 20, color: "#555353", fontSize: 13, fontStyle: "italic", fontWeight: "300"}}>March 30, 2021 13:45pm</Text>
                <View style={{padding: 20, backgroundColor: "#F3F1F1", borderRadius: 10, width: "100%", marginBottom: 10}}>
                  <TextInput style={{height: 100, color: "#5d5b5b"}}
                    underlineColorAndroid="transparent"
                    placeholder="Type something"
                    placeholderTextColor="#ccc"
                    numberOfLines={10}
                    multiline={true}
                  />
                </View>
                <View style={{flexDirection: "row", maxWidth: 320, marginVertical: 20, paddingBottom: 10, borderBottomColor: "#DADADA", borderBottomWidth: 1}}>
                    <Icon name="folder" size={35} color="#FFC866" />
                    <View style={{flex: 1, marginHorizontal: 10}}>
                      <Text style={{color:"#5E5E5E" ,fontSize: 12, fontWeight: "300"}}>OtherEvidence.zip</Text>
                      <View style={{flexDirection: "row", marginTop: 10}}>
                        <View style={{backgroundColor: "#FFC866", width: "30%", height: 3}}></View>
                        <View style={{backgroundColor: "#008080", width: "70%", height: 3}}></View>
                      </View>
                    </View>
                    <Text style={{marginRight: 10, color: "#5E5E5E", fontSize: 12, fontWeight: "500"}}>13MB</Text>
                    <Icon name="remove" size={15} color="#d00" />
                </View>

                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 20}}>
                  <View style={{backgroundColor: "#D19D40", height: 35, width: 129, justifyContent: "center", alignItems: "center", borderRadius: 200, marginRight: 20}}>
                    <Text style={{color: "#fff", fontSize: 11, fontWeight: "400"}}>Add another file</Text>
                  </View>
                  <View style={{backgroundColor: "#008080", height: 35, width: 129, justifyContent: "center", alignItems: "center", borderRadius: 200}}>
                    <Text style={{color: "#fff", fontSize: 11, fontWeight: "400"}}>Add another file</Text>
                  </View>
                </View>
            </View>
        </View>
        </Modal>
    )
}
const viewMessage = () => {
  return (
    <Modal animationType="slide" transparent={true} >
      <View style={{position: "absolute", justifyContent: "flex-end", backgroundColor: "#2226", top: 0, left: 0, width: "100%", height: Dimensions.get('window').height}}>
          <View style={{alignItems: "center", marginBottom: 20}}>
            <TouchableWithoutFeedback onPress={() => setMessageWindow(false)}>
              <View style={{width: 48, height: 48, borderRadius: 24, backgroundColor: "#FFC866", justifyContent: "center", alignItems: "center"}}>
                <Icon name="remove" size={18} color="#070648" />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={{borderTopRightRadius: 24, borderTopLeftRadius: 24, backgroundColor: "#fff", paddingVertical: 40, paddingHorizontal: 20, alignItems: "center"}}>
              <Text style={{marginBottom: 10, color: "#555353", fontSize: 20, fontWeight: "500"}}>Message From Admin</Text>
              <Text style={{marginBottom: 20, color: "#555353", fontSize: 13, fontStyle: "italic", fontWeight: "300"}}>March 30, 2021</Text>
              <View style={{paddingBottom: 40, width: "100%"}}>
                <Text style={{fontSize: 14, fontWeight: "300", color: "#555353", lineHeight: 21, marginBottom: 40}}>
                As the youth of the community of okene were protesting along the lokoja. 
                As the youth of the community of okene were protesting along the lokoja. As the youth of the community of okene 
                were protesting along the lokoja. 
                </Text>
                <Text style={{color: "#000", marginBottom: 8, fontSize: 14, fontWeight: "600"}}>Attachments</Text>
                <Text style={{marginLeft: 6, textDecorationLine: "underline", color: "#008080", marginBottom: 10, fontSize: 14, fontWeight: "400"}}>File 1</Text>
                <Text style={{marginLeft: 6, textDecorationLine: "underline", color: "#008080", marginBottom: 10, fontSize: 14, fontWeight: "400"}}>File 2</Text>
              </View>
          </View>
      </View>
    </Modal>
  )
}
const checkProgress = () => {
  return (
    <Modal animationType="slide" transparent={true} >
      <View style={{position: "absolute", justifyContent: "flex-end", backgroundColor: "#2226", top: 0, left: 0, width: "100%", height: Dimensions.get('window').height}}>
          <View style={{alignItems: "center", marginBottom: 20}}>
            <TouchableWithoutFeedback onPress={() => setCheckProgressWindow(false)}>
              <View style={{width: 48, height: 48, borderRadius: 24, backgroundColor: "#FFC866", justifyContent: "center", alignItems: "center"}}>
                <Icon name="remove" size={18} color="#070648" />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={{borderTopRightRadius: 24, borderTopLeftRadius: 24, backgroundColor: "#fff", paddingVertical: 40, paddingHorizontal: 20, alignItems: "center"}}>
              <Text style={{marginBottom: 10, color: "#555353", fontSize: 20, fontWeight: "500"}}>Incidence Review</Text>
              <Text style={{marginBottom: 20, color: "#555353", fontSize: 13, fontStyle: "italic", fontWeight: "300"}}>March 30, 2021</Text>
              <View style={{paddingBottom: 40, width: "100%"}}>
                <Text style={{fontSize: 14, fontWeight: "300", color: "#555353", lineHeight: 21, marginBottom: 40}}>
                As the youth of the community of okene were protesting along the lokoja. 
                As the youth of the community of okene were protesting along the lokoja. As the youth of the community of okene 
                were protesting along the lokoja. 
                </Text>
                <Text style={{color: "#000", marginBottom: 8, fontSize: 14, fontWeight: "600"}}>Attachments</Text>
                <Text style={{marginLeft: 6, textDecorationLine: "underline", color: "#008080", marginBottom: 10, fontSize: 14, fontWeight: "400"}}>File 1</Text>
                <Text style={{marginLeft: 6, textDecorationLine: "underline", color: "#008080", marginBottom: 10, fontSize: 14, fontWeight: "400"}}>File 2</Text>
              </View>
          </View>
      </View>
    </Modal>
  )
}

  const Details = () => (content(<CaseDetails data={props.route.params.data} />));
  // const Progres = () => (content(<Progress sheetRef={{}} openBottom={{}1 data={{}} />));

  const Progres = () => (content(<CaseProgress progressWindow={setCheckProgressWindow} />));
  const Updates = () => (content(<CaseUpdates chatWindow={setChatWindow} setMessageWindow={setMessageWindow} />));
  const Comment = () => (content(<Comments data={props.route.params.data} />));
  const renderScene = SceneMap(sceneMapData());

  function sceneMapData() {
    if (props.route.params.type != "public") {
      return {
        Details: Details,
        Progress: Progres,
        Comments: Comment,
        Updates: Updates
      }
    } else {
      return {
        Details: Details,
        Progress: Progres,
        Comments: Comment
      }
    }
  }

  const Filters = () => {
    return (
      <View>
        <Text style={{ fontFamily: "Poppins-bold", fontSize: 20, marginTop: 30, marginBottom: 9, color: Colors.primary }}>Filters</Text>
        <View>
          <Select labelStyle={{ fontSize: 14, fontFamily: "Poppins-bold", color: Colors.primary, marginBottom: 10 }} pickerStyle={{ marginLeft: 10, height: 50, textAlign: "center" }} style={{ width: 170, marginLeft: 20, marginBottom: 10 }} value="fct" onValueChange={() => { }} label="State" options={[{ label: "Abia", value: 'abia' }, { label: "Fct Abuja", value: 'fct' }]} ></Select>
        </View>
        <View>
          <Select labelStyle={{ fontSize: 14, fontFamily: "Poppins-bold", color: Colors.primary, marginBottom: 10 }} pickerStyle={{ marginLeft: 10, height: 50, textAlign: "center" }} style={{ width: 170, marginLeft: 20, marginBottom: 10 }} value="fct" onValueChange={() => { }} label="State" options={[{ label: "Abia", value: 'abia' }, { label: "Fct Abuja", value: 'fct' }]} ></Select>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 10, marginLeft: 40, marginRight: 20, marginTop: 100, justifyContent: "space-between", alignItems: "center" }}>

          <SecondaryButton
            text="Clear All"
            onPress={() => { navigation.navigate('SigninScreen') }}
            style={{ borderWidth: 2, borderColor: "#000", borderRadius: 5, width: 120, height: 70, borderRadius: 4 }}
          />


          <PrimaryButton
            text="Apply Filter"
            onPress={() => { navigation.navigate('SignupScreen') }}
            style={{ width: 120, height: 70, borderRadius: 4 }}
          />
        </View>
      </View>
    );
  };

  // const Overlay = (data) => {
  //   return <View style={styles.overlay}>
  //     <Text>dddd</Text>
  //   </View>
  // };

  const content = (x) => {
    return (<View style={styles.main}>
      <View style={{justifyContent: "center", marginBottom: 15, width: '90%', marginLeft: '5%', marginRight: '5%', flexDirection: 'row', marginTop: 20 }}>

        {x}
      </View>
      <View style={{ marginTop: 15 }}>

      </View>
    </View>)
  };



  const handleRefresh = () => {
    setIsFetching(true)
    props.getAllCases(() => setIsFetching(false));
  }

  const renderTabBar = props => (
    <TabBar

      {...props}
      indicatorStyle={{ backgroundColor: '#fff' }}
      style={{
        backgroundColor: Colors.primary,

      }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, marginHorizontal: 2, marginVertical: 8, fontSize: 13 }}>
          {route.title}
        </Text>
      )}
      />
     
  );

  return (
    <View style={styles.screen}>
      <Overlay content={<Filters />} style={{ marginTop: '50%' }} close={() => { setShowOverlay(false) }} show={showOverlay} />
      <View style={styles.header}>
        <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 40 }}>
          <BackArrow navigation={props.navigation}></BackArrow>
          <View style={styles.headerWrapper}>

            <Text style={styles.headerTitle}>Sọrọ sókè</Text>

          </View>

        </View>
        <Text style={styles.headerSubTitle}>
          {props.route.params.data.caseTitle}
          </Text>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}

      />

      {checkProgressWindow ? checkProgress() : <View></View>}
      {messageWindow ? viewMessage() : <View></View>}
      {chatWindow ? sendMessage() : <View></View>}
    </View>
  );
};

export default index
