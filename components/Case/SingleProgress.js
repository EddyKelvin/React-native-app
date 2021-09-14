import React from 'react';
import {View, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import moment from 'moment';

import styles from '../../styles/case/style';
import Colors from '../../constants/Colors';

const SingleProgress = ({sheetRef, data}) => {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}>
      {data && (
        <View>
          <Text style={styles.bottomTitle}>{data.title}</Text>
          <Text style={styles.bottomTime}>{moment(data.time).format('LLL')}</Text>
          <Text style={styles.bottomDesc}>{data.description}</Text>
        </View>
      )}
    </View>
  );

  const renderHeader = () => (
    <View style={styles.bottomSwiperHead}>
      <View style={styles.bottomSwipebar}></View>
    </View>
  );

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[450, 300, 0]}
      initialSnap={2}
      renderContent={renderContent}
      renderHeader={renderHeader}
    />
  );
};

export default SingleProgress;
