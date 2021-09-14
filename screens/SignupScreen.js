import React, {useEffect} from 'react';

// Component
import Signup from '../components/Signup';

const SignupScreen = ({navigation, route}) => {
  return (
    <Signup navigation={navigation} route={route} />
  );
};

export default SignupScreen;
