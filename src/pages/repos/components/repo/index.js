import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Repo = ({ repo, handleClick }) => (
  <TouchableOpacity style={styles.container} onPress={() => handleClick(repo.full_name)}>
    <Image source={{ uri: repo.avatar_url }} style={styles.avatar} />
    <View style={styles.info}>
      <Text style={styles.title}>{repo.name}</Text>
      <Text style={styles.login}>{repo.login}</Text>
    </View>
    <Icon name="chevron-right" size={16} style={styles.icon} />
  </TouchableOpacity>
);

Repo.propTypes = {
  repo: PropTypes.shape({
    full_name: PropTypes.string,
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default Repo;
