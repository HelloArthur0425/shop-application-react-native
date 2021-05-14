import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Image, Dimensions, Button, ScrollView } from 'react-native';
import HozSlider from '../../utils/HozSlider';

export default function MostPopular({ navigation, target }) {
    const [sneakers, setSneakers] = useState([]);
    useEffect(() => {
        async function fetchBrands() {
            const url = process.env.REACT_APP_URL || 'http://localhost:5000';
            await fetch(`${url}/sneakers/all`)
                .then(res => res.json())
                .then(data => setSneakers(data))
        }
        fetchBrands();
    }, [])

    return (
        <HozSlider title="Most Popular" items={sneakers} navigation={navigation} target={target}/>
    );
}