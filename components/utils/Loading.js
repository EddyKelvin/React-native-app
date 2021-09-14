import React from 'react';
import {View, ActivityIndicator, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../constants/Colors';

const Loading = ({isVisible}) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={Colors.primary} size="large" />
      </View>
    </Modal>
  );
};

export default Loading;
