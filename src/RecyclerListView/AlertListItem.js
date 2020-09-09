import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import CardView from 'react-native-cardview';

export default class AlertListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <TouchableOpacity style={styles.CardHorizantalLL} onPress={() => this.showAlert(this.props.data.name)}>

                <View style={styles.CardLL}>
                    <CardView
                        cardElevation={5}
                        cardMaxElevation={5}
                        cornerRadius={5}
                        style={styles.cardViewStyle}>
                        <Image style={styles.cardInsideImage} source={this.props.data.image} />
                        <Text style={styles.name}>{this.props.data.name}</Text>
                        <Text style={styles.value}>{this.props.data.val}</Text>

                    </CardView>
                </View>
            </TouchableOpacity>

        );
    }

    showAlert = (name) => {
        Alert.alert('hello ', name, [{ text: "ok" }, { text: "cancel" }], { cancelable: false });
    }

}

const styles = StyleSheet.create({

    outerContainer: {
        flex: 1,
        alignItems: 'stretch',
        marginStart: 20,
        marginEnd: 10,
        marginTop: 5,
        borderRadius: 10,
    },


    nameEmailView: {
        justifyContent: 'center',
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "flex-start",
        marginStart: 10,
    },
    name: {
        fontFamily: 'montserrat_medium',
        fontSize: 15,
        color: '#000000',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    value: {
        color: '#000000',
        fontStyle: "normal",
        fontFamily: 'montserrat_medium',
        fontSize: 15,
    },
    cardViewStyle: {
        width: 150,
        height: 150,
        alignItems: "center"
    },
    cardInsideImage: {
        width: 35,
        height: 35,
        marginTop: 30,
        marginBottom: 5
    },
    CardLL: {
        flex: 1,
        marginLeft: 30,
        marginRight: 10,
        marginTop: 20,
        alignItems: "center"
    },
    CardHorizantalLL: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

