import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Image, Dimensions, Button, ScrollView } from 'react-native';
import HozSlider from '../../utils/HozSlider';

export default function MostPopular({ navigation, target, api_url }) {
    const [sneakers, setSneakers] = useState([]);
    useEffect(() => {
        async function fetchBrands() {
            await fetch(`${api_url}/sneakers/mostPopular`)
                .then(res => res.json())
                .then(data => setSneakers(data))
        }
        fetchBrands();
    }, [])

    return (
        <HozSlider title="Most Popular" items={sneakers} navigation={navigation} target={target}/>
    );
}