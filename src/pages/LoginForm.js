import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';
import RNHMSAccount from '@hmscore/react-native-hms-account';

const onSignIn = () => {
  let signInData = {
    huaweiIdAuthParams:
      RNHMSAccount.HmsAccount
        .CONSTANT_HUAWEI_ID_AUTH_PARAMS_DEFAULT_AUTH_REQUEST_PARAM,
    scopes: [RNHMSAccount.HmsAccount.SCOPE_ID_TOKEN],
  };
  RNHMSAccount.HmsAccount.signIn(signInData)
    .then((response) => {
      logger(JSON.stringify(response));
    })
    .catch((err) => {
      logger(err);
    });
};

export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <Input
          returnKeyType={'next'}
          placeholder="Username"
          autoCapitilaze="none"
          onSubmitEditing={() => this.passwordInput.focus()}
        />
        <Input
          returnKeyType={'go'}
          secureTextEntry={true}
          placeholder="Password"
          inputRef={(input) => (this.passwordInput = input)}
        />
        <Input
          returnKeyType={'go'}
          autoCapitilaze="none"
          placeholder="Enter Code"
          inputRef={(input) => (this.passwordInput = input)}
        />
        <MyButton
          text={'Get Code'}
          backgroundColor={'#BA5370'}
          color={'#F4E2D8'}
        />
        <MyButton
          text={'Sign In'}
          backgroundColor={'#BA5370'}
          color={'#F4E2D8'}
        />
        <RNHMSAccount.HuaweiIdAuthButton
          style={styles.viewcontainer}
          colorPolicy={
            RNHMSAccount.HmsAccount
              .CONSTANT_HUAWEI_ID_AUTH_BUTTON_COLOR_POLICY_RED
          }
          enabled={true}
          theme={
            RNHMSAccount.HmsAccoun
              .CONSTANT_HUAWEI_ID_AUTH_BUTTON_THEME_FULL_TITLE
          }
          cornerRadius={
            RNHMSAccount.HmsAccount
              .CONSTANT_HUAWEI_ID_AUTH_BUTTON_CORNER_RADIUS_SMALL
          }
          onPress={onSignIn}
        />
        <View style={styles.signUpArea}>
          <Text style={styles.signUpDescription}>Don't have a account?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textSignIn: {
    textAlign: 'left',
    fontSize: 20,
    marginVertical: 12,
  },
  signUpArea: {
    alignItems: 'center',
  },
  signUpDescription: {
    paddingVertical: 8,
    color: '#999',
  },
  signUpText: {
    paddingVertical: 8,
    color: '#666',
  },
});