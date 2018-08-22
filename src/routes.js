import { StackNavigator, TabNavigator } from 'react-navigation';

import { colors, metrics } from 'styles';
import Repos from 'pages/repos';
import Issues from 'pages/issues';
import { AllIssues, OpenIssues, ClosedIssues } from 'pages/issuesTabs';

const Routes = StackNavigator(
  {
    Repos: { screen: Repos },
    Issues: { screen: Issues },
    IssuesTabs: {
      screen: TabNavigator(
        {
          All: { screen: AllIssues },
          Open: { screen: OpenIssues },
          Closed: { screen: ClosedIssues },
        },
        {
          tabBarPosition: 'top',
          tabBarOptions: {
            showIcon: true,
            showLabel: true,
            activeTintColor: colors.white,
            inactiveTintColor: colors.whiteTransparent,
            titleStyle: {
              justifyContent: 'center',
              alignItems: 'center',
            },
            tabStyle: {
              justifyContent: 'center',
              alignItems: 'center',
            },
            labelStyle: {
              position: 'relative',
              alignSelf: 'center',
              marginBottom: -15,
              fontSize: 14,
            },
            iconStyle: {
              marginTop: 20,
            },
            style: {
              backgroundColor: colors.secundary,
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: metrics.basePadding,
            },
          },
        },
      ),
    },
  },
  {
    initialRouteName: 'Repos',
    navigationOptions: {
      headerBackTitle: null,
    },
  },
);

export default Routes;
