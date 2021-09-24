import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';


let SECTIONS = [
  {
    title: 'ПОНЕДЕЛЬНИК',
    content: {
      week: {
        1: require("../../weeks/PN.jpg"),
        2: require("../../weeks/PN.jpg")
      }
    }
  },

  
  {
    title: 'ВТОРНИК',
    content: {
      week: {
        1: require("../../weeks/week1VT.jpg"),
        2: require("../../weeks/week2VT.jpg")
      }
    }
  },

  {
    title: 'СРЕДА',
    content: {
      week: {
        1: require("../../weeks/week1SR.jpg"),
        2: require("../../weeks/week2SR.jpg")
      }
    }
  },

  {
    title: 'ЧЕТВЕРГ',
    content: {
      week: {
        1: require("../../weeks/week1CHT.jpg"),
        2: require("../../weeks/week2CHT.jpg")
      }
    }
  },

  {
    title: 'ПЯТНИЦА',
    content: {
      week: {
        1: require("../../weeks/week1PT.jpg"),
        2: require("../../weeks/week2PT.jpg")
      }
    }
  }
];

let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;

export default class AccordionSchedule extends Component {

  componentDidMount = () => {
      this.setState({
          week: this.props.week
      })
  }

  componentDidUpdate = (prevProps) => {
    if ((this.props.week != this.state.week)) {
      this.setState({
        week: this.props.week
      })
    }
  }
  
  state = {
      activeSections: [],
      week: 1,
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
      const { week } = this.state;
      const styles = StyleSheet.create({
          container: {  margin: 'auto', 
                        width: ScreenWidth, 
                        paddingTop: 2, 
                        backgroundColor: '#fff' },
          image: {width: ScreenWidth, resizeMode: 'center'}
        });
      const weekLessons = section.content.week[week];

      return (
          <View style={styles.container}>
            <Image style={styles.image}
                   source={weekLessons}/>
          </View>
      );
    };
  
    _updateSections = (activeSections) => {
      this.setState({ activeSections });
    };
  
    render() {
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