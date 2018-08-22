import React, { Component } from 'react';
import {
  Text, View, AsyncStorage, FlatList, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import api from 'services/api';

import styles from './styles';

import Issue from './components/issue';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: `${params.currentRepo}`,
    };
  };

  state = {
    issues: [],
    currentRepo: '',
    loading: false,
    issueType: 'all',
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ loading: true });
    const getIssueType = await AsyncStorage.getItem('@goreact02:issueType');

    if (getIssueType && getIssueType !== this.state.issueType ) {
      await this.setState({
        issueType: getIssueType,
        issues: [],
      });
    }
    console.tron.log(this.state.issueType);
    const { navigation } = this.props;
    const currentRepo = navigation.getParam('currentRepo', '');
    this.setState({ currentRepo });
    this.props.navigation.setParams({
      currentRepo,
    });

    try {
      const response = await api.get(`/repos/${currentRepo}/issues?state=${this.state.issueType}`);

      this.setState({ issues: response.data });
    } catch (err) {
      console.tron.log(err);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleIssueType = async (type) => {
    await this.setState({
      issueType: type,
      issues: [],
    });

    await AsyncStorage.setItem('@goreact02:issueType', type);
    this.loadIssues();
    
  };

  getList = ({ item }) => <Issue issue={item} />;

  showEmptyListView = () => (
    <Text style={styles.warning}>Nenhuma Issue Encontrada!</Text>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filter}>
          <TouchableOpacity onPress={()=> {this.handleIssueType('all')}}>
            <Text style={ this.state.issueType == 'all' ? styles.active : styles.title }>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {this.handleIssueType('open')}}>
            <Text style={ this.state.issueType == 'open' ? styles.active : styles.title }>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {this.handleIssueType('closed')}}>
            <Text style={ this.state.issueType == 'closed' ? styles.active : styles.title }>Fechadas</Text>
          </TouchableOpacity>
        </View>
        { this.state.loading 
          ? (<ActivityIndicator size="large" color="#333" style={styles.loading} /> ) 
          : (
            <FlatList
            data={this.state.issues}
            renderItem={this.getList}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={this.showEmptyListView()}
            onRefresh={this.loadIssues}
            refreshing={this.state.loading}
          />
          )}
      </View>
    );
  }
}
