import React from 'react';
import { View, StyleSheet, Image , TouchableWithoutFeedback} from 'react-native';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import sorosokeImg from '../assets/profile.png';
import Colors from '../constants/Colors';
import AppStatusBar from '../components/AppStatusBar';
import { ScrollView } from 'react-native-gesture-handler';
// import styles from '../components/ReportIncident/steps/styles';

const DrawerContent = (props) => {
  return (
    <View style={styles.sidebar}>
      <AppStatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ScrollView {...props} style={{ backgroundColor: "#fff"}}>
        <View style={{}}>
          <View style={{height: 200, justifyContent: "center", alignItems: "center", backgroundColor: "#008080"}}>
            <Avatar.Image source={sorosokeImg} size={76} style={{
              backgroundColor: '#B28A6B',
              marginBottom: 10,
              marginTop: 40
            }} />
            <View>
              <Text style={{ color: 'white', marginBottom: 2, fontSize: 14, fontWeight: "600" }}>Michelle Omogun</Text>
              <Text style={{ color: 'white', textAlign: "center", fontSize: 13 }}>@vonmishka</Text>
            </View>
          </View>

            <View>
              <ScrollView>
                <View style={{flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", paddingTop: 60, paddingHorizontal: 10}}>
                  <View style={{alignItems: "center", width: "40%", marginBottom: 40}}>
                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Cases')}>
                      <View style={{alignItems: "center", width: "100%",}}>
                        <Image source={require("../assets/home.png")} style={{ width: 45, height: 40, zIndex: 1, margin: 4}} />
                        <Text style={{color: "#008080", fontSize: 14, fontWeight: "400", marginTop: 4}}>Home</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={{alignItems: "center", width: "40%", marginBottom: 40}}>
                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Profile')}>
                      <View style={{alignItems: "center", width: "100%",}}>
                        <Image source={require("../assets/profile-menu.png")} style={{ width: 40, height: 40, zIndex: 1, margin: 4}} />
                        <Text style={{color: "#008080", fontSize: 14, fontWeight: "400", marginTop: 4}}>My Profile</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={{alignItems: "center", width: "40%", marginBottom: 40}}>
                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('MyCasesScreen')}>
                      <View style={{alignItems: "center", width: "100%",}}>
                        <Image source={require("../assets/cases.png")} style={{ width: 45, height: 40, zIndex: 1, margin: 4}} />
                        <Text style={{color: "#008080", fontSize: 14, fontWeight: "400", marginTop: 4}}>My Cases</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={{alignItems: "center", width: "40%", marginBottom: 40}}>
                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('ReportIncident')}>
                      <View style={{alignItems: "center", width: "100%",}}>
                        <Image source={require("../assets/speaking.png")} style={{ width: 45, height: 40, zIndex: 1, margin: 4}} />
                        <Text style={{color: "#008080", fontSize: 14, fontWeight: "400", marginTop: 4, textAlign: "center"}}>Submit a Report</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={{alignItems: "center", width: "40%", marginBottom: 40}}>
                    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('ContactUsScreen')}>
                      <View style={{alignItems: "center", width: "100%",}}>
                        <Image source={require("../assets/contact.png")} style={{ width: 45, height: 40, zIndex: 1, margin: 4}} />
                        <Text style={{color: "#008080", fontSize: 14, fontWeight: "400", marginTop: 4}}>Contact Us</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={{alignItems: "center", width: "40%", marginBottom: 40}}></View>
                </View>
              </ScrollView>
            </View>
         </View>
      </ScrollView>
      <TouchableWithoutFeedback onPress={() => console.log("logout button clicked")}>
        <View style={{height: 60, backgroundColor: "#FFC866", justifyContent: "center", alignItems: "center"}}>
          <Text style={{color: "#555353", fontSize: 18, fontWeight: "500"}}>Logout</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: Colors.primary, flex: 1, overflow: 'visible', borderRadius: 30
  },
  drawerContent: {
    backgroundColor: "#fff",
    borderRadius: 30
  },
  userInfoSection: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    marginTop: -40,
    borderTopRightRadius: 30,
    
   
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,


  },
  bottomDrawerSection: {
    backgroundColor: "#FFC866",
    paddingVertical: 10,
    textAlign: "center",

    borderBottomRightRadius: 30,
    


  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  drawerTop: {
    width: '100%',
    backgroundColor: Colors.primaryLight,
  },

  drawerItem: { width: "80%", fontSize: 14, fontFamily: "poppins-bold", paddingLeft: "20%", marginLeft: "10%", borderColor: Colors.primary, borderRadius: 5 }
});

export default DrawerContent;
