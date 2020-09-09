import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import * as Animatable from 'react-native-animatable';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import http from 'axios';


const DashBoardnew = () => {
    const isFocused = useIsFocused();
    const [userName, setUserName] = useState('assettl');
    const [Privil, setPrivilege] = useState('assettl2');
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});



    useEffect(() => {


        const bootstrapAsync = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('userLoginData');
                const user = JSON.parse(jsonValue).UserID;
                const prev = JSON.parse(jsonValue).Privilege;
                setUserName(user);
                setPrivilege(prev);
                DashboardUrl(user, prev);
            } catch (e) {
                // error reading value
            }
        };

        bootstrapAsync();
        const DashboardUrl = (user1, prev1) => {
            console.log('username:' + user1);

            let userDetails = {
                userId: user1,
                Privilege: prev1,
            };
            //  console.log(userDetails);

            http.post('http://182.18.161.55/AC_PROD_MobileAPI_Core/api/Dashboard/DashBoard', userDetails)
                .then((result) => {
                    setLoading(false);
                    console.log(result.data[0]);
                    setData(result.data[0]);

                })
                .catch((err) => {
                    console.log(err);
                });



        }

        console.log('user' + userName);
        console.log('prev' + Privil);





    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Touchable style={styles.widgets}>
                    <View style={styles.view}>
                        <Animatable.Image
                            animation={isFocused ? 'bounceIn' : null}
                            duration={isFocused ? 5000 : null}
                            style={{
                                width: 40,
                                height: 40,
                                resizeMode: 'contain',
                            }}
                            source={require('../Assets/asset_12.png')}></Animatable.Image>
                        <Animatable.Text animation={isFocused ? 'fadeInLeft' : null} style={{ fontFamily: 'googlesans_regular', color: '#A1A1A1', marginTop: 10, fontSize: 16 }}>
                            Moving
                        </Animatable.Text>
                        <Animatable.Text
                            animation={isFocused ? 'fadeInRight' : null} style={{ fontFamily: 'googlesans_medium', marginTop: 10 }}>{data.RunningVehsCount}</Animatable.Text>
                    </View>
                </Touchable>
                <Touchable style={styles.widgets}>
                    <View style={styles.view}>
                        <Animatable.Image
                            animation={isFocused ? 'bounceIn' : null}
                            duration={isFocused ? 5000 : null}
                            style={{
                                width: 40,
                                height: 40,
                                resizeMode: 'contain',
                            }}
                            source={require('../Assets/asset_10.png')}></Animatable.Image>
                        <Animatable.Text animation={isFocused ? 'fadeInLeft' : null} style={{ fontFamily: 'googlesans_regular', color: '#A1A1A1', marginTop: 10, fontSize: 16 }}>
                            Stopped
                        </Animatable.Text>
                        <Animatable.Text
                            animation={isFocused ? 'fadeInRight' : null} style={{ fontFamily: 'googlesans_medium', marginTop: 10 }}>{data.StoppedVehsCount}</Animatable.Text>
                    </View>
                </Touchable>
            </View>
            <View style={styles.row}>
                <Touchable style={styles.widgets}>
                    <View style={styles.view}>
                        <Animatable.Image
                            animation={isFocused ? 'bounceIn' : null}
                            duration={isFocused ? 5000 : null}
                            style={{
                                width: 40,
                                height: 40,
                                resizeMode: 'contain',
                            }}
                            source={require('../Assets/asset_9.png')}></Animatable.Image>
                        <Animatable.Text animation={isFocused ? 'fadeInLeft' : null} style={{ fontFamily: 'googlesans_regular', color: '#A1A1A1', marginTop: 10, fontSize: 16 }}>
                            Idle
                        </Animatable.Text>
                        <Animatable.Text
                            animation={isFocused ? 'fadeInRight' : null} style={{ fontFamily: 'googlesans_medium', marginTop: 10 }}>{data.IdleVehsCount}</Animatable.Text>
                    </View>
                </Touchable>
                <Touchable style={styles.widgets}>
                    <View style={styles.view}>
                        <Animatable.Image
                            animation={isFocused ? 'bounceIn' : null}
                            duration={isFocused ? 5000 : null}
                            style={{
                                width: 40,
                                height: 40,
                                resizeMode: 'contain',
                            }}
                            source={require('../Assets/asset_5.png')}></Animatable.Image>
                        <Animatable.Text animation={isFocused ? 'fadeInLeft' : null} style={{ fontFamily: 'googlesans_regular', color: '#A1A1A1', marginTop: 10, fontSize: 16 }}>
                            No Gps
                        </Animatable.Text>
                        <Animatable.Text
                            animation={isFocused ? 'fadeInRight' : null} style={{ fontFamily: 'googlesans_medium', marginTop: 10 }}>{data.NoGpsVehCount}</Animatable.Text>
                    </View>
                </Touchable>
            </View>
            <View style={styles.row}>
                <Touchable style={styles.widgets}>
                    <View style={styles.view}>
                        <Animatable.Image
                            animation={isFocused ? 'bounceIn' : null}
                            duration={isFocused ? 5000 : null}
                            style={{
                                width: 40,
                                height: 40,
                                resizeMode: 'contain',
                            }}
                            source={require('../Assets/asset_6.png')}></Animatable.Image>
                        <Animatable.Text animation={isFocused ? 'fadeInLeft' : null} style={{ fontFamily: 'googlesans_regular', color: '#A1A1A1', marginTop: 10, fontSize: 16 }}>
                            Not Polled
                        </Animatable.Text>
                        <Animatable.Text
                            animation={isFocused ? 'fadeInRight' : null} style={{ fontFamily: 'googlesans_medium', marginTop: 10 }}>{data.NotPolledVehCount}</Animatable.Text>
                    </View>
                </Touchable>
                <Touchable style={styles.widgets}>
                    <View style={styles.view}>
                        <Animatable.Image
                            animation={isFocused ? 'bounceIn' : null}
                            duration={isFocused ? 5000 : null}
                            style={{
                                width: 40,
                                height: 40,
                                resizeMode: 'contain',
                            }}
                            source={require('../Assets/asset_11.png')}></Animatable.Image>
                        <Animatable.Text animation={isFocused ? 'fadeInLeft' : null} style={{ fontFamily: 'googlesans_regular', color: '#A1A1A1', marginTop: 10, fontSize: 16 }}>
                            All
                        </Animatable.Text>
                        <Animatable.Text
                            animation={isFocused ? 'fadeInRight' : null} style={{ fontFamily: 'googlesans_medium', marginTop: 10 }}>{data.TotalVehsCount}</Animatable.Text>
                    </View>
                </Touchable>
            </View>


        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 15,
        marginBottom: 20
    },

    row: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    widgets: {
        elevation: 5,
        marginVertical: 10,
        backgroundColor: "white",
        flexBasis: '35%',
        marginHorizontal: 15,
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
export default DashBoardnew;