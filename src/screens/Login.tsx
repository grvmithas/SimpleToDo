import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../store/context/contextGenerator';
import {loginAction} from '../store/actions/authActions';

const Login = ({navigation}: any) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {authState, authDispatch} = useContext<any>(Context);
  const login = () => {
    authDispatch(
      loginAction.actionSuccess({
        token: 'loginToken',
        authData: {userName, password, email: 'grvmithas@gmail.com'},
      }),

      navigation.navigate('ToDoList'),
    );
  };

  useEffect(() => {
    console.log(authState, 'atuhState');
  }, [authState]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          value={userName}
          onChangeText={text => setUserName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>
      <TouchableOpacity
        testID={'signInBtn'}
        disabled={!(userName && password)}
        style={styles.loginBtn}
        onPress={() => login()}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    fontWeight: '500',
    fontSize: 24,
    marginBottom: 50,
  },
  inputView: {
    backgroundColor: '#bbdefb',
    borderRadius: 10,
    height: 55,
    width: '80%',
    marginBottom: 8,
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    height: 50,
    flex: 1,
    padding: 8,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#2196f3',
  },
});
