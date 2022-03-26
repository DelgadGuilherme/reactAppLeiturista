import { StyleSheet, View } from 'react-native';
import Form from './src/components/Form';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TakePicture from './src/components/Camera';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7E2E2',
    paddingTop: 60,
  },
});
