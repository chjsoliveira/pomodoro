import { StyleSheet } from 'react-native';
import * as theme from '../../theme';

export default StyleSheet.create({
  cardView: {
    shadowColor: '#000',
    margin: 5,
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    elevation: 5,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ffff',
    borderRadius: 5,
    height: 40,
  },
  addButton: {
    alignItems: 'flex-end',
    height: 40,
    backgroundColor: theme.colors.secondary,
    opacity: 0.7,
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    elevation: 10,
    shadowOpacity: 10,
    shadowColor: '#ccc',
    zIndex: 1,
  },
});
