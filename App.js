import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

import Login from './src/Login';
import MainScreen from './src/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './src/Context';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();
const App = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        const jsonValue = await AsyncStorage.getItem('userLoginData');
        userToken = JSON.parse(jsonValue).UserUniqueId;
      } catch (e) {
        // error reading value
      }
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async () => {
        let userToken;
        try {
          const jsonValue = await AsyncStorage.getItem('userLoginData');
          userToken = JSON.parse(jsonValue).UserUniqueId;
        } catch (e) {
          // error reading value
        }
        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userLoginData');
        } catch (e) {
          // remove error
        }

        dispatch({ type: 'SIGN_OUT' });
      },
    }),
    [],
  );
  if (state.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken == null ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{ headerShown: false, headerBackground: 'green' }}
              />

            </Stack.Navigator>
          )}

        {/* <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ headerShown: false, headerBackground: 'green' }}
          />

        </Stack.Navigator> */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
