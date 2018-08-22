import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    padding: metrics.basePadding,
  },

  form: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: metrics.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    marginBottom: metrics.baseMargin,
  },

  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
    color: colors.dark,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: colors.primary,
    height: 44,
    paddingHorizontal: metrics.basePadding,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    color: colors.white,
    fontWeight: 'bold',
  },

  error: {
    paddingHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin,
    color: colors.danger,
  },

  repoList: {
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
  },

  repo: {
    ...general.box,
    marginHorizontal: metrics.baseMargin,
  },
});

export default styles;
