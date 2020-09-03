import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapExample from './MapExample';

const SettingssStack = createStackNavigator();

const Settings = () => {
    return (
        <MapExample />
    )
}
//         <View style={{
//             justifyContent: 'center', flex
//                 : 1, alignItems: 'center'
//         }}>

//             <Text>Graphs Screen</Text>
//         </View>
//     )
// }
const SettingssStackScreen = ({ navigation }) => {
    return (
        <SettingssStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#127dee',
                },
                headerTintColor: '#fff',
            }}>
            <SettingssStack.Screen
                name="Graphs"
                component={Settings}
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
                            size={35}
                            color="#fff"
                            style={{ marginLeft: 20 }}
                            onPress={() => navigation.goBack()}
                        />
                    ),
                }}
            />
        </SettingssStack.Navigator>
    );
};

export default SettingssStackScreen;