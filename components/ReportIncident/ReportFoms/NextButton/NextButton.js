import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import colors from '../../../../constants/Colors';

import nextImage from '../../../../assets/reply.png';

const NextButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.nextButton}
            onPress={props.pressed}>

            <Image
                source={nextImage}
                style={styles.buttonImage}
            />

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    nextButton: {
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: colors.formButton,
        // flex: 1,
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 120,
        marginTop: 20,
    },

    buttonImage : {
        width: 18,
        height: 15,
        // alignSelf: 'center', 
    }
});

export default NextButton