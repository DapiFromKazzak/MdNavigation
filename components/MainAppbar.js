import React from 'react';
import { Appbar } from 'react-native-paper'
import { getHeaderTitle } from '@react-navigation/elements';

export default function MainAppbar({navigation, route, options, back}) {
    const title = getHeaderTitle(options, route.name)
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="MD Nav Demo" />
      {!back ? (
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('SecondScreen')} />
      ) : null}
    </Appbar.Header>
  );
}