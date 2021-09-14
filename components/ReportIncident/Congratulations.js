import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import ClapImage from '../../assets/clapping.png';
import PrimaryBiutton from '../shared/Button/PrimaryButton';

const Congratulations = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image
                    styles={styles.congratulationsImage}
                    source={ClapImage}
                />

                <Text style={styles.mainHeading}>
                    Congratulations!!!
                </Text>
            </View>

            <View style={styles.feedbackContainer}>
                <Text style={styles.reportID}>
                    Report ID-0042DSE
                </Text>

                <Text style={styles.sucessText}>
                    has been successfully saved.{"\n"}
                    Our representatives will contact you soon.
                </Text>

                <PrimaryBiutton
                    text = "Finish"
                    onPress = {() => navigation.navigate('ReportTypeScreen')}
                />

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.primary,
        flex: 1,
        alignContent: 'center',
    },

    imageContainer: {
        flex: 1.5,
        marginTop: 70,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent : 'center',
        alignContent: 'center'
    },

    feedbackContainer: {
        flex: 2,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },

    congratulationsImage : {
        alignSelf: 'center',
        alignContent: 'center',
        alignSelf: 'center'
        
    },

    mainHeading : {
        fontSize : 32,
        color: '#FFFFFF',
        marginTop : 10,
        fontWeight: '400',
    },

    reportID : {
        fontSize : 24,
        alignSelf: 'center',
        fontWeight: '600',
        marginTop: 40,
        color: '#555353',
        marginBottom: 20,
    },

    sucessText : {
        width : '65%',
        textAlign : 'center',
        alignSelf : 'center',
        color : '#5E5E5E',
        marginBottom: 40,
    }

    
})

export default Congratulations;