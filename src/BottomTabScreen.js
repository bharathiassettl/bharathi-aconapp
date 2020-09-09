import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from './Dashboard';
import Alerts from './Alerts';
import Reports from './Reports';
import DashBoardnew from './DashBoardnew';
import ListView from './ListView';




const Tab = createBottomTabNavigator();
const DetailStack = createStackNavigator();
const AlertsStack = createStackNavigator();
const TrackingStack = createStackNavigator();



const BottomTabScreen = () => {
    return (
        <Tab.Navigator initialRouteName="DashBoard" activeColor="#19C1EE" shifting={false} inactiveColor="#B1B1B1"
            tabBarOptions={{
                style: { height: 60 }
            }}
        >

            <Tab.Screen
                name="Alerts"
                component={AlertStackScreen}

                options={{
                    tabBarColor: '#009387',
                    tabBarLabel: 'Alerts',
                    tabBarIcon: ({ focused, color, size }) => focused ? <FontIcon name="bell" color={color} size={26} style={{ backgroundColor: 'skyblue', borderRadius: 20, padding: 5 }} /> : (
                        <FontIcon name="bell" color={color} size={26} />
                    ),
                }}
            />




            <Tab.Screen
                name="DashBoard"
                component={DetailStackScreen}
                options={{

                    tabBarLabel: 'DashBoard',
                    tabBarIcon: ({ focused, size, color }) => focused ? <Icon name="view-dashboard" color={color} size={26} style={{ backgroundColor: "skyblue", borderRadius: 20, padding: 5 }} /> : (
                        <Icon name="view-dashboard" color={color} size={26} />
                    ),
                }}
            />


            <Tab.Screen
                name="Tracking"
                component={TrackingStackScreen}
                options={{
                    tabBarLabel: 'Tracking',
                    tabBarIcon: ({ focused, color, size }) => focused ? <FontIcon name="map-pin" color={color} size={26} style={{ backgroundColor: 'skyblue', borderRadius: 20, padding: 5 }} /> : (
                        <FontIcon name="map-pin" color={color} size={26} />
                    ),
                }}
            />

        </Tab.Navigator>

    );
};

export default BottomTabScreen;

const AlertStackScreen = ({ navigation }) => {
    console.log("came inside");

    return (
        <AlertsStack.Navigator

            screenOptions={{
                headerStyle: {
                    backgroundColor: '#127dee',
                },
                headerTintColor: '#fff',
            }}>
            <AlertsStack.Screen

                name="Alerts"
                component={Alerts}
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
                            name="menu"
                            size={35}
                            color="#fff"
                            style={{ marginLeft: 20 }}
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                }}
            />
        </AlertsStack.Navigator>);
};
const DetailStackScreen = ({ navigation }) => {
    return (
        <DetailStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#127dee',

                },
                headerTintColor: '#fff',


            }}>
            <DetailStack.Screen
                name="DashBoard"
                component={DashBoardnew}
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
                            name="menu"
                            size={35}
                            color="#fff"
                            style={{ marginLeft: 20 }}
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                }}
            />
        </DetailStack.Navigator>
    );
};

const TrackingStackScreen = ({ navigation }) => {
    console.log("came inside");

    return (
        <TrackingStack.Navigator

            screenOptions={{
                headerStyle: {
                    backgroundColor: '#127dee',

                },
                headerTintColor: '#fff',
            }}>
            <TrackingStack.Screen
                name="Tracking"
                component={ListView}
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
                            name="menu"
                            size={35}
                            color="#fff"
                            style={{ marginLeft: 20 }}
                            onPress={() => navigation.openDrawer()}
                        />

                    ),
                    headerRight: () => (
                        <FontIcon
                            name="search"
                            size={35}
                            color="#fff"
                            style={{ marginRight: 20 }}

                        />
                    ),

                }}
            />
        </TrackingStack.Navigator>
    );
};

