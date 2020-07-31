import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { RIDDLES } from '../shared/riddles';

class January extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riddles: RIDDLES,
    };
  }

  static navigationOptions = {
    title: 'January',
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderJanuaryItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.riddle}
          // onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
        />
      );
    };

    return (
      <FlatList
        data={this.state.riddles}
        renderItem={renderJanuaryItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

export default January;
