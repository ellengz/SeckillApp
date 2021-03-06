/**
 * Created by ellen on 22/5/18.
 */
'use strict';

import React, { Component } from 'react';
import {
    Image,
    TextInput,
    View,
    StyleSheet,
    Platform,
    Button,
    AsyncStorage
} from 'react-native';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBox}>
                    <Image source={require('../../images/icon_search.png')} style={styles.searchIcon} />
                    <TextInput
                        keyboardType='web-search'
                        placeholder='Search a product/store'
                        style={styles.inputText}/>
                </View>
            </View>
        )
    }

    // _handleLogout() {
    //     AsyncStorage.clear();
    //     this.props.navigation.navigate('Auth');
    // }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // default value is 'column'
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,   // for iOS status bar
        height: Platform.OS === 'ios' ? 75 : 55,   // for iOS status bar
        backgroundColor: 'orangered',
        alignItems: 'center'
    },
    searchIcon: {
        marginLeft: 6,
        marginRight: 6,
        width: 16.7,
        height: 16.7,
        resizeMode: 'stretch'
    },
    searchBox: {
        height: 38,
        flexDirection: 'row',
        flex: 1,
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    inputText: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 14
    }
});