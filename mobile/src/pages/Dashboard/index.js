import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Dashboard() {
  return <Text>Dashboard</Text>;
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="view-headline" size={26} color={tintColor} />
  ),
};
