import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';

import PropTypes from 'prop-types';
import api from 'services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

import Repo from './components/repo';

export default class Repos extends Component {
  static navigationOptions = {
    title: 'GitHub Issues',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    repos: [],
    repoInput: '',
    loading: false,
    errorMessage: null,
  };

  async componentDidMount() {
    const getRepos = await AsyncStorage.getItem('@goreact02:repos');

    if (getRepos) {
      const repos = JSON.parse(getRepos);
      this.setState({ repos });
    }
  };

  checkRepoExists = async (repoInput) => {
    const repo = await api.get(`/repos/${repoInput}`);

    return repo;
  };

  HandleAddRepo = async () => {
    const { repoInput } = this.state;

    if (repoInput.length === 0) return;

    this.setState({ loading: true });

    try {
      const repo = await this.checkRepoExists(repoInput);

      const {
        id, owner, name, full_name,
      } = repo.data;

      this.setState({
        repos: [
          ...this.state.repos,
          {
            id,
            name,
            full_name,
            avatar_url: owner.avatar_url,
            login: owner.login,
          },
        ],
        repoInput: '',
        errorMessage: null,
      });

      await AsyncStorage.setItem('@goreact02:repos', JSON.stringify(this.state.repos));
    } catch (err) {
      this.setState({ errorMessage: 'Repositório não Existe!' });
    } finally {
      this.setState({ loading: false });
    }
  };

  showRepo = async (full_name) => {
    await AsyncStorage.setItem('@goreact02:currentRepo', full_name);
    this.props.navigation.navigate('Issues', { currentRepo: full_name });
  };

  getList = ({ item }) => <Repo repo={item} handleClick={this.showRepo} />;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite o Usuário/Repositório"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            value={this.state.repoInput}
            onChangeText={repoInput => this.setState({ repoInput })}
          />
          <TouchableOpacity style={styles.button} onPress={this.HandleAddRepo}>
            {this.state.loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Icon name="plus" size={16} style={styles.icon} />
            )}
          </TouchableOpacity>
        </View>
        {!!this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        <FlatList
          data={this.state.repos}
          renderItem={this.getList}
          keyExtractor={item => String(item.id)}
        />
      </View>
    );
  }
}
