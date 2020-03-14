import React from 'react';
import { StatusBar } from 'react-native';
import colors from '~/styles/colors';
import Routes from './routes';
// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <Routes />
    </>
  );
}
