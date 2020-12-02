import React from 'react'
import {StyleSheet, View, Text} from "react-native"

export const AppCard = props => (
    <Text style={{...styles.default, ...props.style}}> {props.children} </Text>
);


const styles = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2},
        elevation: 3,
        backgroundColor: '#fff',
        borderRadius: 10,

    },
})
