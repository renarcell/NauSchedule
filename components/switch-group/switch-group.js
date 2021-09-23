import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import SwitchButton from 'switch-button-react-native';


export default class SwitchGroup extends Component {
    state = {
        activeSwitch: 2,
      };

    render() {
        return (
            <View>
                <Text style={{textAlign: 'center', color: '#00bcc0'}}>{this.props.label}</Text>
                <SwitchButton onValueChange={this.props.onValueChange}
                            text1 = '1'
                            text2 = '2'
                            switchWidth = {115}                 
                            switchHeight = {42}                             
                            switchBorderRadius = {4}  
                            switchSpeedChange = {300}        
                            switchBorderColor = '#d4d4d4'        
                            switchBackgroundColor = '#fff'  
                            btnBorderColor = '#00a4b9'
                            btnBackgroundColor = '#00bcd4'
                            fontColor = '#b1b1b1' 
                            activeFontColor = '#fff'
                            secondSwitch={this.props.secondSwitch}/>
          </View>
        )
    }
}