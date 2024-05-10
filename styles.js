import {StyleSheet, Dimensions} from 'react-native';

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
    height: Dimensions.get('window').height,
    backgroundColor: '#1f2535',
    padding: 8,
    paddingVertical: 14,
    position: 'relative',
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
  alarmView: {
    flexDirection: 'row',
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
  viewMenu: {
    height: 100,
    color: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchStyles: {width: 10, height: 10},

  viewModal: {
    backgroundColor: '#1f2535',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.8,
    bottom: 0,
    left: 0,
    right: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  viewModalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width,
  },

  btnDelete: {
    backgroundColor: '#202835',
    width: Dimensions.get('window').width * 0.2,
  },

  btnSave: {
    backgroundColor: '#26d1a4',
    borderRadius: 50,
    paddingVertical: 12,
    width: Dimensions.get('window').width * 0.6,
    shadowColor: '#26d1a4',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 50,
    elevation: 10,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
