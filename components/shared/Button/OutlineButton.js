import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import Colors from '../../../constants/Colors';
import styles from './styles';

const OutlineButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: Colors.primaryLight,
        borderRadius: 15,
        borderWidth: 1,
      }}
      onPress={props.onPress}
      >
      <Text
        style={{
          color: Colors.primary,
          fontFamily: 'Poppins-SemiBold',
          fontSize: 16,
          ...props.style
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;
