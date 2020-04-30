import React from 'react';
import {View, Text, Image, ImageBackground, ScrollView} from 'react-native';
import {globalStyle} from '../styles/countryStyles';
import {SvgUri} from 'react-native-svg';

const Country = ({route}) => {
  const {country} = route.params;
  return (
    <View style={globalStyle.container}>
      <View style={globalStyle.flagSection}>
        <ImageBackground resizeMode="center" style={globalStyle.flag}>
          <SvgUri width="100%" height="100%" uri={country.flag} />
        </ImageBackground>
      </View>

      <View style={globalStyle.contentSection}>
        <View style={globalStyle.titleSection}>
          <Text style={globalStyle.title}>{country.name}</Text>
        </View>

        <View style={globalStyle.scrollSection}>
          <ScrollView>
            <View style={globalStyle.scrollItemContainer}>
              <Text style={globalStyle.scrollItemText}>Capital:</Text>
              <Text style={globalStyle.scrollItemText}>{country.capital}</Text>
            </View>

            <View style={globalStyle.scrollItemContainer}>
              <Text style={globalStyle.scrollItemText}>Poupulation:</Text>
              <Text style={globalStyle.scrollItemText}>
                {country.population}
              </Text>
            </View>

            <View style={globalStyle.scrollItemContainer}>
              <Text style={globalStyle.scrollItemText}>Currencies:</Text>
              <Text style={globalStyle.scrollItemText}>
                {country.currencies[0].name}
              </Text>
            </View>

            <View style={globalStyle.scrollItemContainer}>
              <Text style={globalStyle.scrollItemText}>Languages:</Text>
              <Text style={globalStyle.scrollItemText}>{country.languages[0].name}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Country;
