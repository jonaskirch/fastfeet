import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import colors from '~/styles/colors';
// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <View>
        <Text>Okay</Text>
      </View>
    </>
  );
}
