import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';

// Component
import Cases from '../components/Cases';

const CasesScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            color="#000"
            iconName={Platform.OS === 'android' ? 'menu' : 'menu'}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  });
  return <Cases navigation={navigation} type='all' />;
};

export default CasesScreen;
