import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';

//component
import Dash from '../components/ReportIncident/Dash';

const ReportDashScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu7' : 'ios-menu'}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  });
  return (
    <Dash navigation={navigation}/>
  );
};

export default ReportDashScreen;
