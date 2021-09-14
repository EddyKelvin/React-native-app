//Dependencies

//React
import React, { useState } from 'react';

//Components
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Button,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import NextButton from '../NextButton/NextButton';



const Details = (props) => {

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    //Victim data
    const [victimFirstName, setvictimFirstName] = useState("");
    const [victimMiddleNamme, setVictimMiddleNae] = useState("");
    const [victimLastNamme, setVictimLastName] = useState("");


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
        <View>
            <Text style={styles.SubHeading}>
                Fill all the violation details
            </Text>

            <ScrollView style={styles.DetailsForm}>

                <View style={styles.Pickers}>
                    {/* Date Picker */}
                    <View style={styles.TextField, styles.DatePicker} >
                        <Text style={styles.TextHeading}>
                            Date of incident.
                    </Text>

                        <TouchableOpacity
                            onPress={() => showDatepicker()}
                            style={styles.PickerButton, styles.Input}>
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
                            style={styles.PickerButton, styles.Input}>
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
                        style = {styles.Input}
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

                <NextButton />

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
    )
};

const styles = StyleSheet.create({
    Input: {
        backgroundColor: '#F3F1F1',
        borderRadius: 10,
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 50,
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
        marginRight: 10,
    },

    TimePicker: {
        marginLeft: 60,
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
        marginBottom: 10
    }
});

export default Details