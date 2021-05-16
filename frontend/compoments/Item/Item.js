import * as React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../utils/Header';

export default function Item({ navigation, route }) {
    const item = route.params.params.item;
    console.log(route.params.params.item);
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{item.sneaker_name}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.sneakerImage} source={{ uri: item.image_url }} />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>...</Text>
                    </View>
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
    sneakerImage: {
        height: Dimensions.get('screen').height * 0.3,
        width: Dimensions.get('screen').width * 0.8,
        borderColor: '#ecf0f1',
        borderWidth: .5,
        resizeMode: 'contain'
    },
    titleContainer: {
        paddingLeft: Dimensions.get('screen').width * 0.1,
        paddingTop: 30,
    },
    title: {
        fontSize: 16,
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
})