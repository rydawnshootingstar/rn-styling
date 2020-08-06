import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import FlexGrid from "./components/FlexGrid";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "AAAAA",
            loading: false
        };
    }

    // no event, just the raw text gets passed
    handleChange = (text) => {
        console.log(text);
        this.setState({
          loading: true
        });
        setTimeout(()=> {
          this.setState({
            loading:false
          })
        }, 1000)
        this.setState({ text });
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <TextInput
                    style={styles.inputText}
                    placeholder={"enter something"}
                    value={this.state.text}
                    onChangeText={this.handleChange}
                />
                <Text>{JSON.stringify(this.state.loading)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputText: {
        height: 50,
        width: 200,
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        borderColor: "#23abab",
    },
});
