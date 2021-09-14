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


const QuickReport = ({ navigation }, props) => {
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };


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

                        <Text style={dashboardStyles.headerTitle}>Quick Report</Text>

                    </View>

                </View>
                <Text style={dashboardStyles.headerSubTitle}>
                    Send us a short report of violation,
                    to create awareness
                </Text>

            </View>

            <View style={dashboardStyles.main}>
                <View>
                    <Text style={styles.SubHeading}>
                        Fill in the Violation details
            </Text>

                    <ScrollView style={styles.QuickReportForm}>

                        <View style={styles.Pickers}>
                            {/* Date Picker */}
                            <View style={styles.TextField, styles.DatePicker} >
                                <Text style={styles.TextHeading}>
                                    Date of incident.
                                </Text>

                                <TouchableOpacity
                                    onPress={() => showDatepicker()}
                                    style={styles.PickerButton}>
                                    <Text style={styles.PickerDescription}>Select Date</Text>
                                </TouchableOpacity>
                            </View>


                            {/* Time Picker */}
                            <View style={styles.TextField, styles.TimePicker}>
                                <Text style={styles.TextHeading}>
                                    Estimated Time.
                                </Text>

                                <TouchableOpacity
                                    onPress={() => showTimepicker()}
                                    style={styles.PickerButton}
                                    style={styles.Input}>
                                    <Text style={styles.PickerDescription}>
                                        Select Time
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                        {/* Incident Category */}
                        <View style={styles.TextField}>
                            <Text style={styles.TextHeading}>
                                Category of case
                        </Text>

                            <TextInput
                                style={styles.Input}
                                placeholder='Select case category'
                            />
                        </View>

                        {/* Country */}
                        <View style={styles.TextField}>
                            <Text style={styles.TextHeading}>
                                Country
                    </Text>

                            <TextInput
                                style={styles.Input}
                                placeholder='Select the country where the incident took place'
                            />
                        </View>

                        {/* State */}
                        <View style={styles.TextField}>
                            <Text style={styles.TextHeading}>
                                State
                    </Text>

                            <TextInput
                                style={styles.Input}
                                placeholder='Select the state where the incident took place'
                            />
                        </View>

                        {/* Incident State */}
                        <View style={styles.TextField}>
                            <Text style={styles.TextHeading}>
                                Local Government Area
                    </Text>

                            <TextInput
                                style={styles.Input}

                                placeholder='Select the lGA where the incident took place'
                            />
                        </View>

                        {/* Incident Address */}
                        <View style={styles.TextField}>
                            <Text style={styles.TextHeading}>
                                Address
                    </Text>

                            <TextInput
                                style={styles.Input}

                                placeholder='Enter the address where the incident took place'
                            />
                        </View>

                        {/* Incident Address Landmark */}
                        <View style={styles.TextField}>
                            <Text style={styles.TextHeading}>
                                Address Landmark
                    </Text>

                            <TextInput
                                style={styles.Input}

                                placeholder='Enter the closest landmark to the address'
                            />
                        </View>

                        {/* Incident description */}
                        <View style={styles.TextField}>
                            <Text style={styles.TextHeading}>
                                Describe the incident
                    </Text>

                            <TextInput
                                placeholder='Enter every detail about the violation'
                                style={styles.IncidentDescription, styles.Input}

                            />
                        </View>

                        {/* Additional details/help */}
                        <View style={styles.TextField}>
                            <Text style={styles.TextHeading}>
                                How do you want us to help you?
                            </Text>

                            <TextInput
                                style={styles.Input}

                                placeholder='Enter details about the help you want'
                            />
                        </View>

                        <PrimaryButton
                            text="Submit"
                            onPress={() => navigation.navigate('Congratulations')}
                        />
                    </ScrollView>

                    {/* Show DateTimePicker if "show" is true. */}
                    {show && <DateTimePicker
                        testID="dateTimePicker"
                        value={new Date()}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />}
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

    Input: {
        backgroundColor: '#F3F1F1'

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


export default QuickReport;