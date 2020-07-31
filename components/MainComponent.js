import React, { Component } from 'react';
import January from './JanuaryComponent';
import { RIDDLES } from '../shared/riddles';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const JanuaryNavigator = createStackNavigator(
  {
      January: { screen: January },
  }, 
  {
      initialRouteName: 'January',
      navigationOptions: {
          headerStyle: {
              backgroundColor: '#76D7C4'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
      }
  }
);


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riddles: RIDDLES,
    };
  }

  render() {
    return (
    <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
      <JanuaryNavigator riddles={this.state.riddles} style={styles.container} />;
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red'
  },
});

export default Main;
