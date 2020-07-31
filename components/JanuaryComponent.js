import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import { RIDDLES } from '../shared/riddles';

class January extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
      riddles: RIDDLES,
    };
  }

  renderSectionTitle = section => {
    return (
      <View>
        <Text>{section.name}</Text>
      </View>
    );
  };

  renderHeader = (section, isActive) => {
    return (
      <Animatable.View
        duration={300}
        transition="backgroundColor"
        style={{ backgroundColor: isActive ? 'rgba(255,255,255,1)' : 'rgba(245,252,255,1)' }}
      >
        <Text style={styles.headerText}>{section.riddle}</Text>
      </Animatable.View>
    );
  };

  renderAnswer = section => {
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
      <Accordion
        sections={this.state.riddles}
        activeSections={this.state.activeSections}
        renderSectionTitle={this.renderSectionTitle}
        renderHeader={this.renderHeader}
        renderContent={this.renderAnswer}
        onChange={this.updateSections}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {},
});

export default January;
