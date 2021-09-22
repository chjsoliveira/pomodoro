import { StyleSheet } from 'react-native';
import * as theme from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
  },
  viewTextHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: theme.sizes.h2,
  },
});
