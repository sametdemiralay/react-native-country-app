import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-paper';

import {globalStyle} from '../styles/mainStyles';

export default class Main extends Component {
  render() {
    return (
      <View style={globalStyle.container}>
        <StatusBar hidden={true} />
        <View style={globalStyle.TopSection}>
          <Icon name="md-planet" size={100} color="#FFF" />
        </View>
        <View style={globalStyle.BottomSection}>
          <Button
            style={globalStyle.Buttons}
            color="#FFF"
            mode="contained"
            onPress={() => this.props.navigation.navigate('countryList')}>
            <Text style={globalStyle.buttonText}>COUNTRIES</Text>
          </Button>
        </View>
      </View>
    );
  }
}
