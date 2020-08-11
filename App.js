import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert, Button, TouchableNativeFeedback } from "react-native";
import FlexGrid from "./components/FlexGrid";
import DiceRoller from './components/DiceRoller';
import CurrencyConverter from './components/CurrencyConverter';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            loading: false,
            bgColor: bgColor,
        };
    }

    // no event, just the raw text gets passed
    handleChange = (text) => {
        console.log(text);
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 1000);
        this.setState({ text });
    };

    handleButtonPress = () => {
        console.log("button press");
        this.setState({ bgColor: "#7fe2c1" });
        Alert.alert("CLICKED");
        console.log(this.state.bgColor);
    };

    handleLogIn = ()=> {
      const rgb = `rgb(${this.getRandomRGB()}, ${this.getRandomRGB()},${this.getRandomRGB()})`;
      console.log(rgb);
      this.setState({bgColor: rgb});
    }

    getRandomRGB = ()=> {
      return Math.floor((Math.random() * 256));
    }

    render() {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: this.state.bgColor
                }}
            >
                <TextInput
                    style={styles.inputText}
                    placeholder={"enter something"}
                    value={this.state.text}
                    onChangeText={this.handleChange}
                />
                <Text>{JSON.stringify(this.state.loading)}</Text>
                <View style={styles.SubmitButtonContainer}>
                    <Button
                        color={this.state.bgColor}
                        onPress={this.handleButtonPress}
                        title='Click Here'
                    />
                </View>

                <TouchableNativeFeedback onPress={this.handleLogIn}>
                  <Text style={styles.CustomButton}>
                    Log In
                  </Text>
                </TouchableNativeFeedback>

                {/* <DiceRoller /> */}
                <CurrencyConverter />
            </SafeAreaView>
        );
    }
}

let bgColor = "#fff";

const styles = StyleSheet.create({
    inputText: {
        height: 50,
        width: 200,
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        borderColor: "#23abab",
    },
    SubmitButtonContainer: {
        height: 50,
        width: 150,
        color: "#000",
        backgroundColor: bgColor,
    },
    CustomButton: {
      fontSize: 20,
      textAlign: "center",
      padding: 10,
      borderRadius: 5,
      width: 150,
      height: 50,
      color: "#fff",
      backgroundColor: '#123aba',
      shadowRadius: 5,
      shadowColor: '#000',
      shadowOffset: {width: 10, height: 10},
    }
});
