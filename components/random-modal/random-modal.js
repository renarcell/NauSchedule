import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, Alert, Modal, Pressable, Image } from 'react-native';

let ScreenWidth = Dimensions.get("window").width;
let ScreenHeight = Dimensions.get("window").height;
export default class RandomModal extends Component {

    getRandom() {
        return Math.floor(Math.random() * 2);
      }

    state = {
        modalVisible: false
    }
    componentDidMount = () => {
        this.setState({
            modalVisible: this.props.modalVisible
        })
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.modalVisible != prevProps.modalVisible) {
            this.setState({
                modalVisible: this.props.modalVisible
            })
        }
    }
    render() {
        let modalVisible = this.state.modalVisible;
        console.log(modalVisible)
        const styles = StyleSheet.create({
            imageView: {
                flex: 1, 
                borderRadius: 4,
                alignItems: "center",
            justifyContent: "center",
        },
            image: {
                width: 230, 
                height: 230, 
                resizeMode: 'cover'
            },
            centeredView: {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 22
            },
            modalView: {
              width: 0.7*ScreenWidth,
              height: 0.6*ScreenHeight,
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5
            },
            button: {
              borderRadius: 4,
              padding: 10,
              elevation: 2
            },
            buttonClose: {
              backgroundColor: "#00bcd4",
            },
            textStyle: {
              color: "white",
              fontWeight: "bold",
              textAlign: "center"
            },
            modalText: {
              marginBottom: 15,
              textAlign: "center"
            }
          });

        const randomImage = this.getRandom() ? require("../../assets/yes.gif") : require("../../assets/nope.gif")
        return (
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                this.props.setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <View style={styles.imageView}>
                    <Image style={styles.image}
                        source={randomImage}/>
                </View>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.props.setModalVisible(false)}
                  >
                    <Text style={styles.textStyle}>ЗАКРЫТЬ</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

        );
    }
}