import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Issue = ({ issue }) => (
  <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(`${issue.html_url}`)}>
    <Image source={{ uri: issue.user.avatar_url }} style={styles.avatar} />
    <View style={styles.info}>
      <Text numberOfLines={1} style={styles.title}>
        {issue.title}
      </Text>
      <Text style={styles.login}>{issue.user.login}</Text>
    </View>
    <Icon name="chevron-right" size={16} style={styles.icon} />
  </TouchableOpacity>
);

Issue.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
  }).isRequired,
};

export default Issue;
