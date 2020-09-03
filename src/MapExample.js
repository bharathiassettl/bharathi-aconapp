import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, {
    PROVIDER_GOOGLE,
    Marker,
    AnimatedRegion,
    Polyline,
} from 'react-native-maps';
import haversine from 'haversine';

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 26.88338;
const LONGITUDE = 85.109395;

class MapExmaple extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            routeCoordinates: [],
            distanceTravelled: 0,

            prevLatLng: {},
            bearingDegree: '1deg',
            coordinate: new AnimatedRegion({
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: 0,
                longitudeDelta: 0,
            }),
        };
    }

    componentDidMount() {
        // this.requestCameraPermission();
        // Geolocation.getCurrentPosition(
        //   (position) => {
        //     this.setState({
        //       latitude: position.coords.latitude,
        //       longitude: position.coords.longitude,
        //     });
        //   },
        //   (error) => this.setState({error: error.message}),
        //   {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
        // );
        // const {coordinate} = this.state;
        // this.watchID = Geolocation.watchPosition(
        //   (position) => {
        //     const {routeCoordinates, distanceTravelled} = this.state;
        //     const {latitude, longitude} = position.coords;
        //     console.log(position);
        //     const newCoordinate = {
        //       latitude,
        //       longitude,
        //     };
        //     console.log({newCoordinate});
        //     if (Platform.OS === 'android') {
        //       if (this.marker) {
        //         let dd = this.calculeteDegree(
        //           this.state.latitude,
        //           this.state.longitude,
        //           latitude,
        //           longitude,
        //         );
        //         console.log('======================');
        //         console.log(dd);
        //         console.log('======================');
        //         this.setState({bearingDegree: dd + 'deg'});
        //         this.marker.animateMarkerToCoordinate(newCoordinate, 1000);
        //       }
        //     } else {
        //       coordinate.timing(newCoordinate).start();
        //     }
        //     this.setState({
        //       latitude,
        //       longitude,
        //       routeCoordinates: routeCoordinates.concat([newCoordinate]),
        //       distanceTravelled:
        //         distanceTravelled + this.calcDistance(newCoordinate),
        //       prevLatLng: newCoordinate,
        //     });
        //   },
        //   (error) => console.log(error),
        //   {
        //     enableHighAccuracy: true,
        //     timeout: 20000,
        //     maximumAge: 1000,
        //     distanceFilter: 10,
        //   },
        // );
    }

    componentWillUnmount() {
        // Geolocation.clearWatch(this.watchID);
    }

    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });

    calcDistance = (newLatLng) => {
        const { prevLatLng } = this.state;
        return haversine(prevLatLng, newLatLng) || 0;
    };

    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Location Access Permission',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    calculeteDegree(latd1, longd1, latd2, longd2) {
        let PI = 3.14159;
        let lat1 = (latd1 * PI) / 180;
        let long1 = (longd1 * PI) / 180;
        let lat2 = (latd2 * PI) / 180;
        let long2 = (longd2 * PI) / 180;

        let dLon = long2 - long1;

        let y = Math.sin(dLon) * Math.cos(lat2);
        let x =
            Math.cos(lat1) * Math.sin(lat2) -
            Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

        let brng = Math.atan2(y, x);

        console.log(brng);
        brng = brng * (180 / PI);
        brng = (brng + 360) % 360;
        return brng;
    }
    setMarker = (marker) => {
        const { coordinate } = this.state;
        const dd = [
            { latitude: 26.88338, longitude: 85.109395 },

            { latitude: 26.882624, longitude: 85.107303 },
            { latitude: 26.882634, longitude: 85.107225 },
        ];

        for (d of dd) {
            const { routeCoordinates, distanceTravelled } = this.state;
            const { latitude, longitude } = d;

            const newCoordinate = {
                latitude,
                longitude,
            };
            console.log({ newCoordinate });

            if (Platform.OS === 'android') {
                if (marker) {
                    let dd = this.calculeteDegree(
                        this.state.latitude,
                        this.state.longitude,
                        latitude,
                        longitude,
                    );
                    console.log('======================');
                    console.log(dd);
                    console.log('======================');
                    this.setState({ bearingDegree: dd + 'deg' });
                    marker.animateMarkerToCoordinate(newCoordinate, 4000);
                }
            } else {
                coordinate.timing(newCoordinate).start();
            }

            this.setState({
                latitude,
                longitude,
                routeCoordinates: routeCoordinates.concat([newCoordinate]),
                distanceTravelled: distanceTravelled + this.calcDistance(newCoordinate),
                prevLatLng: newCoordinate,
            });

            // marker.animateMarkerToCoordinate(d, 7000);
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    showUserLocation
                    followUserLocation
                    loadingEnabled
                    region={this.getMapRegion()}>
                    <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
                    <Marker.Animated
                        ref={(marker) => {
                            this.setMarker(marker);
                        }}
                        coordinate={this.state.coordinate}
                        style={{
                            transform: [{ rotate: this.state.bearingDegree }],
                        }}>
                        <Image
                            source={require('../Assets/ic_car.png')}
                            style={{ height: 35, width: 35 }}
                        />
                    </Marker.Animated>
                </MapView>
                <View style={styles.buttonContainer}>
                    <Text style={styles.bottomBarContent}>
                        {parseFloat(this.state.distanceTravelled).toFixed(2)} km
          </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});
export default MapExmaple;
