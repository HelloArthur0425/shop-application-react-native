import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Image, Dimensions, Button, ScrollView } from 'react-native';
import HozSlider from '../../utils/HozSlider';

export default function MostPopular({ navigation, target }) {
    const sneakers = [
        require('../../images/sneakers/most-popular/aj11.webp'),
        require('../../images/sneakers/most-popular/aj6.webp'),
        require('../../images/sneakers/most-popular/aj4.webp'),
        require('../../images/sneakers/most-popular/aj13.webp'),
        require('../../images/sneakers/most-popular/aj1.webp'),
        require('../../images/sneakers/most-popular/yeezy-700.webp'),
        require('../../images/sneakers/most-popular/yeezy-z.webp'),
        require('../../images/sneakers/most-popular/yeezy-g.webp'),
        require('../../images/sneakers/most-popular/af1-skeleton.webp'),
    ]

    return (
        <HozSlider title="Most Popular" items={sneakers} navigation={navigation} target={target}/>
    );
}