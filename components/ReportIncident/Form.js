import React, { useState, Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AnimatedMultistep from 'react-native-animated-multistep';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Colors from '../../constants/Colors';

import styles from '../../styles/reportsForm/style';
import BackArrow from '../BackArrow';
import Overlay from '../Overlay';

import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import Step4 from './steps/step4';
import Step5 from './steps/step5';

import Details from './ReportFoms/Details/Details';
import VictimForm from './ReportFoms/VictimReportForm';
import ViolatorForm from './ReportFoms/ViolatorReportForm';



const allSteps = [
  { name: 'step 1', component: Step1 },
  { name: 'step 2', component: Step2 },
  { name: 'step 3', component: Step3 },
  { name: 'step 4', component: Step4 },
  { name: 'step 5', component: Step5 },
];

const Form = ({ navigation }) => {
  const [steps, setSteps] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'Details', title: 'Details' },
    { key: 'Victim', title: 'Victim(s)' },
    { key: 'Violator', title: 'Violator(s)' },

  ]);


  const layout = useWindowDimensions();


  const Progres = () => (content(<Details />));
  const Victim = () => (content(<VictimForm />));
  const Violator = () => (content(<ViolatorForm />));



  const renderScene = SceneMap({
    Details: Progres,
    Victim: Victim,
    Violator: Violator
  });

  const renderTabBar = props => {

    return (

      <TabBar
        {...props}

        indicatorStyle={{ backgroundColor: '#fff' }}
        style={{
          backgroundColor: Colors.primary,

        }}
        showLabel={false}
        tabBarVisible={false}
        renderLabel={({ route, focused, color }) => {

          return (!['Victim1', 'Victim2'].includes(route.key)) ? (
            <Text style={{ color, margin: 8, fontSize: 14 }}>
              {route.title}
            </Text>
          ) : null
        }

        }
      />

    )
  }

  const content = (x) => {
    return (<View style={styles.main}>
      <View style={{ marginBottom: 15, width: '80%', marginLeft: '10%', marginRight: '10%', flexDirection: 'row', marginTop: 20 }}>

        {x}
      </View>
      <View style={{ marginTop: 15 }}>

      </View>
    </View>)
  };

  return (
    <View style={styles.screen}>
      <Overlay content={<Text>Heis</Text>} style={{ marginTop: '50%' }} close={() => { setShowOverlay(false) }} show={showOverlay} />
      <View style={styles.header}>
        <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 40 }}>
          <BackArrow navigation={navigation}></BackArrow>
          <View style={styles.headerWrapper}>

            <Text style={styles.headerTitle}>Report a Violation</Text>

          </View>

        </View>
        <Text style={styles.headerSubTitle}>
          Fill  in the required fields below to submit violation
          report to the NBA Team
        </Text>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}

      />



    </View>
  );
};


export default Form;
