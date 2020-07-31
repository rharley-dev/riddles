import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import January from './JanuaryComponent';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is a great riddles app.</Text>
      <Text>Trust me.</Text>
      <Button
        title="Juanuary Riddles"
        buttonStyle={{ backgroundColor: '#16A085', marginTop: 40, marginBottom: 10 }}
        onPress={() => navigation.navigate('January')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {},
});

export default Home;
