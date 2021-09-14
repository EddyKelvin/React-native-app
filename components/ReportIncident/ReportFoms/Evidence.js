import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground, StyleSheet, TextInput, Button } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/Feather';
import FormStyles from '../FormStyles'

import dashboardStyles from '../../../styles/reportsDashboard/style';
import AppStatusBar from '../../../components/AppStatusBar';
import Colors from '../../../constants/Colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import PrimaryButton from '../../shared/Button/PrimaryButton'
import folderIcon from '../../../assets/foldericon.png';
import AddButton from './AddButton';
import NextButton from './NextButton/NextButton';

const Evidence = ({ navigation }, props) => {
    return (
        <View style={dashboardStyles.screen}>
            <AppStatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View style={styles.header}>
                <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 40 }}>

                    <TouchableRipple
                        onPress={() => navigation.toggleDrawer()}
                        rippleColor="#fff"
                        style={dashboardStyles.menuBtn}>
                        <Icon name="menu" size={30} color="#fff" />
                    </TouchableRipple>

                    <View style={dashboardStyles.headerWrapper}>

                        <Text style={dashboardStyles.headerTitle}>Evidence</Text>
                    </View>

                </View>

                <Text style={dashboardStyles.headerSubTitle}>
                    Provide any evidence that can support
                    your report
                </Text>

            </View>

            <View style={dashboardStyles.main}>
                <View>
                    <Text style={styles.SubHeading}>
                        Attach a maximum of 5 files
                    </Text>

                    <View>
                        <Image source={folderIcon} />
                        <AddButton />
                        <NextButton />
                    </View>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#fff',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },

    header: {
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 15
    },


    PickerDescription: {
        fontSize: 14,
        fontWeight: '100',
        marginBottom: 20,
        marginTop: 10,
    },

    TextHeading: {
        color: '#5E5E5E',
        fontWeight: '400',
        fontSize: 15,
    },

    Pickers: {
        display: 'flex',
        flexDirection: 'row',
    },

    DatePicker: {
        flex: 2.
    },

    TimePicker: {
        flex: 2.
    },

    PickerButton: {
        backgroundColor: '#F3F1F1',
    },

    TextField: {
        marginTop: 10,
        marginBottom: 10,
    },

    IncidentDescription: {
        height: 200,
    },

    SubHeading: {
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10,
        marginTop: 15,
    },

    QuickReportForm: {
        marginBottom: 65,
    }
});


export default Evidence;