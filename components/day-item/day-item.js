import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import Accordion from 'react-native-collapsible/Accordion';
import { styles } from 'styled-system';

export const Record = ( {num, lesson, aud, teacher, isLecture } ) => {
    return <div>{ lesson }</div>
}

let SECTIONS = [
  {
    title: 'ПОНЕДЕЛЬНИК',
    content: {
      week: {
        1: "./weeks/PN.jpg",
        2: "./weeks/PN.jpg"
      }
    }
  },

  
  {
    title: 'ВТОРНИК',
    content: {
      week: {
        1: "./weeks/week1VT.jpg",
        2: "./weeks/week2VT.jpg"
      }
    }
  },

  {
    title: 'СРЕДА',
    content: {
      week: {
        1: "./weeks/week1SR.jpg",
        2: "./weeks/week2SR.jpg"
      }
    }
  },

  {
    title: 'ЧЕТВЕРГ',
    content: {
      week: {
        1: "./weeks/week1CHT.jpg",
        2: "./weeks/week2CHT.jpg"
      }
    }
  },

  {
    title: 'ПЯТНИЦА',
    content: {
      week: {
        1: "./weeks/week1PT.jpg",
        2: "./weeks/week2PT.jpg"
      }
    }
  }
];



SECTIONS = [{title: ""}]
let ScreenWidth = Dimensions.get("window").width;

export default class AccordionSchedule extends Component {

  componentDidMount = () => {
      this.setState({
          week: this.props.week,
          group: this.props.group
      })
  }

  componentDidUpdate = (prevProps) => {
    if ((this.props.week != this.state.week) || (this.props.group != this.state.group)) {
      this.setState({
        week: this.props.week,
        group: this.props.group
      })
    }
  }
  
  state = {
      activeSections: [],
      week: 1,
      group: 1,
    };

  
    _renderHeader = (section) => {
      const styles = StyleSheet.create({
        container: { width: 0.5 * ScreenWidth,
                      height: 50,
                      margin: 10,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      borderRadius: 4.5, 
                      backgroundColor: '#00bcd4',
                      justifyContent: 'center', 
                      alignItems: 'center',
                      
                    }
      });
      return (
        <View style={styles.container}>
          <Text style={{color: '#08ffff'}}>{section.title}</Text>
        </View>
      );
    };
  
    _renderContent = (section) => {
      const { week, group } = this.state;
      const styles = StyleSheet.create({
          container: {  margin: 'auto', width: 0.95 * ScreenWidth, padding: 10, paddingTop: 2, backgroundColor: '#fff' },
          head: { height: 25, backgroundColor: '#f1f8ff', fontSize: 10, textAlign: 'center'},
          text: { margin: 5, fontSize: 10 , textAlign: 'center'},
          textPractice: { margin: 5, fontSize: 10 , textAlign: 'center'},
          textLecture: { margin: 5, fontSize: 10 , textAlign: 'center', color: 'gold'},
          wrapper: { flexDirection: 'row' },
        });

        const flexArr = [1.3, 8, 2, 4];
        let tableHead =  ['№', 'Предмет', 'Аудит.', 'Препод.'];
        const renderLessons =  [['1', '', '', ''],
        ['2', '', '', ''],
        ['3', '', '', ''],
        ['4', '', '', ''],
        ['5', '', '', '']];
        const lectures = [ false,false,false,false,false ];

        const weekLessons = section.content.week[week];

        weekLessons.forEach(item => {

            const { num, lesson, aud, teacher, isLecture } = item;
            lectures[+num - 1] = isLecture;
            const k = lectures[+num - 1] ? 1 : group;
            renderLessons[+num - 1] = [`${num}`, lesson[k - 1], aud[k - 1], teacher[k - 1]];
          // if (week == 2 && section.title == "ВТОРНИК" && item === section.content.week[2][3]) {
          //   console.log(renderLessons[4])
          // }

        });
      return (
          <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={tableHead} flexArr={flexArr} style={styles.head} textStyle={styles.text}/>
                <Row data={renderLessons[0]} flexArr={flexArr} textStyle={lectures[0] ? styles.textLecture : styles.textPractice}/>
                <Row data={renderLessons[1]} flexArr={flexArr} textStyle={lectures[1] ? styles.textLecture : styles.textPractice}/>
                <Row data={renderLessons[2]} flexArr={flexArr} textStyle={lectures[2] ? styles.textLecture : styles.textPractice}/>
                <Row data={renderLessons[3]} flexArr={flexArr} textStyle={lectures[3] ? styles.textLecture : styles.textPractice}/>
                <Row data={renderLessons[4]} flexArr={flexArr} textStyle={lectures[4] ? styles.textLecture : styles.textPractice}/>
            </Table>
          </View>
      );
    };
  
    _updateSections = (activeSections) => {
      this.setState({ activeSections });
    };
  
    render() {
      console.log('group:', this.state.group)
      console.log('week:', this.state.week)
      const styles = StyleSheet.create({
        container: {
                      justifyContent: 'center', 
                      alignItems: 'center'
                    }
      });
      
      return (
        <Accordion style={styles.container}
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      );
    }
}