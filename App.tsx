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
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  TextStyles: {
    color: 'white',
    fontSize: 30,
  },
  ParagraphStyles: {
    color: 'white',
    fontSize: 15,
  },
  background: {
    height: Dimensions.get('screen').height,
    backgroundColor: '#1f2535',
    padding: 8,
    paddingVertical: 14,
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
  view2: {
    flexDirection: 'row',
    gap: 8,
  },
  view3: {
    width: 200,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewDay: {
    gap: 6,
    marginHorizontal: 4,
  },
  dayText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  dayTextSelected: {
    fontSize: 15,
    color: '#26d1a4',
    fontWeight: 'bold',
  },
  switchStyles: {width: 10, height: 10},
  // backgroundImage: {
  //   flex: 1,
  //   resizeMode: 'cover',
  //   backgroundColor: 'rgba(0,0,0,0.00002)',
  // },
});
function App(): React.JSX.Element {
  const [isEnabled, setIsEnabled] = useState(true);
  const [days, setDays] = useState([
    {name: 'L', isActive: false},
    {name: 'M', isActive: false},
    {name: 'M', isActive: false},
    {name: 'J', isActive: false},
    {name: 'V', isActive: false},
    {name: 'S', isActive: false},
    {name: 'D', isActive: false},
  ]);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onToogleDays = (index: number) => () => {
    setDays(prevDays => {
      return prevDays.map((day, i) => {
        if (i === index) {
          return {...day, isActive: !day.isActive};
        }
        return day;
      });
    });
  };

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
        <View style={styles.viewDay}>
          <Text style={styles.TextStyles}>8:00</Text>
          <Text style={styles.ParagraphStyles}>¡Despierta¡</Text>
          <View style={styles.view2}>
            {days.map((day, index) => (
              <TouchableOpacity key={index} onPress={onToogleDays(index)}>
                <Text
                  style={
                    day.isActive ? styles.dayTextSelected : styles.dayText
                  }>
                  {day.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
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
