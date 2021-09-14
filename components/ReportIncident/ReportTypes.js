import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/Feather';

import styles from '../../styles/reportsDashboard/style';
import AppStatusBar from '../../components/AppStatusBar';
import Colors from '../../constants/Colors';

// Images
import QuickReportImage from '../../assets/fastTime.png';
import FullReportImage from '../../assets/complaint.png';

const ReportTypes = ({ navigation }) => {
    return (
        <View style={styles.screen}>
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
                        style={styles.menuBtn}>
                        <Icon name="menu" size={30} color="#fff" />
                    </TouchableRipple>
                    <View style={styles.headerWrapper}>

                        <Text style={styles.headerTitle}>Report a Violation</Text>

                    </View>

                </View>
                <Text style={styles.headerSubTitle}>
                    Select type of Report
          </Text>
            </View>
            <View style={styles.main}>
                <View style={{ ...styles.ReportTypeContainer }}>
                    <TouchableOpacity
                        style={styles.ReportType}
                        onPress={() => navigation.navigate('QuickReport')}
                    >
                        <Image
                            source={QuickReportImage}
                            style={styles.TypeImage}
                        />
                        <Text style={styles.TypeText}>
                            Quick Report
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.ReportType}
                        onPress={
                            () => navigation.navigate('ReportDashboard')}>
                        <Image
                            source={FullReportImage}
                            style={styles.TypeImage}
                        />
                        <Text style={styles.TypeText}>
                            Full Report
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};



export default ReportTypes;
