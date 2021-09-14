import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../../constants/Colors';

const AddButton = (props) => {
    return (
        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>
                {props.text}
                    </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create(
    {
        addButton: {
            backgroundColor: colors.primary,
            width: 130,
            height: 30,
            borderRadius: 25,
            alignSelf: 'center',
            marginBottom: 40,
            marginTop: 35,
        },

        addButtonText: {
            color: '#FFFFFF',
            marginTop: 5,
            alignSelf: 'center',
            textAlign: 'center',
        },

    }
)

export default AddButton;