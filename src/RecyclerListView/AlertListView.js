import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { RecyclerListView, LayoutProvider, DataProvider } from "recyclerlistview";
import AlertData from './AlertData';
import LinearGradient from 'react-native-linear-gradient';
import AlertListItem from './AlertListItem';


let { height, width } = Dimensions.get('window');


// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;
// const SCREEN_HEIGHT = width < height ? height : width;
const isSmallDevice = SCREEN_WIDTH <= 400;
const numColumns = isSmallDevice ? 2 : 3;
// item size
const PRODUCT_ITEM_HEIGHT = 155;
const PRODUCT_ITEM_OFFSET = 5;
const PRODUCT_ITEM_MARGIN = PRODUCT_ITEM_OFFSET * 2;

export default class AlertListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProvider: new DataProvider((r1, r2) => {
                return r1 !== r2
            }).cloneWithRows(AlertData)
        };

        this._layoutProvider = new LayoutProvider((i) => {
            return this.state.dataProvider.getDataForIndex(i).name;
        }, (name, dim) => {
            switch (name) {
                case "abc":
                    dim.width = width;
                    dim.height = 80;
                    break;
                default:
                    dim.width = width / 2.125;
                    dim.height = PRODUCT_ITEM_HEIGHT + PRODUCT_ITEM_MARGIN;
            }

        });
        this._renderRow = this._renderRow.bind(this);
    }

    _renderRow(name, data) {
        switch (name) {
            case "abc":
                return <AlertListItem data={data} />;
                break;
            default:
                return <AlertListItem data={data} />;
                break;
        }
    }

    render() {

        return (

            <LinearGradient
                style={{ flex: 1 }}
                colors={['#00000000', '#00000000']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>

                <RecyclerListView style={styles.reclerListView} rowRenderer={this._renderRow} dataProvider={this.state.dataProvider}
                    layoutProvider={this._layoutProvider} />
            </LinearGradient>

        );
    }
}


const styles = {
    reclerListView: {
        flex: 2,
        backgroundColor: '#00000000',
        minHeight: '90%',
        minWidth: '100%',
        marginBottom: 0
    }
}
