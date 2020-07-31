import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import { RIDDLES } from '../shared/riddles';


export default class January extends Component {
  state = {
    activeSections: [],
    riddles: RIDDLES,
    isActive: false,
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={300}
        transition="backgroundColor"
        style={[styles.header, isActive ? styles.active : styles.inactive]}
      >
        <Text style={styles.headerText}>
          {section.day}: {section.riddle}
        </Text>
      </Animatable.View>
    );
  };

  renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={300}
        transition="backgroundColor"
        style={{ backgroundColor: isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)' }}
      >
        <Animatable.Text duration={300} easing="ease-out" animation={isActive ? 'zoomIn' : false}>
          {section.answer}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <ScrollView>
        <Accordion
          sections={this.state.riddles}
          activeSections={this.state.activeSections}
          renderSectionTitle={this.renderSectionTitle}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          onChange={this.updateSections}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  active: {
    backgroundColor: '#16A085',
    color: 'white',
  },
  inactive: {
    backgroundColor: '#ECF0F1',
  },
});
