import React, {Component} from 'react';
import {Text, View, StatusBar, TouchableOpacity, FlatList} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dataActions from '../../redux/actions/dataAction';

import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyle} from '../styles/countryListStyles';
import {DataTable} from 'react-native-paper';


class CountryList extends Component {
  componentDidMount() {
    this.props.actions.getData();
  }

  render() {
    return (
      <View style={globalStyle.container}>
        <StatusBar hidden={true} />
        <TouchableOpacity
          style={globalStyle.backButton}
          onPress={() => this.props.navigation.goBack()}>
          <Icon name="md-arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>

        <View style={globalStyle.dataTableSection}>
          <DataTable style={globalStyle.dataTable}>
            <DataTable.Header>
              <DataTable.Title style={globalStyle.listHeader}>
                <Text style={globalStyle.listHeaderText}>COUNTRIES</Text>
              </DataTable.Title>
            </DataTable.Header>

            <FlatList
              data={this.props.data}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
                <DataTable.Row style={{marginTop: 20, alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('country', {
                        country: item,
                      })
                    }>
                    <DataTable.Cell>
                      <Text style={globalStyle.countryText}>{item.name}</Text>
                    </DataTable.Cell>
                  </TouchableOpacity>
                </DataTable.Row>
              )}
            />
          </DataTable>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.dataReducer,
  };
}

function mapDispatcToProps(dispatch) {
  return {
    actions: {
      getData: bindActionCreators(dataActions.getData, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatcToProps,
)(CountryList);
