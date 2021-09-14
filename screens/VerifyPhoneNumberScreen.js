import React, {useEffect} from 'react';

// Component
import VerifyPhoneNumber from '../components/VerifyPhoneNumber';

const VerifyPhoneNumberScreen = ({navigation, route}) => {
  return (
    <VerifyPhoneNumber navigation={navigation} route={route} />
  );
};

export default VerifyPhoneNumberScreen;
