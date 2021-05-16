import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Image, Dimensions, Button, ScrollView } from 'react-native';
import HozSlider from '../../utils/HozSlider';

export default function BrandsSlider({ navigation, target, api_url }) {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        async function fetchBrands() {
            await fetch(`${api_url}/brands/all`)
                .then(res => res.json())
                .then(data => setBrands(data))
        }
        fetchBrands();
    }, [])

    return (
        <View style={{ marginTop: 20 }}>
            <HozSlider title="Popular Brands" items={brands} navigation={navigation} target={target} />
        </View>
    );
}
