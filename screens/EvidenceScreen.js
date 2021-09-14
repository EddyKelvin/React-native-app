import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';

import Evidence from '../components/ReportIncident/ReportFoms/Evidence';

const EvidenceScreen = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title="Menu"
                        iconName={Platform.OS === 'android' ? 'md-menu7' : 'ios-menu'}
                        onPress={() => {
                            navigation.toggleDrawer();
                        }}
                    />
                </HeaderButtons>
            ),
        });
    });
    
    return (
        <Evidence navigation={navigation} />
    );
};

export default EvidenceScreen;