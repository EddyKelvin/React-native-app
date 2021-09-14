import React, {useEffect} from 'react';

// Component
import Signin from '../components/Signin';

const SigninScreen = ({navigation, route}) => {
  return (
    <Signin navigation={navigation} route={route} />
  );
};

export default SigninScreen;
