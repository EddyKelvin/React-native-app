import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/Feather';

import styles from '../../styles/reportsDashboard/style';
import AppStatusBar from '../../components/AppStatusBar';
import Colors from '../../constants/Colors';

// Images
import brutalityImage from '../../assets/brutalityImg.png';
import rapeImage from '../../assets/rapeImg.png';
import domesticImage from '../../assets/domesticImg.png';
import killingImage from '../../assets/killingImg.png';
import kidnapImage from '../../assets/kidnapImg.png';
import fraudImage from '../../assets/fraudImg.png';
import Loading from '../utils/Loading';
import { ScrollView } from 'react-native-gesture-handler';


const Dash = ({navigation}) => {

  const [isLoading,setIsLoading] = useState("");
  const caseCategories = [
    {
      title: 'Brutality',
      image: brutalityImage,
    },
    {
      title: 'Killings',
      image: killingImage,
    },
    {
      title: 'Rape',
      image: rapeImage,
    },
    {
      title: 'Domestic Violence',
      image: domesticImage,
    },
    {
      title: 'Kidnap',
      image: kidnapImage,
    },
    {
      title: 'Fraud',
      image: fraudImage,
    },
  ];

  const renderCategories = () => {
    return caseCategories.map((el) => (
      <TouchableOpacity
        style={styles.caseCard}
        key={el.title}
        onPress={() => navigation.navigate('ReportForm')}>
        <Image source={el.image} style={styles.caseImg} />
        <Text style={styles.caseCardTitle}>{el.title}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.screen}>
      {/* <Overlay content={<Filters />} style={{ marginTop: '50%' }} close={() => { setShowOverlay(false) }} show={showOverlay} /> */}
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
          
            <Text style={styles.headerTitle}>Sọrọ sókè</Text>

          </View>

        </View>
        <Text style={styles.headerSubTitle}>
          View all human rights violation cases
          </Text>
      </View>
      <View style={styles.main}>
        <View style={{ marginBottom: 15, width: '85%', marginLeft: '15%', flexDirection: 'row', marginTop: 20 }}>

         
        </View>
        
      </View>
     
    </View>
  );
};

export default Dash;
