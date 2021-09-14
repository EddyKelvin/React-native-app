import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const BackArrow = ({ style, navigation }) => {
    return (
        <TouchableWithoutFeedback
            style={style}
            onPress={() => navigation.goBack()} >

            <Icon name="arrow-left" size={20} color="#fff" />

        </TouchableWithoutFeedback>

    );
}

export default BackArrow;