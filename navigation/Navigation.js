import React, { Fragment, useState, useEffect } from 'react';
import {
  NavigationContainer,
  useNavigationState,
  useFocusEffect,
} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import OnboardingScreen from '../screens/OnboardingScreen';
import OnboardRequestScreen from '../screens/OnboardRequestScreen';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import ReportDashScreen from '../screens/ReportDashScreen';
import ReportTypeScreen from '../screens/ReportTypeScreen';
import ReportFormScreen from '../screens/ReportFormScreen';
import CasesScreen from '../screens/CasesScreen';
import FollowedCasesScreen from '../screens/FollowedCasesScreen';
import MyCasesScreen from '../screens/MyCasesScreen';
import CaseScreen from '../screens/CaseScreen';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import CaseAnalytics from '../screens/CaseAnalyticsScreen';
import LoadingScreen from '../screens/Loading';
import QuickReportScreen from '../screens/QuickReportScreen';
import CongratulationScreen from '../screens/CongratulationScreen';
import EvidenceScreen from '../screens/EvidenceScreen';

import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerifyPhoneNumberScreen from '../screens/VerifyPhoneNumberScreen';

import UpdatePasswordScreen from '../screens/UpdatePasswordScreen';


import DrawerContent from '../screens/DrawerContent';

// Colors
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryLight,
  },
  headerTintColor: 'white',
};

const CreateReportNavigator = () => {
  return (

    <Stack.Navigator>
      <Stack.Screen
        name="ReportType"
        component={ReportTypeScreen}
        options={{ title: 'Report Type', headerShown: false }}
      />

      <Stack.Screen
        name="QuickReport"
        component={QuickReportScreen}
        options={{ title: 'Quick Report', headerShown: false }}
      />

      <Stack.Screen
        name="ReportDashboard"
        component={ReportDashScreen}
        options={{ title: 'Report Incident', headerShown: false }}
      />

      <Stack.Screen
        name="ReportForm"
        component={ReportFormScreen}
        options={{ title: 'Report Form', headerShown: false }}
      />

      <Stack.Screen
        name="Evidence"
        component={EvidenceScreen}
        options={{ title: 'Evidence', headerShown: false }}
      />

      <Stack.Screen
        name="Congratulations"
        component={CongratulationScreen}
        options={{ title: 'Congratulations', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// const casesStack = () => {
//   return (
//     <Stack.Navigator>
//     <Stack.Screen
//       name="CaseScreen"
//       component={CaseScreen}
//     />
//   </Stack.Navigator>
//   )
// }

const CasesNavigatior = (props) => {
  console.log(props.route);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CasesScreen"
        component={CasesScreen}
        options={({ route }) => {
          return {
            headerTintColor: 'white',
            headerShown: false,
            headerBackTitleStyle: false,
          };
        }}
      />
      <Stack.Screen
        name="FollowedCasesScreen"
        component={FollowedCasesScreen}
        options={{ title: 'Followed Cases' }}
      />
      <Stack.Screen
        name="MyCasesScreen"
        component={MyCasesScreen}
        options={{ title: 'My Cases' }}
      />
      {/* {casesStack()} */}
    </Stack.Navigator>
  );
};

const FollowedCasesNavigatior = (props) => {
  console.log(props.route);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FollowedCasesScreen"
        component={FollowedCasesScreen}
        options={{ title: 'Followed Cases' }}
      />
      {/* {casesStack()} */}
    </Stack.Navigator>
  );
};


const DrawerNavigation = () => {
  // const state = useNavigationState(state => state);
  // useFocusEffect(
  //   React.useCallback(() => {
  //     console.log("hereee")
  //   }, [])
  // );
  // console.log(state.routes)
  return (
    <Drawer.Navigator
      drawerStyle={{

        borderRadius: 30
      }}
      drawerContentOptions={{
        activeTintColor: '#4285F4',
        inactiveTintColor: 'rgba(0,0,0,0.69)',
        labelStyle: {
          fontFamily: 'Lato-Medium',
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Cases"
        component={CasesNavigatior}
        options={{
          title: 'Cases',
        }}
      />
      <Drawer.Screen
        name="ReportIncident"
        component={CreateReportNavigator}
        options={{
          title: 'Report Incident',
        }}
      />
      <Drawer.Screen
        name="FollowedCasesScreen"
        component={FollowedCasesNavigatior}
        options={{
          title: 'Followed Cases',
        }}
      />
      <Drawer.Screen
        name="MyCasesScreen"
        component={MyCasesScreen}
        options={{ title: 'My Cases' }}
      />
      <Drawer.Screen
        name="ContactUsScreen"
        component={ContactUsScreen}
        options={{ title: 'Contact Us' }}
      />
    </Drawer.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      // inactiveColor="#3e2465"
      barStyle={{ backgroundColor: Colors.primary }}>
      <Tab.Screen
        name="Home"
        component={DrawerNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: Colors.primary,
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={CaseAnalytics}
        options={{
          tabBarLabel: 'Analytics',
          tabBarColor: Colors.primary,
          tabBarIcon: ({ color }) => (
            <Icon name="stats-chart-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Analytics',
          tabBarColor: Colors.primary,
          tabBarIcon: ({ color }) => (
            <Icon name="stats-chart-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TopNavigation = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    // console.log(auth)
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      console.log(value);
      value = null;
      if (value === null) {
        // AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  useEffect(() => {
    console.log(auth)
  }, [auth.isAuthenticated]);

  if (isFirstLaunch === null) {
    return null;
  }
  return (
    <Stack.Navigator headerMode="none">
      {isFirstLaunch && <Stack.Screen name="Onboarding" component={OnboardingScreen} />}
      {isFirstLaunch && <Stack.Screen
        name="OnboardingRequest"
        component={OnboardRequestScreen}
        options={{ title: 'OnboardingRequest' }}
      />}
      {!isFirstLaunch && <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={({ route }) => {
          return {
            headerTintColor: 'white',
            headerShown: false,
            headerBackTitleStyle: false,
          };
        }}
      />}
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={({ route }) => {
          return {
            headerTintColor: 'white',
            headerShown: false,
            headerBackTitleStyle: false,
          };
        }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={({ route }) => {
          return {
            headerTintColor: 'white',
            headerShown: false,
            headerBackTitleStyle: false,
          };
        }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={({ route }) => {
          return {
            headerTintColor: 'white',
            headerShown: false,
            headerBackTitleStyle: false,
          };
        }}
      />

      <Stack.Screen
        name="VerifyPhoneNumber"
        component={VerifyPhoneNumberScreen}
        options={({ route }) => {
          return {
            headerTintColor: 'white',
            headerShown: false,
            headerBackTitleStyle: false,
          };
        }}
      />

      <Stack.Screen
        name="UpdatePassword"
        component={UpdatePasswordScreen}
        options={({ route }) => {
          return {
            headerTintColor: 'white',
            headerShown: false,
            headerBackTitleStyle: false,
          };
        }}
      />

      <Stack.Screen name="Main" component={DrawerNavigation} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="CaseScreen" component={CaseScreen} />
    </Stack.Navigator>
  );

};

const Navigation = () => {
  return (
    <NavigationContainer>
      <TopNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
