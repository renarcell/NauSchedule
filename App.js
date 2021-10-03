import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Alert, Modal, Pressable } from 'react-native';
import AccordionSchedule from './components/accordion-schedule/accordion-schedule';
import SwitchGroup from './components/switch-group/switch-group';
import WeekNumber from './components/week-number/week-number';
import RandomButton from './components/random-button/random-button';
import RandomModal from './components/random-modal/random-modal';

let ScreenWidth = Dimensions.get("window").width;
export default class App extends Component {

  getWeekNumber() {
    const one_day = 1000 * 60 * 60 * 24;
    const date1 = new Date(2021, 8, 13);
    const date2 = new Date();
    const k = Math.floor((Math.round(date2.getTime() - date1.getTime()) / (one_day))/7) % 2;
    return k + 1;
  }

  state = {
    week: this.getWeekNumber(),
    modalVisible: false
  };

  setModalVisible = (val) => {
    this.setState((state) => {
      return {
        modalVisible: val
      };
    })
  }

  switchModalVisible = () => {
    this.setState((state) => {
      return {
        modalVisible: !state.modalVisible
      };
    })
  }

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
        width: 0.5 * ScreenWidth,
        height: 60,
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
      <>
      <View style={styles.container}>
        <View style={styles.topPanel}>
            <View style={styles.scheduleButtons}>
                <SwitchGroup onValueChange={(val) => this.setState({ week: val })}
                              secondSwitch={this.state.week == 2}
                              label="НЕДЕЛЯ"/>
                <WeekNumber getWeekNumber={ this.getWeekNumber}/>
            </View>

          <View style={styles.randomContainer}>
            <RandomButton st={styles.randomButton}
                          onPress={this.switchModalVisible}/>
          </View>
        </View>


        <View style={styles.days}>
          <AccordionSchedule week={ this.state.week }
                             weekNumber={ this.getWeekNumber() }/>
        </View>
        <StatusBar style="auto" />
      </View>
      <View>
        <RandomModal modalVisible={ this.state.modalVisible }
                     setModalVisible={this.setModalVisible}/>
        </View>
      </>
    );
  }

}
