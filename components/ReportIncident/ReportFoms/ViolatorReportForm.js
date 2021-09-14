import React, { useState } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    FlatList,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import PrimaryButton from '../../shared/Button/PrimaryButton';
// import styles from '../steps/styles';
import colors from '../../../constants/Colors';
import NextButton from './NextButton/NextButton';
import AddButton from './AddButton'

const ViolatorReportForm = ({ navigation }, props) => {
    const [showAddViolator, setAddViolator] = useState(true)
    const [showViolatorForm, setViolatorForm] = useState(false)
    const [showViolatorList, setViolatorList] = useState(false)

    //Form state for POST request

    const AddViolator = () => (
        <View style={styles.AddViolator}>
            <Text style={styles.subHeading}>Do you want to add a suspected violator for this incident</Text>
            <AddButton text="Add new suspect" />
            <NextButton pressed={() => {
                setAddViolator(false)
                setViolatorForm(true)
            }} />
        </View>
    )

    // styles.detailsForm
    const ViolatorsForm = () => {
        return (
            <View>
                <ScrollView style={styles.Form}>
                    <Text>

                    </Text>

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
                            Suspect's First Name
                        </Text>

                        <TextInput
                            style={styles.Input}

                            placeholder='Enter first name'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Suspect's Middle Name
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder='Enter middle name'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Suspect's Last Name
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder='Enter last name'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Suspect's Age Group
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder='Select age group'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Suspect's Gender
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder='Select gender'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Suspect's Phone Number
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder='Enter phone number'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Suspect's Email Address
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
                            Suspect's occupation
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder="select victim's occupation"
                        />
                    </View>


                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Suspect's Organization Type
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder="select occupation type"
                        />
                    </View>


                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Suspect's Organization
                        </Text>

                        <TextInput
                            style={styles.Input}
                            placeholder="Select organization or type, if any"
                        />
                    </View>


                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Other Details about Suspect
                       </Text>

                        <TextInput
                            placeholder="Enter other detail about the victim"
                            style={styles.Input, { paddingBottom: 40 }} />
                    </View>

                    <NextButton pressed={() => {
                        setViolatorForm(false)
                        setViolatorList(true)
                    }}
                    />

                </ScrollView>
            </View>)
    };


    const ViolatorList = () => {
        return (
            <View>
                <Text>1. Joseph Amos Pangla</Text>
                <AddButton text='Add new suspect' />
                <NextButton pressed={() => navigation.navigate("Evidence")} />
            </View>
        )
    };



    return (
        <View>
            <Text style={styles.MainHeading}>
                Fill all Violator's details.
            </Text>
            {showAddViolator ? <AddViolator /> : null}
            {showViolatorForm ? <ViolatorsForm /> : null}
            {showViolatorList ? <ViolatorList /> : null}
        </View>)
};


const styles = StyleSheet.create(
    {
        Form: {
            alignSelf: 'center',
        },

        Input: {
            backgroundColor: '#F3F1F1',
            borderRadius: 10,
            marginBottom: 20,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 50,
        },

        TextHeading: {
            color: '#5E5E5E',
            fontWeight: '400',

        },

        RadioButtons: {
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center'
        },

        RadioText: {
            alignSelf: 'center'
        },

        RadioButton: {
            flex: 2,
            flexDirection: 'row',
            marginBottom: 20,
        },

        MainHeading: {
            fontWeight: '600',
            fontSize: 14,
            marginBottom: 20,
        },


        subHeading: {
            fontWeight: '400',
            fontSize: 14,
            textAlign: 'center',
            color: '#5E5E5E',
        },

        VictimConfirm: {
            flexDirection: 'column'
        }
    },
)

export default ViolatorReportForm;