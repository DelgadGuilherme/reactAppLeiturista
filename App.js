import { StyleSheet, View } from 'react-native';
import Form from './Components/Form';

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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
