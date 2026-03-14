
//This file was created because since more things were going to be added to the index page, it is required
// to divide the whole screen into parts or better known as components

import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from 'expo-image';


/*
    In React, props (short for properties) are a mechanism for passing data from a parent component to a child component. They are a fundamental concept for making components reusable, dynamic, and for facilitating communication within the component hierarchy
*/
type Props = {
    imgSource : ImageSourcePropType; 
    selectedImage?: string; // This part of the image selected didn´t work as expected
};

export default function ImageViewer ({imgSource, selectedImage} : Props){
    const imageSource = selectedImage? {uri:selectedImage} : imgSource;
    
    return <Image source={imgSource} style={styles.image} />;

}


const styles =  StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 25,
    },
});