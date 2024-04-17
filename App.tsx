/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Switch,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  TextStyles: {
    color: 'white',
    fontSize: 50,
  },
  ParagraphStyles: {
    color: 'white',
    fontSize: 20,
  },
  background: {
    height: Dimensions.get('screen').height,
    backgroundColor: '#1f2535',
    padding: 8,
    flexDirection: 'row',
  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  view1: {
    flexDirection: 'row',
    gap: 2,
    marginHorizontal: 10,
  },
  view3: {
    width: 200,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchStyles: {width: 10, height: 10},
  // backgroundImage: {
  //   flex: 1,
  //   resizeMode: 'cover',
  //   backgroundColor: 'rgba(0,0,0,0.00002)',
  // },
});
function App(): React.JSX.Element {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    // <ImageBackground
    //   source={require('./background.png')}
    //   style={styles.backgroundImage}>
    <View style={styles.background}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600',
        }}
        style={styles.images}
      />
      <View style={styles.view1}>
        <View>
          <Text style={styles.TextStyles}>8:00</Text>
          <Text style={styles.ParagraphStyles}>¡Despierta</Text>
        </View>
        <View style={styles.view3}>
          <Switch
            style={styles.switchStyles}
            trackColor={{false: '#26d1a4', true: '#26d1a4'}}
            thumbColor={isEnabled ? 'white' : 'white'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
    // </ImageBackground>
  );
}

export default App;
