import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableRipple } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

const Overlay = (props) => {


    return (
        <>


            <Modal
                animationType="slide"
                transparent={true}
                visible={props.show}
                onRequestClose={() => {

                }}
            >

                <View style={styles.overlay}>
                    <View style={{...styles.centeredView,...props.style}}>
                        <TouchableRipple onPress={props.close} style={styles.closeBtn}>
                            <Icon name="close" size={30} color="#000" />
                        </TouchableRipple>
                        <View style={styles.modalView}>

                            {props.content}

                        </View>
                    </View>

                </View>
            </Modal>


        </>
    );

}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "#000a",
    },
    centeredView: {
        height: '100%'
    
    },
    modalView: {
        margin: 0,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '100%',
        marginTop: 20
        
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    closeBtn: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"


    }
});

export default Overlay;