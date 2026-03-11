
//This file was created because since more things were going to be added to the index page, it is required
// to divide the whole screen into parts or better known as components

import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';


/*
    In React, props (short for properties) are a mechanism for passing data from a parent component to a child component. They are a fundamental concept for making components reusable, dynamic, and for facilitating communication within the component hierarchy
*/
type Props = {imgSource : ImageSourcePropType; };

export default function ImageViewer ({imgSource} : Props){
    return <Image source={imgSource} style={styles.image} />;

}


const styles =  StyleSheet.create({
    image: {
        width: 220,
        height: 320,
        borderRadius: 25,
    },
});