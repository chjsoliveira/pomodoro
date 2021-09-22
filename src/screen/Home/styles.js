import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 'auto',
    marginTop: StatusBar.currentHeight,
    marginBottom: 2,
  },
  tasklist: {
    marginVertical: 5,
  },
});
