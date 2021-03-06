import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Alert, Modal, Pressable } from 'react-native';
import AccordionSchedule from './components/accordion-schedule/accordion-schedule';
import SwitchGroup from './components/switch-group/switch-group';
import WeekNumber from './components/week-number/week-number';
import RandomButton from './components/random-button/random-button';
import RandomModal from './components/random-modal/random-modal';
import SwipeableTabs from "react-native-swipe-tabs";
import { Col, Row, Grid } from 'react-native-easy-grid';

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
    modalVisible: false,
    selectedTab: 1
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
      <SwipeableTabs style={{marginTop: 30}}
                onSwipe={x => this.setState({ selectedTab: x })}
                selectedIndex={this.state.selectedTab}>
        <>
          <View style={styles.container}>
            <View style={styles.topPanel}>
                <View style={styles.scheduleButtons}>
                    <SwitchGroup onValueChange={(val) => this.setState({ week: val })}
                                  secondSwitch={this.state.week == 2}
                                  label="????????????"/>
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
        <TimeSchedule/>
      </SwipeableTabs>
    );
  }

}

const TimeSchedule = (props) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%'
    },
    textView: {
      paddingTop: 100,
    },
    text: {
      textAlign: 'center',
    },
    textMain: {
      padding: 15,
      fontSize: 20,
      color: '#00bcd4',
    },
    textLittle: {
      marginTop: 2,
      fontSize: 15,
      color: '#00bfff',
    },
    table: {
      width: '100%',
      height: 350,
      padding: 16,
      marginTop: 50,
      backgroundColor: '#fff',
    },
    grid: {
    },
    cell: {
      borderWidth: 1,
      borderColor: '#ddd',
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

  const titleRows = [];
  for (let i = 1; i <=7; i++) {
    titleRows.push(
      <Row style={styles.cell}>
        <Text>{i} ????????</Text>
      </Row>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={[styles.text, styles.textMain]}>???????????????????? ??????????????</Text>
        <Text style={[styles.text, styles.textLittle]}>???????????????????????? ????????:</Text>
        <Text style={[styles.text, styles.textLittle]}>45 ?????? + 5 ?????? ?????????????? + 45 ??????</Text>
        <Text style={[styles.text, styles.textLittle]}>???????????????????????? ????????????????:</Text>
        <Text style={[styles.text, styles.textLittle]}>15 ??????</Text>
      </View>
      <View style={styles.table}>
        <Grid style={styles.grid}>
          <Col size={25}>
            {titleRows}
          </Col>
          <Col size={25}>
            <Row style={styles.cell}>
              <Text>08:00</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>09:50</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>11:40</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>13:30</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>15:20</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>17:10</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>19:00</Text>
            </Row>
          </Col>
          <Col size={25}>
          <Row style={styles.cell}>
              <Text>09:35</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>11:25</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>13:15</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>15:05</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>16:55</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>18:45</Text>
            </Row>
            <Row style={styles.cell}>
              <Text>20:35</Text>
            </Row>
          </Col>
  </Grid>
</View>

    </View>
)
}