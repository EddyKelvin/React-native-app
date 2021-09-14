import React, {useEffect} from 'react';

// Component

import UpdatePassword from '../components/UpdatePassword';

const UpdatePasswordScreen = ({navigation, route}) => {
  return (
    <UpdatePassword navigation={navigation} route={route} />
  );
};

export default UpdatePasswordScreen;
