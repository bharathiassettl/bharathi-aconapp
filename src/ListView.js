import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { useIsFocused } from '@react-navigation/native';




function Item({ item }) {
    const isFocused = useIsFocused();

    return (
        <Animatable.View animation={isFocused ? "bounceIn" : null} duration={isFocused ? 10000 : null} iterationCount={2}
            style={styles.listItem}>
            <View style={{ alignItems: "center", justifyContent: 'center', flex: 15 }}>
                <View >
                    <FeatherIcon name="truck" color="red" size={35} />
                </View>
            </View>
            <View style={{ flexDirection: 'column', flex: 85 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", flex: 1, padding: 5 }}>
                    <View style={{ flex: 50 }}>
                        <Text style={{ fontFamily: 'googlesans_regular', color: 'red', fontSize: 13 }}>FSTO4XL</Text>
                    </View>

                    <View style={{ flex: 50, alignItems: 'flex-end' }}>
                        <Icon name="dots-horizontal" color='black' size={40} />
                    </View>

                </View>
                <View style={{ flex: 1, padding: 5, flexDirection: 'column' }}>

                    <View style={{ flex: 1, paddingBottom: 5 }}>
                        <Text style={{ fontFamily: 'googlesans_medium', color: '#696969', fontSize: 11, paddingTop: 2 }}>{item.address}</Text>
                    </View>
                    {/* <View style={{ flex: 1, paddingBottom: 5 }}>
                        <Text style={{ fontFamily: 'googlesans_regular', color: '#212121', fontSize: 11, paddingTop: 2 }}>{item.address2}</Text>
                    </View> */}
                    <View style={{ flex: 1, paddingTop: 10 }}>

                        <Text style={{ fontFamily: 'googlesans_medium', color: '#696969', fontSize: 11, paddingTop: 2 }}>Today 12:44 pm</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center", flex: 1, padding: 3 }}>

                    <View style={{ flex: 1 }}>
                        <FeatherIcon name="key" color='#B1B1B1' size={20} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Icon name="crosshairs-gps" color='#B1B1B1' size={20} />
                    </View>
                    <View style={{ alignItems: "flex-end", flex: 1 }}>
                        <Text style={{ fontFamily: 'googlesans_regular', color: 'red', fontSize: 12, padding: 5 }}>8.3 Kmph</Text>
                    </View>
                </View>



            </View>
        </Animatable.View>
    );
}


const TrackingTabScreen = () => {
    const data = [
        { vehi_image: require('../Assets/ic_sedan_stopped.png'), veh_name: "My Fassino1", travel_distance: 22, current_speed: 22, address: "MIG-3968,Rd Number 10,MIG Phase", address2: "2Colony,Serilingampally,Hyderabad", start_time: "Today june 23,2020" },
        { vehi_image: require('../Assets/ic_sedan_stopped.png'), veh_name: "My Fassino2", travel_distance: 22, current_speed: 22, address: "MIG-3968,Rd Number 10,MIG Phase", address2: "2Colony,Serilingampally,Hyderabad", start_time: "Today june 23,2020" },
        { vehi_image: require('../Assets/ic_sedan_stopped.png'), veh_name: "My Fassino3", travel_distance: 22, current_speed: 22, address: "MIG-3968,Rd Number 10,MIG Phase", address2: "2Colony,Serilingampally,Hyderabad", start_time: "Today june 23,2020" },
        { vehi_image: require('../Assets/ic_sedan_stopped.png'), veh_name: "My Fassino4", travel_distance: 22, current_speed: 22, address: "MIG-3968,Rd Number 10,MIG Phase", address2: "2Colony,Serilingampally,Hyderabad", start_time: "Today june 23,2020" },
        { vehi_image: require('../Assets/ic_sedan_stopped.png'), veh_name: "My Fassino5", travel_distance: 22, current_speed: 22, address: "MIG-3968,Rd Number 10,MIG Phase", address2: "2Colony,Serilingampally,Hyderabad", start_time: "Today june 23,2020" },

    ];
    return (
        <View style={styles.container}>
            <FlatList
                style={{ flex: 1 }}
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.veh_name}
            />
        </View>
    );
}


export default TrackingTabScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop: 10
    },
    listItem: {

        margin: 10,
        padding: 5,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 3, elevation: 5
    }
});