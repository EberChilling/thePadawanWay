import { Text, View , StyleSheet } from "react-native";
import { Link } from "expo-router" //Allows you to change from one page to another using links

/* NOT USED ANY MORE SINCE THE "ImageViewer" component was created */
import { Image } from 'expo-image' // This library is used to add images to the screen


import Button from "@/components/Button"; // From components folder, a button feature is added.

import * as ImagePicker from 'expo-image-picker'; // Capabilities for selecting a new image


import { useState } from 'react';

//COMPONENTS CREATED BY US:
import ImageViewer  from "@/components/ImageViewer"; // After creating a new component, it is added to index so it can be used
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";

//Using a constant name for the direction of the image we want to use:
const PlaceHolderImage = require('@/assets/images/background-image.png');

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  /********************************************************************/
  //New function used to pick image from library:
  const pickImageAsync = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled){
      console.log(result);
      setSelectedImage(result.assets[0].uri);

    }
    else{
      alert('You did not select any image.')
    }

  };
  /********************************************************************/
  const onReset = () =>{
    setShowAppOptions(false);
  };

  /********************************************************************/
  const onAddSticker = () => {}
  /********************************************************************/
  const onSaveImageAsync = async () => {}
  /********************************************************************/

  /********************************************************************/

  /********************************************************************/
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/about" style= {styles.button}>Go to About Screen</Link>



      <View style = {styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceHolderImage} selectedImage={selectedImage}/>
      </View>

      {showAppOptions ? (
        //If showAppOptions is TRUE, then show this:
        <View style={styles.optionContainer}>
          <View style= {styles.optionRow}>
            <IconButton icon="refresh" label="reset" onPress={onReset}/>
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="save" onPress={onSaveImageAsync} />
          </View>
        </View>
       
      
      ) :(
        // Otherwise show the following:
      <View style={styles.footContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label= "Use this photo"  onPress={() => setShowAppOptions(true)}/>
      </View>

      //Finish conditional
      )}

    </View>



  );
}

const styles = StyleSheet.create({
  // Container for the initial information for Home Screen
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',

  },

  text:{ color: '#fff'},
  button:{
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  // Creating container for the Image
  imageContainer:{
    flex:1,
    paddingTop: 15,

  },
  footContainer:{
    flex: 1/3,
    alignItems: 'center',
  },
  optionContainer:{
    position: 'absolute',
    bottom: 80,
  },
  optionRow: {
    alignItems:'center',
    flexDirection: 'row',
  },
});
