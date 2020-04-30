import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6807f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomSection: {
    flex: 1,
  },
  Buttons: {
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 23,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
