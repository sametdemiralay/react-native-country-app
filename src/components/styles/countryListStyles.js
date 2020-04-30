import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    zIndex: 1,
    left: 50,
    top: 60,
  },
  listHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#FFF',
  },
  listHeaderText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  countryText: {
    color: '#FFF',
    fontSize: 20,
  },

  dataTableSection: {
    backgroundColor: '#CCC',
    height: height * 0.8,
    zIndex: -1,
    marginBottom: 30,
  },
  dataTable: {
    backgroundColor: '#6807f9',
  },
});
