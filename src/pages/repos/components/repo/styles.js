import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 45,
    height: 45,
  },

  info: {
    flex: 1,
    marginLeft: metrics.baseMargin,
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },

  login: {
    fontSize: 12,
    color: colors.dark,
    marginTop: metrics.baseMargin / 4,
  },

  icon: {
    color: colors.light,
  },
});

export default styles;
