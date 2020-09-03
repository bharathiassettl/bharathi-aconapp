import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { useIsFocused } from '@react-navigation/native';




function Item({ item }) {
    const isFocused = useIsFocused();

    return (
        <Animatable.View animation={isFocused ? "bounceIn" : null} duration={isFocused ? 10000 : null} iterationCount={2}
            style={styles.listItem}>
            <View style={{ alignItems: "center", justifyContent: 'center', padding: 2 }}>
                <View >
                    <Image source={item.vehi_image} style={{ width: 30, height: 30, margin: 5 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'column', alignItems: "center", flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", flex: 1 }}>
                    <View style={{ alignItems: "center", flex: 1 }}>
                        <Text style={{ fontFamily: 'googlesans_regular', color: '#212121', fontSize: 13 }}>{item.veh_name}</Text>
                    </View>
                    <View style={{ alignItems: "center", flex: 1, flexDirection: 'row' }}>
                        <Icon name="map-marker-distance" color='#B1B1B1' size={20} />

                        <Text style={{ fontFamily: 'googlesans_regular', color: '#212121', fontSize: 13, padding: 5 }}>8.3 Km</Text>

                    </View>
                </View>
                <View style={{ flex: 1, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: '#B1B1B1', padding: 5 }}>
                    <Text style={{ fontFamily: 'googlesans_regular', color: '#212121', fontSize: 11, paddingTop: 2 }}>{item.address}</Text>
                    <Text style={{ fontFamily: 'googlesans_regular', color: '#212121', fontSize: 11, paddingTop: 2 }}>{item.address2}</Text>
                    <Text style={{ fontFamily: 'googlesans_regular', color: '#212121', fontSize: 11, paddingTop: 2 }}>{item.start_time}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center", flex: 1, padding: 3 }}>
                    <View style={{ alignItems: "center", flex: 1, borderRightWidth: 0.5, borderColor: '#B1B1B1' }}>
                        <Icon name="adjust" color='red' size={20} />
                    </View>
                    <View style={{ alignItems: "center", flex: 1, borderRightWidth: 0.5, borderColor: '#B1B1B1' }}>
                        <Icon name="key-variant" color='#19C1EE' size={20} />
                    </View>
                    <View style={{ alignItems: "center", flex: 1, borderRightWidth: 0.5, borderColor: '#B1B1B1' }}>
                        <Icon name="crosshairs-gps" color='#19C1EE' size={20} />
                    </View>
                    <View style={{ alignItems: "center", flex: 1 }}>
                        <Text style={{ fontFamily: 'googlesans_regular', color: '#212121', fontSize: 10, padding: 5 }}>8.3 Kmph</Text>
                    </View>
                </View>


            </View>
            <TouchableOpacity style={{ alignItems: "center", justifyContent: 'center', padding: 5 }}>
                <View>
                    <Icon name="dots-vertical" color='#A1A1A1' size={30} />
                </View>
                <Text style={{ fontFamily: 'googlesans_regular', color: '#19C1EE', fontSize: 10, padding: 5 }}>More</Text>
            </TouchableOpacity>
        </Animatable.View>
    );
}


const TrackingTabScreen = () => {
    const data = [
        { vehi_image: require('../Assets/asset_6.png'), veh_name: "My Fassino1", travel_distance: 22, current_speed: 22, address: "MIG-3968,Rd Number 10,MIG Phase", address2: "2Colony,Serilingampally,Hyderabad", start_time: "Today june 23,2020" },
        { vehi_image: require('../Assets/asset_6.png'), veh_name: "My Fassino2", travel_distance: 22, current_speed: 22, address: "MIG-3968,Rd Number 10,MIG Phase", address2: "2Colony,Serilingampally,Hyderabad", start_time: "Today june 23,2020" },
        { vehi_image: require('../Assets/asset_6.png'), veh_name: "My Fassino3", travel_distance: 22, current_speed: 22, address: "MIG-3968,Rd Number 10,MIG Phase", address2: "2Colony,Serilingampally,Hyderabad", start_time: "Today june 23,2020" },
        { vehi_image: require('../Assets/asset_6.png'), veh_name: "My Fassino4", travel_distance: 22, current_speed: 22, address: "MIG-3968,Rd Number 10,MIG Phase", address2: "2Colony,Serilingampally,Hyderabad", start_time: "Today june 23,2020" },
        { vehi_image: require('../Assets/asset_6.png'), veh_name: "My Fassino5", travel_distance: 22, current_speed: 22, address: "MIG-3968,Rd Number 10,MIG Phase", address2: "2Colony,Serilingampally,Hyderabad", start_time: "Today june 23,2020" },

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
        width: "95%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 3, elevation: 5
    }
});