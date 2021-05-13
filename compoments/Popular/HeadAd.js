import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet, View, Image, Dimensions, Button } from 'react-native';

export default function HeadAd() {
    const images = [
        require('../../images/head-ads/ad1.jpg'),
        require('../../images/head-ads/ad2.jpg'),
        require('../../images/head-ads/ad3.jpg'),
        require('../../images/head-ads/ad4.jpg'),
    ];
    const animation = useRef(new Animated.Value(0));
    const [currentImage, setCurrentImage] = useState(0)
    const handleAnimation = () => {
        let newCurrentImage = (currentImage + 1);
        if (newCurrentImage >= images.length) newCurrentImage = 0;

        Animated.spring(animation.current, {
            toValue: (-Dimensions.get('screen').width * newCurrentImage),
            useNativeDriver: true,
        }).start();

        setCurrentImage(newCurrentImage);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleAnimation();
        }, 6 * 1000);
        return () => clearInterval(interval);
    }, [currentImage])

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.wrapper, {
                transform: [{
                    translateX: animation.current
                }]
            }]}>
                {
                    images.map(image => {
                        return <Image key={image} source={image} style={styles.image} />
                    })
                }
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flexDirection: 'row'
    },
    image: {
        resizeMode: 'cover',
        height: 160,
        width: Dimensions.get('screen').width,
    }
})