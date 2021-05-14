import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

export default function HozSlider({ title, items, navigation, target }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.wrapper}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        items.map((item, index) => {
                            return (
                                <TouchableHighlight
                                    key={index}
                                    underlayColor={'transparent'}
                                    onPress={() => navigation.navigate(target, {
                                        targetType: target,
                                        item: item,
                                    })}>
                                    <View style={index === items.length - 1 ? styles.lastImageContainer : styles.imageContainer}>
                                        <View style={{ flex: 1 }}>
                                            <Image source={{ uri: item.image_url }} style={styles.image} />
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    wrapper: {
        height: 150,
        padding: 6,
    },
    imageContainer: {
        height: 120,
        width: 160,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginRight: 5
    },
    lastImageContainer: {
        height: 120,
        width: 160,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    title: {
        paddingTop: 5,
        paddingLeft: 16,
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'sans-serif',
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginRight: 5,
    }
})