import { Text, View , StyleSheet } from "react-native";
import { Link } from "expo-router" //Allows you to change from one page to another using links
import { Image } from 'expo-image' // This library is used to add images to the screen

//Using a constant name for the direction of the image we want to use:
const PlaceHolderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/about" style= {styles.button}>Go to About Screen</Link>

    <View style = {styles.imageContainer}>
        <Image source={PlaceHolderImage} style= {styles.image} />
    </View>

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
  },
  image:{
    width:320,
    height:440,
    borderRadius: 100,
  },
});
