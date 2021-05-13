import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Image, Dimensions, Button, ScrollView } from 'react-native';
import HozSlider from '../../utils/HozSlider';

export default function BrandsSlider({ navigation, target }) {
    const brands = [
        require('../../images/brands/air-jordan.jpg'),
        require('../../images/brands/nike.jpg'),
        require('../../images/brands/yeezy.jpg'),
        require('../../images/brands/adidas.png'),
    ]

    return (
        <View style={{ marginTop: 20 }}>
            <HozSlider title="Popular Brands" items={brands} navigation={navigation} target={target} />
        </View>
    );
}
