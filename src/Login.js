import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { AuthContext } from './Context';
import http from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';
const Login = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [isValidEmail, setisValidEmail] = useState(true);
  const [Password, setPassword] = useState('');
  const [isValidPassword, setisValidPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [Loading, setLoading] = useState(false);

  const storeData = async (value) => {
    // try {
    //   await AsyncStorage.setItem('userId', value);
    // } catch (e) {
    //   // saving error
    // }
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('userLoginData', jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const login = () => {

    if (email.length > 0 && Password.length > 0) {
      setLoading(true);
      let userDetails = {
        userid: email,
        password: Password,
      };
      http
        .post(
          'http://182.18.139.24/AC_DEV_MobileAPI_Core/api/Security/UserDetails',
          userDetails,
        )
        .then((result) => {
          console.log(result.data);
          if (result.data.Status == 200) {
            storeData(result.data);
            signIn();
          } else if (result.data.Status == 204) {
            setLoading(false);
            console.log("coming 204");
            alert('Please enter valid details');
          }
          else {
            setLoading(false);
            console.log("coming 400");
            alert('Plese Fill the Details');

          }
        })
        .catch((err) => {
          setLoading(false);

          console.log(err);
        });
    } else {
      alert('Plese Fill the Details');
    }
  };
  // const verify = () => {
  //   let valid = login();
  //   if (valid) {
  //     //alert('success');
  //     signIn();
  //     // navigation.navigate('MainScreen');
  //   }
  // };
  // if (Loading) {
  //   return (

  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );

  // }

  return (

    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/login_back.png')}
        style={styles.image}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={{ color: '#fff', fontSize: 28 }}>ACON</Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            marginLeft: 30,
            marginRight: 30,
            marginTop: '20%',
          }}>
          <View style={{ flexDirection: 'row', borderBottomWidth: 1, marginBottom: 20, alignItems: 'center', height: 45, borderBottomColor: '#fff' }}>
            <TextInput
              style={styles.textInput}
              placeholder="UserName"
              placeholderTextColor="#fff"
              onChangeText={(email) => setEmail(email)}
            />


          </View>
          {isValidEmail ? null : <Text style={{ color: '#fff' }}>InValid</Text>}

          <View style={{ flexDirection: 'row', marginBottom: 20, borderBottomWidth: 1, alignItems: 'center', height: 45, borderBottomColor: '#fff' }}>
            <TextInput
              style={styles.textInput}
              secureTextEntry={showPassword}
              placeholder="PassWord"
              placeholderTextColor="#fff"
              onChangeText={(pass) => setPassword(pass)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? <Icon name="eye-off" color="#fff" size={25} /> : <Icon name="eye" color="#fff" size={25} />}

            </TouchableOpacity>


          </View>
          {isValidPassword ? null : (
            <Text style={{ color: '#fff' }}>InValid</Text>
          )}
          {Loading ? <ActivityIndicator size="large" color="#d0ddff" /> : null}

          <View style={{ marginTop: 50, flexDirection: 'row' }}>
            <TouchableOpacity onPress={login}>
              <Text style={{ color: '#fff', fontSize: 30 }}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={login}>
              <Avatar.Image
                style={{ marginLeft: '55%', marginBottom: 10 }}
                source={require('../Assets/Login_icon.png')}
                size={80}
              />
            </TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    </View >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    color: '#fff',
    height: 45,

  }, inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center'
  },


});

export default Login;
