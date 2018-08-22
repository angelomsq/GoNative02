import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class AllIssues extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: `${params.currentRepo}`,
      tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
      tabBarLabel: 'All Issues',
    };
  };

  state = {
    issues: [],
    currentRepo: '',
    loading: true,
  };

  componentDidMount = () => {
    const { navigation } = this.props;
    const currentRepo = navigation.getParam('currentRepo', '');
    this.setState({ currentRepo });
    this.props.navigation.setParams({
      currentRepo,
    });
    console.tron.log(this.state.currentRepo);
  };

  render() {
    return (
      <View>
        <Text> All Issues </Text>
      </View>
    );
  }
}

export class OpenIssues extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: `${params.currentRepo}`,
      tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
      tabBarLabel: 'All Issues',
    };
  };

  state = {
    issues: [],
    currentRepo: '',
    loading: true,
  };

  componentDidMount = () => {
    const { navigation } = this.props;
    const currentRepo = navigation.getParam('currentRepo', '');
    this.setState({ currentRepo });
    this.props.navigation.setParams({
      currentRepo,
    });
    console.tron.log(this.state.currentRepo);
  };

  render() {
    return (
      <View>
        <Text> Open Issues </Text>
      </View>
    );
  }
}

export class ClosedIssues extends Component {
  render() {
    return (
      <View>
        <Text> Closed Issues </Text>
      </View>
    );
  }
}
