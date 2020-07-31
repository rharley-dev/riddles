import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Difficulty(props) {
  const renderDirectoryItem = ({ item }) => {
    return <ListItem title={item.name} subtitle={item.riddle} />;
  };

  return (
    <FlatList
      data={props.riddles}
      renderItem={renderDirectoryItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}

export default Difficulty;