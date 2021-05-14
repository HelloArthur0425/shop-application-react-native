import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Brand({ navigation, route }) {
    const brand = route.params.params.item
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
                    <Text style={styles.title}>{brand.brand_name}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.brandImage} source={{uri: brand.image_url}} />
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{brand.brand_logo_ev}</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{brand.brand_description}</Text>
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