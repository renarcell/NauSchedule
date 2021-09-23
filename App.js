import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import SwitchButton from 'switch-button-react-native';
import AccordionSchedule, {Record} from './components/day-item/day-item';
import SwitchGroup from './components/switch-group/switch-group';

import "./weeks/week1VT.jpg";
import "./weeks/week1CHT.jpg";
import "./weeks/week1SR.jpg";
import "./weeks/week1PT.jpg";

import "./weeks/week2VT.jpg";
import "./weeks/week2CHT.jpg";
import "./weeks/week2SR.jpg";
import "./weeks/week2PT.jpg";


let ScreenWidth = Dimensions.get("window").width;
export default class App extends Component {

  weeks = {
    week: {
      1: {
        "ПН": "./weeks/PN.jpg",
        "ВТ": "./weeks/week1VT.jpg",
        "СР": "./weeks/week1SR.jpg",
        "ЧТ": "./weeks/week1CHT.jpg",
        "ПТ": "./weeks/week1PT.jpg"
      },
      2: {
        "ПН": "./weeks/PN.jpg",
        "ВТ": "./weeks/week2VT.jpg",
        "СР": "./weeks/week2SR.jpg",
        "ЧТ": "./weeks/week2CHT.jpg",
        "ПТ": "./weeks/week2PT.jpg"
      }
    }
  }
  state = {
    week: 1,
    group: 2
  };

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'space-around', 
        alignItems: 'center'
      },
      buttons: {
        width: ScreenWidth,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      days: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      }
    });

    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
            <SwitchGroup onValueChange={(val) => this.setState({ week: val })}
                        secondSwitch={false}
                        label="НЕДЕЛЯ"/>
            <SwitchGroup onValueChange={(val) => this.setState({ group: val })}
                  secondSwitch={true}
                  label="ПОДГРУППА"/>
        </View>


        <View style={styles.days}>
          <AccordionSchedule week={this.state.week}
                             group={this.state.group}/>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

}
