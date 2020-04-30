import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  flagSection: {
    flex: 2,
  },
  flag: {
    width: width,
  },
  contentSection: {
    flex: 3,
  },
  titleSection: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  title: {
    fontSize: 40,
    color: '#6807f9',
    fontWeight: 'bold',
  },

  scrollSection: {
    backgroundColor: '#6807f9',
    margin: 20,
    padding: 20,
  },
  scrollItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: "#FFF"
  },
  scrollItemText: {
    color: '#FFF',
    fontSize: 20,
    marginVertical: 10
  },
});
