/*
    BUTTONS:
    <Pressable> is recommended for its flexibility. It can detect single taps, long presses, trigger separate events when the button is pushed in and released, and more.
*/

import {StyleSheet,View,Pressable, Text} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
type Props = { 
    label: string;
    theme?: 'primary';
  };


export default function Button( {label, theme} : Props){

  if (theme === 'primary'){
    return(
        <View style={[styles.buttonContainer, {borderWidth:4, borderColor:'#ff543d' , borderRadius:18 },]}>
            <Pressable style={[styles.button, {backgroundColor: '#ffffff92'}]} onPress={() => alert('You pressed the button')}>
              <FontAwesome name='picture-o' size={18} color="#25292e" style={styles.buttonIcon} />
              <Text style={[styles.buttonLabel,{color:'#25292e'}]}>{label}</Text>
            </Pressable>

        </View>
    );

  }
  else {
    return(
          <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={() => alert('You pressed the button')}>
                  <Text style={styles.buttonLabel}>{label}</Text>
              </Pressable>

          </View>
      );
  }

}


const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 80,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon:{
    paddingRight:12,
  },

  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});