import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Item({ navigation }) {
    return (
        <View style={styles.header}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-chevron-back" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 6,
    }
})