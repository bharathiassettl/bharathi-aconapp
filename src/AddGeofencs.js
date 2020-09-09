import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AddGeofencsStack = createStackNavigator();

const AddGeofencs = () => {
    return (
        <View style={{
            justifyContent: 'center', flex
                : 1, alignItems: 'center'
        }}>

            <Text>Add Geofence Screen</Text>
        </View>
    )
}

const AddGeofencsStackScreen = ({ navigation }) => {
    return (
        <AddGeofencsStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#127dee',
                },
                headerTintColor: '#fff',
            }}>
            <AddGeofencsStack.Screen
                name="Add Geofence"
                component={AddGeofencs}
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
        </AddGeofencsStack.Navigator>
    );
};

export default AddGeofencsStackScreen;