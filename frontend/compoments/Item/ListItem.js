import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../utils/Header';

export default function ListItem({ navigation }) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <Text>ListItem!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'white',
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 6, 
    }
})