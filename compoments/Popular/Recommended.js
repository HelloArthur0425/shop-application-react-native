import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View, Image, Dimensions, Button, ScrollView } from 'react-native';
import HozSlider from '../../utils/HozSlider';

export default function Recommended({ navigation, target }) {
    const sneaker = [
        require('../../images/recommended/Adidas-Yeezy-500-Utility-Black-Product.webp'),
        require('../../images/recommended/adidas-Yeezy-700-V2-Static-Product-1.webp'),
        require('../../images/recommended/adidas-Yeezy-700-V3-Arzareth-Product.webp'),
        require('../../images/recommended/adidas-Yeezy-Slide-Pure-Product.webp'),
        require('../../images/recommended/Converse-Chuck-Taylor-All-Star-70s-Hi-Off-White-Product.webp'),
        require('../../images/recommended/Nike-Air-Force-1-Low-Travis-Scott-Sail-Product.webp'),
    ]

    return (
        <HozSlider title="Recommended For You" items={sneaker} navigation={navigation} target={target} />
    );
}
