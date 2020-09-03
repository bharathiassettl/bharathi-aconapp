import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer } from 'react-native-paper';
import { AuthContext } from './Context';
import AsyncStorage from '@react-native-community/async-storage';


export function DrawerContent(props) {
  const { signOut } = React.useContext(AuthContext);
  const [userName, setUserName] = useState('Bharathi');
  const res = userName.split('@purple.com');
  console.log(res);
  const userprofilename = "Hello" + "," + userName;


  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userLoginData');
        const dd = JSON.parse(jsonValue).UserID;
        setUserName(dd);
      } catch (e) {
        // error reading value
      }
    };

    bootstrapAsync();
  });

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>


        <View style={{ flex: 30, alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>

          <Avatar.Image style={{ alignItems: 'center' }}
            source={require('../one.jpg')}
            size={90}
          />
          <Caption style={styles.caption}>{userprofilename}</Caption>

        </View>

        <View style={{ borderColor: '#19c1EE', borderWidth: 2.5, marginLeft: 55, marginRight: 55, marginBottom: 30 }}>

        </View>
        <View style={{ flex: 70, marginLeft: 15 }}>
          <DrawerItem style={{ marginBottom: 15 }}
            icon={({ color, size }) => (
              <Icon name="poll" color="#19c1EE" size={27} />
            )}
            label="Graphs"
            labelStyle={{ color: '#B1B1B1' }}

            onPress={() => {
              props.navigation.navigate('Graphs');
            }}
          />

          <DrawerItem style={{ marginBottom: 15 }}

            icon={({ color, size }) => (
              <Icon name="file-document" color="#19c1EE" size={27} />
            )}
            label="Reports"
            labelStyle={{ color: '#B1B1B1' }}

          // onPress={() => {
          //   props.navigation.navigate('Reports');
          // }}
          />
          <DrawerItem style={{ marginBottom: 15 }}

            icon={({ color, size }) => (
              <FeatherIcon name="bell" color="#19c1EE" size={27} />
            )}
            label="Notifications"
            labelStyle={{ color: '#B1B1B1' }}

          // onPress={() => {
          //   props.navigation.navigate('PushNotification');
          // }}
          />
          <DrawerItem style={{ marginBottom: 15 }}

            icon={({ color, size }) => (
              <Icon name="cog-outline" color="#19c1EE" size={27} />
            )}
            label="Settings"
            labelStyle={{ color: '#B1B1B1' }}
            onPress={() => {
              props.navigation.navigate('Settings');
            }}
          />
          <DrawerItem style={{ marginBottom: 15 }}

            icon={({ color, size }) => (
              <FeatherIcon name="map" color="#19c1EE" size={27} />
            )}
            label="Add Geofences"
            labelStyle={{ color: '#B1B1B1' }}
            onPress={() => {
              props.navigation.navigate('AddGeofencs');
            }}
          />

          <DrawerItem style={{ marginBottom: 15 }}

            icon={({ color, size }) => (
              <Icon name="logout" color="#19c1EE" size={27} />
            )}
            label="Log Out"
            labelStyle={{ color: '#B1B1B1' }}
            onPress={() => {
              signOut();
            }}
          />

        </View>
      </DrawerContentScrollView >

      {/* <Drawer.Section style={{ marginBottom: 15, marginLeft: 160 }}>
        <DrawerItem
          label="V1.0.0"
          labelStyle={{ color: '#fff' }}
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section> */}
    </View >
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: 'red'
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 15,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 15,
    color: '#B1B1B1',
    fontFamily: 'googlesans_medium',
    lineHeight: 14,
    alignItems: 'center',
    marginTop: 10
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
