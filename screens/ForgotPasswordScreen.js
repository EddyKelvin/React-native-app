import React, {useEffect} from 'react';

// Component
import ForgotPassword from '../components/ForgotPassword';

const ForgotPasswordScreen = ({navigation, route}) => {
  return (
    <ForgotPassword navigation={navigation} route={route} />
  );
};

export default ForgotPasswordScreen;
