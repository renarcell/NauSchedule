import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import AccordionSchedule from './components/accordion-schedule/accordion-schedule';
import SwitchGroup from './components/switch-group/switch-group';
import WeekNumber from './components/week-number/week-number';
import RandomButton from './components/random-button/random-button';
let ScreenWidth = Dimensions.get("window").width;
export default class App extends Component {

  state = {
    week: 1,
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
      topPanel: {
        width: ScreenWidth,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      scheduleButtons: {
        width: ScreenWidth,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-around'
      },
      randomContainer: {
        paddingTop: 35,
        
      },
      randomButton: {
        width: 0.5 * ScreenWidth,
                      height: 50,
                      margin: 10,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      borderRadius: 4.5, 
                      backgroundColor: '#00bcd4',
                      justifyContent: 'center', 
                      alignItems: 'center',
      },
      days: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      }
    });

    return (
      <View style={styles.container}>
        <View style={styles.topPanel}>
            <View style={styles.scheduleButtons}>
                <SwitchGroup onValueChange={(val) => this.setState({ week: val })}
                              secondSwitch={false}
                              label="НЕДЕЛЯ"/>
                <WeekNumber/>
            </View>

          <View style={styles.randomContainer}>
            <RandomButton style={styles.randomButton}/>
          </View>
        </View>


        <View style={styles.days}>
          <AccordionSchedule week={this.state.week}/>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

}
