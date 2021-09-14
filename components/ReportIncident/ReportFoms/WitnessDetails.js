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
// import styles from '../steps/styles';
import colors from '../../../constants/Colors';
import NextButton from './NextButton/NextButton';
import AddButton from './AddButton'

const ViolatorReportForm = ({ navigation }, props) => {
    const [showAddViolator, setAddViolator] = useState(true)
    const [showViolatorForm, setViolatorForm] = useState(false)
    const [showViolatorList, setViolatorList] = useState(false)

    //Form state for POST request
    const AddWitness = () => (
        <View style={styles.AddViolator}>
            <Text style={styles.subHeading}>Do you want to add a witness</Text>
            <AddButton  text = 'Add new witness'/>
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
                <ScrollView>
                    <Text>
                        Fill all witness details
                    </Text>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Relationship with Victim
                        </Text>

                        <TextInput
                            placeholder='Enter the relationship with the Victim'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Witness' First Name
                        </Text>

                        <TextInput
                            placeholder='Enter first name'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Witness' Middle Name
                        </Text>

                        <TextInput
                            placeholder='Enter middle name'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Witness' Last Name
                        </Text>

                        <TextInput
                            placeholder='Enter last name'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Witness' Age Group
                        </Text>

                        <TextInput
                            placeholder='Select age group'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Witness' Gender
                        </Text>

                        <TextInput
                            placeholder='Select gender'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Witness' Phone Number
                        </Text>

                        <TextInput
                            placeholder='Enter phone number'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Witness' Email Address
                        </Text>

                        <TextInput
                            placeholder='Enter email address'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Country of Residence
                        </Text>

                        <TextInput
                            placeholder='Select Country of residence'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            State
                        </Text>

                        <TextInput
                            placeholder='Select the state of residence'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Local Government Area
                    </Text>

                        <TextInput
                            placeholder='Select the LGA of residence'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Address
                    </Text>

                        <TextInput
                            placeholder='Enter Address'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Address Landmark
                    </Text>

                        <TextInput
                            placeholder='Enter the closest landmark to the address'
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Religious Orientation
                 </Text>

                        <TextInput
                            placeholder='Select religion'
                            style={styles.IncidentDescription}
                        />
                    </View>

                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Disability
                        </Text>

                        <TextInput
                            placeholder='Select disability, if any'
                        />
                    </View>


                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Witness' occupation
                        </Text>

                        <TextInput
                            placeholder="select witness occupation"
                        />
                    </View>


                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Witness' Organization Type
                        </Text>

                        <TextInput
                            placeholder="select occupation type"
                        />
                    </View>


                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Witness' Organization
                        </Text>

                        <TextInput
                            placeholder="Select organization or type, if any"
                        />
                    </View>


                    <View style={styles.TextField}>
                        <Text style={styles.TextHeading}>
                            Other Details about Witness'
                       </Text>

                        <TextInput
                            placeholder="Enter other detail about the witness"
                            style={{ paddingBottom: 40 }}
                        />
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
                <AddButton />
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
            textAlign: 'center',
            fontSize: 14,
        },


        subHeading: {
            fontWeight: '400',
            fontSize: 14,
            textAlign: 'center',
        },

        addVictimButton: {
            backgroundColor: colors.primary,
            width: 130,
            height: 30,
        },

        addButtonText: {
            alignSelf: 'center',
            fontSize: 11,
            marginTop: 5,
        },

        VictimConfirm: {
            flexDirection: 'column'
        }
    },
)

export default ViolatorReportForm;