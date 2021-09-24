import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Button, Modal } from 'react-native';
import SwitchButton from 'switch-button-react-native';


export default class RandomButton extends Component {

    render() {
        return (
            <Button onPress={() => {}}
                title="ПОДБРОСИТЬ МОНЕТКУ"
                color="#00bcd4"
                accessibilityLabel="Learn more about this purple button"
            />
        );
    }
}
