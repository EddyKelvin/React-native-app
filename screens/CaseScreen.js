import React, {useEffect} from 'react';
import { Text } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

// Component
import Case from '../components/Case';

const CaseScreen = ({navigation, route}) => {
  return (
    <Case navigation={navigation} route={route} />
  );
};

export default CaseScreen;
