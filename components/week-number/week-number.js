import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';

let ScreenWidth = Dimensions.get("window").width;

export default class WeekNumber extends Component {

    render() {
        return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#00bcd4'}}>
                ТЕКУЩАЯ НЕДЕЛЯ: 
            </Text>
            <View style={{color: 'red',
                          textAlign: 'center',
                          width: 115,
                          height: 42,
                          borderRadius: 4,
                          borderWidth:1,
                          borderColor: '#d4d4d4',
                          alignItems: 'center',
                          justifyContent: 'center'
                          }}>
            <Text style={{color: 'red', textAlign: 'center'}}>
                {
                    this.props.getWeekNumber()
                }
            </Text>
            </View>

        </View>
        );
    }
}