import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Image, Dimensions, Button, ScrollView } from 'react-native';
import HozSlider from '../../utils/HozSlider';

export default function HighestSneaker({ navigation, target }) {
    const sneakers = [
        require('../../images/sneakers/highest/aj1-chicago.webp'),
        require('../../images/sneakers/highest/yeezy-350-light.webp'),
        require('../../images/sneakers/highest/travisscott-af1.webp'),
    ]

    return (
        <HozSlider title="Highest Selling" items={sneakers} navigation={navigation} target={target}/>
    );
}