import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';

let ScreenWidth = Dimensions.get("window").width;

export default class WeekNumber extends Component {
    getWeekNumber() {
        const one_day = 1000 * 60 * 60 * 24;
        const date1 = new Date(2021, 8, 13);
        const date2 = new Date();
        const k = Math.floor((Math.round(date2.getTime() - date1.getTime()) / (one_day))/7) % 2;
        return k + 1;
    }

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
                    this.getWeekNumber()
                }
            </Text>
            </View>

        </View>
        );
    }
}