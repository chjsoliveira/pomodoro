import { StyleSheet } from 'react-native';
import * as theme from '../../theme';

export default StyleSheet.create({
  content: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardView: {
    shadowColor: '#000',
    margin: 5,
    borderRadius: 75,
    padding: 10,
    shadowColor: '#000',
    elevation: 5,
    flexDirection: 'row',
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonModal: {
    backgroundColor: theme.colors.primaryButton,
    marginTop: 20,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
