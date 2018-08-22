import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    padding: metrics.basePadding,
  },

  loading: {
    marginTop: metrics.baseMargin * 5,
  },

  filter: {
    backgroundColor: colors.light,
    flexDirection: 'row',
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding / 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: metrics.baseRadius,
    fontSize: 12,
  },

  title: {
    color: colors.regular,
    fontWeight: 'bold',
  },

  active: {
    color: colors.darker,
    fontWeight: 'bold',
  },

  warning: {
    flex: 1,
    padding: metrics.basePadding,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.danger,
    alignSelf: 'center',
  }

});

export default styles;
