import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
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
      <View>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text>Cerrar</Text>
        </TouchableOpacity>
        <Text>AA</Text>
      </View>
    </Modal>
  );
};
