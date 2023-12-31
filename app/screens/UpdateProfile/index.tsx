import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer
import Button from '../../components/Button';

function UpdateProfile() {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.title}>Personal Details</Text>
        <View style={styles.details}>
          <View style={styles.singleDetail}>
            <Icon name="user-circle" size={22} />
            <TextInput placeholder="Russell Austin" />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="envelope" size={20} />
            <TextInput keyboardType="email-address" placeholder="russell.partner@gmail.com" />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="phone" size={20} />
            <TextInput placeholder="+1  202  555  0142 " />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Change Password</Text>
        <View style={styles.details}>
          <View style={styles.singleDetail}>
            <Icon name="lock" size={20} />
            <TextInput placeholder="Current password" secureTextEntry={true} />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="lock" size={20} />
            <TextInput placeholder="New password" secureTextEntry={true} />
          </View>
          <View style={styles.singleDetail}>
            <Icon name="lock" size={20} />
            <TextInput placeholder="Confirm password" secureTextEntry={true} />
          </View>
        </View>
      </View>

      <Button text="Save Settings" />
    </View>
  );
}

export default UpdateProfile;
