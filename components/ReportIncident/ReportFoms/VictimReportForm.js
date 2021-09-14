import React, { useState } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    FlatList,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import PrimaryButton from '../../shared/Button/PrimaryButton';
import { RadioButton } from 'react-native-paper';
// import styles from '../steps/styles';
import colors from '../../../constants/Colors';
import NextButton from './NextButton/NextButton';
import AddButton from './AddButton'

const VictimReportForm = (props) => {
    const [showVictimConfirm, setVictimConfirm] = useState(true)
    const [showVictimForm, setVictimForm] = useState(false)
    const [showVictimList, setVictimList] = useState(false)
    const [isVictim, setIsVictim] = useState('No')

    const VictimConfirm = () => (
        <View style={styles.VictimConfirm}>
            <Text style={styles.subHeading}>Are you the victim?</Text>

            <View style={styles.RadioButtons}>
                <View
                    style={styles.RadioButton}>
                    <RadioButton
                        value="Yes"
                        status={isVictim === 'Yes' ? 'checked' : 'unchecked'}
                        onPress={() => setIsVictim('Yes')} />

                    <Text style={styles.RadioText}>
                        Yes
                    </Text>
                </View>


                <View
                    style={styles.RadioButton}>
                    <RadioButton
                        value="No"
                        status={isVictim === 'No' ? 'checked' : 'unchecked'}
                        onPress={() => setIsVictim('No')} />

                    <Text style={styles.RadioText}>
                        No
                    </Text>
                </View>
            </View>

            <NextButton
                pressed={() => {
                    setVictimConfirm(false)
                    setVictimForm(true)
                }} />

        </View>
    )


    const VictimForm = () => {
        return (
            <View>
                <ScrollView style={styles.detailsForm}>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Relationship with Victim
                        </Text>

                        <TextInput
                            style={styles.Input}

                            placeholder='Enter the relationship with the Victim'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Victim's First Name
                        </Text>

                        <TextInput
                            style={styles.Input}

                            placeholder='Enter first name'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Victim's Middle Name
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder='Enter middle name'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Victim's Last Name
                        </Text>

                        <TextInput
                            style={styles.Input}

                            placeholder='Enter last name'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Victim's Age Group
                        </Text>

                        <TextInput
                            style={styles.Input}

                            placeholder='Select age group'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Victim's Gender
                        </Text>

                        <TextInput
                            style={styles.Input}

                            placeholder='Select gender'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Victim's Phone Number
                        </Text>

                        <TextInput
                            style={styles.Input}

                            placeholder='Enter phone number'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Victim's Email Address
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder='Enter email address'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Country of Residence
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder='Select Country of residence'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            State
                        </Text>

                        <TextInput
                            style={styles.Input}

                            placeholder='Select the state of residence'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Local Government Area
                    </Text>

                        <TextInput
                            style={styles.Input}

                            placeholder='Select the LGA of residence'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Address
                    </Text>

                        <TextInput
                            style={styles.Input}

                            placeholder='Enter Address'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Address Landmark
                    </Text>

                        <TextInput
                            style={styles.Input}

                            placeholder='Enter the closest landmark to the address'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Religious Orientation
                 </Text>

                        <TextInput
                            placeholder='Select religion'
                            style={styles.IncidentDescription, styles.Input}
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Disability
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder='Select disability, if any'
                        />
                    </View>


                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Victim's occupation
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder="select victim's occupation"
                        />
                    </View>


                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Victim's Organization Type
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder="select occupation type"
                        />
                    </View>


                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Victim's Organization
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder="Select organization or type, if any"
                        />
                    </View>


                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Other Details about Victim
                       </Text>

                        <TextInput
                            placeholder="Enter other detail about the victim"
                            style={styles.Input, { paddingBottom: 40 }}
                        />
                    </View>

                    <NextButton pressed={() => {
                        setVictimForm(false)
                        setVictimList(true)
                    }}
                    />

                </ScrollView>
            </View>)
    };


    const VictimList = () => {
        return (
            <View style={styles.VictimList}>
                <View style={styles.VictimListContainer}>
                    <Text>1. Josiah Amos Pangla</Text>
                </View>

                <View style={styles.ButtonContainer}>
                    <AddButton text="Add new Victim" />
                    <NextButton />
                </View>
            </View>
        )
    };



    return (
        <View>
            <Text style={styles.MainHeading}>
                Fill all Victim's details.
            </Text>
            {showVictimConfirm ? <VictimConfirm /> : null}
            {showVictimForm ? <VictimForm /> : null}
            {showVictimList ? <VictimList /> : null}
        </View>)
};


const styles = StyleSheet.create(
    {
        Input: {
            backgroundColor: '#F3F1F1',
            borderRadius: 10,
            marginBottom: 20,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 50,
        },

        ButtonContainer: {
            alignSelf: 'center',
        },

        VictimReportForm: {
            flex: 1,
            alignSelf: 'center',
        },

        TextHeading: {
            color: '#5E5E5E',
            fontWeight: '400',
        },

        RadioButtons: {
            // flex: 1,
            flexDirection: 'row',
            alignSelf: 'center',
            paddingRight: 80,
        },

        RadioText: {
            alignSelf: 'center'
        },

        RadioButton: {
            // flex: 2,
            flexDirection: 'row',
            marginBottom: 20,
            marginRight: 10,
            marginLeft: 10,
        },

        MainHeading: {
            fontWeight: '600',
            fontSize: 14,
            paddingBottom: 20,
        },

        VictimList: {
            alignSelf: 'center',
            flex: 1,
        },

        subHeading: {
            fontWeight: '400',
            fontSize: 14,
            marginTop: 20,
            marginBottom: 10,
        },

        VictimConfirm: {
            flexDirection: 'column',
            alignSelf: 'center',
        }
    },
)

export default VictimReportForm;