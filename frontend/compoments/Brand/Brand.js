import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../utils/Header';

export default function Brand({ navigation, route }) {
    const brand = route.params.params.item
    const target = "ListItem";
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{brand.brand_name}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.brandImage} source={{ uri: brand.image_url }} />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>{brand.brand_logo_ev}</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>{brand.brand_description}</Text>
                    </View>
                    <TouchableOpacity style={styles.viewButtonContainer} onPress={() => navigation.navigate(target)}>
                        <Text style={styles.viewButtonText}>View More</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        paddingHorizontal: Dimensions.get('screen').width * 0.1,
        paddingVertical: 20,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    viewButtonContainer: {
        elevation: 8,
        backgroundColor: "green",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 20,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewButtonText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})