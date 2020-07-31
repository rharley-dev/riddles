import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { RIDDLES } from '../shared/riddles';

class January extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riddles: RIDDLES,
      activeSections: [],
    };
  }

  renderHeader = section => {
    return (
      <View>
        <Text style={styles.header}>{section.name}</Text>
        <Text style={styles.riddle}>{section.riddle}</Text>
      </View>
    );
  };

  renderContent = section => {
    return (
      <View>
        <Text style={styles.content}>{section.answer}</Text>
      </View>
    );
  };

  updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Daily Riddles</Text>
        </View>
        <Accordion
          sections={RIDDLES}
          activeSections={this.state.activeSections}
          renderSectionTitle={this.renderSectionTitle}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          onChange={this.updateSections}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAB7B8',
    fontSize: 1000,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 40,
    backgroundColor: '#76D7C4',
  },
  header: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  riddle: {
    fontSize: 15,
    alignItems: 'center',
  },
  content: {
    fontSize: 20,
  },
});

export default January;
