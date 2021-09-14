import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../../constants/Colors';
import styles from './styles';

const GradientButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.grdtBtn,
        ...props.style,
      }}
      // disabled={props.disabled ? props.disabled : false}
      onPress={props.onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[Colors.primary, Colors.primaryLight]}
        style={styles.grdtContainer}>
        <Text style={styles.grdtText}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
