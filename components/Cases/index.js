import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, ImageBackground, Image, ActivityIndicator, TouchableHighlight, Modal } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/Feather';
import AppStatusBar from '../../components/AppStatusBar';
import styles from '../../styles/cases/style';

// components
import CaseCard from './CaseCard';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Select from '../shared/Select';
import { TextInput } from 'react-native-gesture-handler';
import Overlay from '../Overlay';
import axios from 'axios';
import Filters from './Filters'

// const caseTypes = ['Brutality', 'Killings', 'Rape'];
const filters = ['state', 'date', 'time'];

const Case = (props) => {
  const [selectedType, setSelectedType] = useState('');
  const [filter, setFilter] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [cases, setCases] = useState(false)


  const url = "https://sorosokeapi.onrender.com/api/v1/public/cases";
  useEffect(() => {
    setIsFetching(false)

    axios.get(url)
    .then(res => {
      setCases(res.data)
      // res.data.data.publicCases.map((data) => {
      //   console.log(data)
      // })
    })
    .catch(err => {
      console.log("An error occured: " + err)
    })
    /// console.log('render');
  }, [url]);


  // const goToCase = (data) => {
  //   props.navigation.navigate('CaseScreen', data);
  // };



  const renderList = (data) => <CaseCard key={data._id} data={data.item} goToCase={props.navigation} />





  // const Overlay = (data) => {
  //   return <View style={styles.overlay}>
  //     <Text>dddd</Text>
  //   </View>
  // };

  const handleRefresh = () => {
    setIsFetching(true)
    props.getAllCases(() => setIsFetching(false));
  }
  return (
    <>
    <View style={styles.screen}>
      <Overlay content={<Filters />} style={{ marginTop: '50%' }} close={() => { setShowOverlay(false) }} show={showOverlay} />
      <AppStatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.header}>
        <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 40 }}>
          <TouchableRipple
            onPress={() => props.navigation.toggleDrawer()}
            rippleColor="#fff"
            style={styles.menuBtn}>
            <Icon name="menu" size={30} color="#fff" />
          </TouchableRipple>
          <View style={styles.headerWrapper}>
            <ImageBackground
              style={{ resizeMode: "center", alignSelf: 'center', width: 66, height: 56 }}
              source={require('../../assets/sorosoke_logo.png')}></ImageBackground>
            <Text style={styles.headerTitle}>Sọrọ sókè</Text>

          </View>

        </View>
        <Text style={styles.headerSubTitle}>
          View all human rights violation cases
          </Text>
      </View>
      <View style={styles.main}>
        <View style={{ marginBottom: 15, width: '85%', marginLeft: '15%', flexDirection: 'row', marginTop: 20 }}>

          <TextInput
            style={{
              textAlign: 'center',
              fontSize: 13,
              fontFamily: 'Poppins-SemiBold',
              backgroundColor: '#F3F1F1',
              paddingVertical: 5,
              flex: 6,
              marginRight: 15,
              borderRadius: 20
            }}
            placeholderTextColor="#C2BDBD"
            onChangeText={() => { }}
            placeholder={'Search Cases'}
            textAlignVertical="center"
            secureTextEntry={false}
            keyboardType={props.keyboardType}
          />
          <TouchableOpacity onPress={() => setShowOverlay(true)} style={{ flex: 1, marginRight: 10, marginTop: 10 }}>
            <Image
              style={{ width: 25, height: 15 }}
              source={require('../../assets/filter.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15 }}>
          {!cases ? <ActivityIndicator size="small" color="#008080" /> : <FlatList
            data={cases.data.publicCases}
            refreshing={isFetching}
            onRefresh={handleRefresh}
            renderItem={renderList}
            keyExtractor={(item) => item._id}
            contentContainerStyle={{
              paddingHorizontal: 20
            }}
          />}
        </View>
      </View>
    </View>
    </>
  );
};

export default Case;
