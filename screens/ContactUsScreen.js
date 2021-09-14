import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';

// Component
import ContactUs from '../components/ContactUs';

const ContactUsScreen = ({navigation, route}) => {
  return <ContactUs navigation={navigation} route={route} />;
};

export default ContactUsScreen;
