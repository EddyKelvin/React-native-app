import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import Icon from 'react-native-vector-icons/Ionicons';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import styles from '../../styles/case/style';
import defImg from '../../assets/brutalityImg.png';
import Colors from '../../constants/Colors';

import CaseDetails from './CaseDetails';
import Progress from './Progress';
import Comments from './Comments';
import SingleProgress from './SingleProgress';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 120;

const initialLayout = {width: Dimensions.get('window').width};

const Index = (props) => {
  const sheetRef = React.useRef(null);
  const [caseData, setCaseData] = useState();
  const [index, setIndex] = useState(0);
  const [selectedProgress, setSelectedProgress] = useState();
  const [routes] = React.useState([
    {key: 'caseDetails', title: 'Case Details'},
    {key: 'progress', title: 'Progress'},
    {key: 'comments', title: 'Comments'},
  ]);

  const openBottomDrawer = (data) => {
    setSelectedProgress(data);
    sheetRef.current.snapTo(0);
  };

  // const renderScene = ({route, jumpTo}) => {
  //   switch (route.key) {
  //     case 'caseDetails':
  //       return <CaseDetails jumpTo={jumpTo} data={props.route.params} />;
  //     case 'progress':
  //       return (
  //         <Progress
  //           jumpTo={jumpTo}
  //           sheetRef={sheetRef}
  //           openBottom={openBottomDrawer}
  //         />
  //       );
  //     case 'comments':
  //       return <Comments jumpTo={jumpTo} />;
  //   }
  // };

  // const renderTabBar = (props) => (
  //   <TabBar
  //     {...props}
  //     indicatorStyle={{backgroundColor: 'white'}}
  //     style={{backgroundColor: Colors.primary}}
  //   />
  // );

  const tabs = [
    {
      title: 'Case Details',
      content: <CaseDetails data={props.route.params} />,
    },
    {
      title: 'Progress',
      content: <Progress sheetRef={sheetRef} openBottom={openBottomDrawer} />,
    },
    {
      title: 'Comments',
      content: <Comments />,
    },
  ];

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <StickyParallaxHeader
        backgroundColor={Colors.primary}
        headerType="TabbedHeader"
        tabTextContainerStyle={{
          borderRadius: 0,
        }}
        tabWrapperStyle={{
          padding: 0,
        }}
        tabTextContainerActiveStyle={{
          borderBottomColor: '#fff',
          borderBottomWidth: 2,
        }}
        tabs={tabs}
        title="Police Brutality in Zambia"
        titleStyle={{
          fontFamily: 'Poppins-SemiBold',
          color: 'white',
          fontSize: 35,
        }}
      />

      {/* <View style={{flex: 1}}>
        <View
          style={{height: 100, backgroundColor: Colors.primaryLight}}></View>
        <View style={styles.caseTop}>
          <View style={styles.caseTopHead}>
            <View style={styles.imageWrapper}>
              <Image source={defImg} style={styles.image} />
            </View>
            <View>
              <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followBtnText}>Follow case</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.caseTitle}>Police Brutality</Text>
            <Text style={styles.caseReporter}>Samuel Johnson</Text>
            <Text style={styles.caseType}>Brutality case</Text>
            <View style={styles.extrasWrapper}>
              <View style={styles.extrasItem}>
                <Icon name="location-outline" size={18} color="#50FFFF" />
                <Text style={styles.extrasText}>Awka North, Anambra</Text>
              </View>
              <View style={styles.extrasItem}>
                <Icon name="time-outline" size={18} color="#50FFFF" />
                <Text style={styles.extrasText}>Febuary 20, 2020</Text>
              </View>
            </View>
            <Text style={styles.commentText}>
              <Text style={styles.commentBold}>20</Text> Comments
            </Text>
          </View>
        </View>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </View>
    <SingleProgress sheetRef={sheetRef} data={selectedProgress} /> */}
    </View>
  );
};

export default Index;
