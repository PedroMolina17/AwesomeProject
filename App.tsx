/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {MyModal} from './components/MyModal';
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

import styles from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';

function App(): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
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
    <View style={styles.background}>
      <View style={styles.alarmView}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          style={styles.images}
        />

        <MyModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
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
      <View style={styles.viewMenu}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <AntDesign name="pluscircle" size={50} color={'#26d1a4'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;
