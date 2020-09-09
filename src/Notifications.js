import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NotificationsStack = createStackNavigator();



const Notifications = () => {
    return (

        <View style={{
            justifyContent: 'center', flex
                : 1, alignItems: 'center'
        }}>

            <Text>Notifications Screen</Text>
        </View>
    )
}
const NotificationsStackScreen = ({ navigation }) => {
    return (
        <NotificationsStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#127dee',
                },
                headerTintColor: '#fff',
            }}>
            <NotificationsStack.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    headerStyle: {
                        backgroundColor: '#127dee',
                        height: 80
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {

                    },
                    headerLeft: () => (
                        <Icon
                            name="chevron-left"
                            size={25}
                            color="#fff"
                            style={{ marginLeft: 10 }}
                            onPress={() => navigation.goBack()}
                        />
                    ),
                }}
            />
        </NotificationsStack.Navigator>
    );
};

export default NotificationsStackScreen;