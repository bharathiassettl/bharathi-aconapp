import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Alert from '../Alert/Alert';
import AlertListView from './RecyclerListView/AlertListView';



const Tab = createMaterialTopTabNavigator();


const AlertsTabScreen = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            style: {
                marginTop: 10,
                marginHorizontal: 20,
                borderRadius: 30,
                backgroundColor: '#127dee',
                shadowColor: '#000000',
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 2,
            },
            indicatorStyle: {
                height: '100%',
                backgroundColor: '#fff',
                borderRadius: 30,
                borderColor: '#127dee'

            },
            activeTintColor: '#127dee',
            inactiveTintColor: '#fff',
            labelStyle: {
                fontWeight: 'bold'
            },

        }}>
            <Tab.Screen name="06 Hours" component={AlertListView} />
            <Tab.Screen name="12 Hours" component={AlertListView} />
            <Tab.Screen name="24 Hours" component={AlertListView} />

        </Tab.Navigator>
    );
}

export default AlertsTabScreen;