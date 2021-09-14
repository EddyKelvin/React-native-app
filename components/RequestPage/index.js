import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import AppStatusBar from '../../components/AppStatusBar';

import styles from '../../styles/onBoardEnd/style';
import Colors from '../../constants/Colors';
import {Button} from 'react-native-paper';
import PrimaryButton from '../shared/Button/PrimaryButton';
import OutlineButton from '../shared/Button/OutlineButton';
import SecondaryButton from '../shared/Button/SecondaryButton';

const RequestPage = ({navigation}) => {
  const reportCase = () => {
    navigation.navigate('Main');
  };
  const viewCases = () => {
    navigation.navigate('Main');
  };
 

  return (
    <View style={styles.screen}>
      <View style={styles.shape}></View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/onboardLast.png')}
          style={styles.image}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 40,
        }}>
        <View style={{width: '90%'}}>
        <Text style={styles.heading}>
          {'Do You Want to\nReport A Case Now'}
        </Text>
        <Text style={styles.text}>
          Click on the buttons below to get started free of charge!
        </Text>
        </View>
      
        {/* <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={styles.buttonFull}
            labelStyle={styles.buttonFullText}
            onPress={reportCase}>
            Create Report
          </Button>
          <Button
            mode="outlined"
            style={styles.buttonOutlined}
            labelStyle={styles.buttonOutlineText}
            onPress={viewCases}>
            Skip
          </Button>
        </View> */}
        
        <View style={{ flexDirection: "row", marginBottom: 10, marginTop: 40, justifyContent: "space-between", alignItems: "center" }}>
    

         
          <SecondaryButton
            text="Log In"
            onPress={() => {navigation.navigate('SigninScreen')}}
            style={styles.buttonOutlined}
          />
       

          <PrimaryButton
                text="Sign Up"
                onPress={() => {navigation.navigate('SignupScreen')}}
                style={styles.buttonOutlined}
              />
        </View>
      

         

        {/* <View style={styles.signinView}>
          <Text style={styles.siginDesc}>Have an account?</Text>
          <TouchableOpacity style={{marginLeft: 5}} onPress={signin}>
            <Text style={styles.signinText}>Sign in</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

export default RequestPage;
