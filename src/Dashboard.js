import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 22, title: "Moving", image: require('../Assets/asset_12.png') },
                { id: 1, title: "Stopped", image: require('../Assets/asset_10.png') },
                { id: 2, title: "Idle", image: require('../Assets/asset_9.png') },
                { id: 3, title: "No Gps", image: require('../Assets/asset_5.png') },
                { id: 4, title: "Not polled", image: require('../Assets/asset_6.png') },
                { id: 5, title: "All", image: require('../Assets/asset_11.png') }

            ]
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.state.data}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.card}>
                                <View ></View>
                                <Image style={styles.cardImage} source={item.image} />
                                <View>
                                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.subtitle}>{item.id}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: "center"
    },

    /******* card *************/
    card: {

        elevation: 5,
        marginVertical: 10,
        backgroundColor: "white",
        flexBasis: '35%',
        marginHorizontal: 15,
    },

    cardImage: {
        height: 60,
        width: 60,
        alignSelf: 'center',
        marginTop: 15
    },
    title: {
        fontFamily: 'googlesans_regular', color: '#A1A1A1', marginTop: 5, fontSize: 16,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
    subtitle: {
        fontFamily: 'googlesans_medium', marginTop: 5, marginBottom: 15,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
});