import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
interface MyModalContentProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}
export const MyModal: React.FC<MyModalContentProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.viewModal}>
        <View style={styles.viewModalButtons}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.btnDelete}>
            <AntDesign name="delete" style={styles.btnText}></AntDesign>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSave}>
            <Text style={styles.btnText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
