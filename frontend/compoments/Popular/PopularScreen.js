import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Image, Dimensions, Button, StatusBar, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeadAd from './HeadAd';
import BrandsSlider from './BrandsSlider';
import MostPopular from './MostPopular';
import HighestSneaker from './HighestSneaker';
import Recommended from './Recommended';
import Brand from '../Brand/Brand';
import Item from '../Item/Item';
import config from '../../config';

function Popular({ navigation }) {
    const api_url = config.API_URL || "http://192.168.0.100:5000";
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 3 }}>
                <HeadAd />
            </View>
            <View style={{ flex: 10 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <BrandsSlider navigation={navigation} target="Brand" api_url={api_url} />
                    <MostPopular navigation={navigation} target="Item" api_url={api_url} />
                    <HighestSneaker navigation={navigation} target="Item" api_url={api_url} />
                    <Recommended navigation={navigation} target="Item" api_url={api_url} />
                </ScrollView>
            </View>
        </View>
    );
}

export default function PopularScreen({ navigation }) {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Popular" component={Popular} />
            <Stack.Screen name="Brand" component={Brand} />
            <Stack.Screen name="Item" component={Item} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
})