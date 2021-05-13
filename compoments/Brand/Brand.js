import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Brand({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="ios-chevron-back" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>NIKE</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.brandImage} source={require('../../images/brands/nike.jpg')} />
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>In Greek mythology, Nike is the Winged Goddess of Victory. The logo is derived from goddess' wing,‘swoosh’, which symbolises the sound of speed, movement, power and motivation.</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>Nike, Inc. (/ˈnaɪki/ or /ˈnaɪk/) is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.</Text>
                </View>
            </View>
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
    },
    imageContainer: {
        alignItems: 'center',
    },
    brandImage: {
        height: Dimensions.get('screen').height * 0.3,
        width: Dimensions.get('screen').width * 0.8,
        borderColor: '#ecf0f1',
        borderWidth: .5
    },
    titleContainer: {
        alignItems: 'center',
        padding: 12,
        paddingTop: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
    },
    descriptionContainer: {
        paddingLeft: 30, 
        paddingRight: 30, 
        paddingTop: 20, 
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'justify'
    }
})