import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Button} from 'react-native-paper';
import AppIntroSlider from 'react-native-app-intro-slider';

import OnBoard1 from '../assets/SVG/OnBoard1';
import OnBoard2 from '../assets/SVG/OnBoard2';
import OnBoard3 from '../assets/SVG/OnBoard3';

import AppStatusBar from '../components/AppStatusBar';
import styles from '../styles/onboarding/style';
const slides = [
  {
    key: 'one',
    subTitle: 'Get Started',
    title: 'Want to\nReport a Violation?',
    text:
      'Have your rights been violated or that of someone you know?',
    image: require('../assets/onboard1.png'),
    backgroundColor: '#fff',
    Component: OnBoard1
  },
  {
    key: 'two',
    subTitle: 'Get Started',
    title: 'Submit an\nIncidence Report',
    text:
      'Fill in all the details required in the violation report forms and submit anywhere anytime',
    image: require('../assets/onboard3.png'),
    backgroundColor: '#fff',
    Component: OnBoard2
  },
  {
    key: 'three',
    subTitle: 'Get Started',
    title: 'Get Justice\nThrough Sorosoke',
    text:
      'Our team of NBA officials will followup your case and help you get Justice',
    image: require('../assets/onboard2.png'),
    backgroundColor: '#fff',
    Component: OnBoard3
  },
];

const OnboardingScreen = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.slideContainer}>
        <Text style={styles.subTitleStyles}>{item.subTitle}</Text>
        <Text style={styles.titleStyles}>{item.title}</Text>
        <View style={styles.slideImage}>
        <Image
        style={{
          width: 250,
          height: 250,
          resizeMode: 'contain'
        }}
        // style={styles.tinyLogo}
        source={item.image}
      />
          {/* <item.Component width={220} height={220} /> */}
          <Text style={styles.textStyles}>{item.text}</Text>
        </View>
      </View>
    );
  };
  const nextButton = () => {
    return (
      <Button style={styles.nextBtn}>
        <Text style={styles.nextBtnText}>Next</Text>
      </Button>
    );
  };
  const doneButton = () => {
    return (
      <Button style={styles.nextBtn}>
        <Text style={styles.nextBtnText}>Finish</Text>
      </Button>
    );
  };
  const skipButton = () => {
    return (
      <View style={styles.skipBtn}>
        <Text style={styles.skipBtnText}>Skip</Text>
      </View>
    );
  };
  const onDone = () => {
    navigation.replace('OnboardingRequest');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <AppStatusBar backgroundColor="#fff" barStyle="dark-content" />
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        activeDotStyle={{backgroundColor: '#FFC866',
        width: 50}}
        dotStyle={{
          backgroundColor: 'rgba(0, 0, 0, .1)',
          width: 50,
        }}
        bottomButton={true}
        showSkipButton={true}
        renderNextButton={nextButton}
        renderSkipButton={skipButton}
        renderDoneButton={doneButton}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
