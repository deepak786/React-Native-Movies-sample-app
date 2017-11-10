/**
 * Created by Deepak on 09/11/2017.
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './www/components/Header';
import MoviesList from './www/components/MoviesList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Header title='Movies' />
        <MoviesList />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
};
