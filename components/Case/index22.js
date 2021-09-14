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
  Animated,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import Icon from 'react-native-vector-icons/AntDesign';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import styles from '../../styles/case/style';
import defImg from '../../assets/brutalityImg.png';
import Colors from '../../constants/Colors';

import CaseDetails from './CaseDetails';
import Progress from './Progress';
import Comments from './Comments';
import SingleProgress from './SingleProgress';
import Loading from '../utils/Loading';

import {getCase} from '../../redux/actions/caseActions';

const windowHeight = Dimensions.get('window').height;
const {event, ValueXY} = Animated;
const scrollY = new ValueXY();

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 120;

const initialLayout = {width: Dimensions.get('window').width};

const Index = (props) => {
  const sheetRef = React.useRef(null);
  const [caseData, setCaseData] = useState();
  const [index, setIndex] = useState(0);
  const [selectedProgress, setSelectedProgress] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const caseFetchedData = useSelector((state) => state.case.case);

  const loadingFinished = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    // console.log(caseFetchedData);
    // console.log(props.route.params._id);
    if (typeof props.route.params._id === "string") {
      setIsLoading(true);
      dispatch(getCase(props.route.params._id, loadingFinished, loadingFinished));
    }
  }, []);

  useEffect(() => {
    console.log(caseFetchedData)
  }, [caseFetchedData])

  const openBottomDrawer = (data) => {
    setSelectedProgress(data);
    sheetRef.current.snapTo(0);
  };

  const tabs = [
    {
      title: 'Case Details',
      content: <CaseDetails data={caseFetchedData} />,
    },
    {
      title: 'Progress',
      content: <Progress sheetRef={sheetRef} openBottom={openBottomDrawer} data={caseFetchedData} />,
    },
    {
      title: 'Comments',
      content: <Comments />,
    },
  ];

  const renderHeader = () => {
    const opacity = scrollY.y.interpolate({
      inputRange: [0, 60, 90],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.headerCotainer}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            rippleColor="#007676"
            style={styles.menuBtn}>
            <Icon name="left" size={30} color="#fff" />
          </TouchableOpacity>
          <Animated.View style={{opacity}}>
            <Text style={styles.headerText}>
              {props.route.params.caseTitle}
            </Text>
          </Animated.View>
        </View>
      </View>
    );
  };

  const renderContent = (x) => (
    <View style={styles.contentContiner}>
      <Text style={styles.contentText}>{x}</Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <Loading isVisible={isLoading} />
      {/* <StatusBar barStyle="light-content" /> */}
      <StickyParallaxHeader
        backgroundColor={Colors.primary}
        foregroundImage={defImg}
        headerType="TabbedHeader"
        header={renderHeader}
        renderBody={renderContent}
        scrollEvent={event([{nativeEvent: {contentOffset: {y: scrollY.y}}}], {
          useNativeDriver: false,
        })}
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
        title={props.route.params.caseTitle}
        titleStyle={{
          fontFamily: 'Poppins-SemiBold',
          color: 'white',
          fontSize: 35,
        }}
      />

      <SingleProgress sheetRef={sheetRef} data={selectedProgress} />
    </View>
  );
};

export default Index;
