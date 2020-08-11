import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";


// hard coded lol numbers are from 8/11/20
// keyboardType is cool
const conversionValues = [
    { code: "eur", value: 0.8494 },
    { code: "gbp", value: 0.7639 },
    { code: "inr", value: 74.64 },
    { code: "aud", value: 1.396 },
    { code: "cad", value: 1.33 },
    { code: "sgd", value: 1.371 },
    { code: "cny", value: 6.946 },
    { code: "hkd", value: 7.75 },
    { code: "krw", value: 1184.61 },
    { code: "mxn", value: 22.4 },
];

class CurrencyConverter extends React.Component {
    state = {
        dollarValue: undefined,
    };

    onChange = (value) => {
        this.setState({
            dollarValue: value,
        });
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Currency Conversion</Text>
                <Text style={styles.subheader}>Convert dollars to a number of different currencies</Text>
                <TextInput
                    keyboardType={"decimal-pad"}
                    placeholder={"Enter Amount in dollars"}
                    value={this.state.dollarValue}
                    onChangeText={this.onChange}
                    style={styles.currencyInput}
                />
                <Text style={styles.originalCurrency}>
                    {"usd:"}{" "}
                    {this.state.dollarValue
                        ? parseFloat(this.state.dollarValue).toFixed(2)
                        : "0.00"}
                </Text>
                {conversionValues.map((currency, index) => (
                    <Text style={styles.convertedCurrency} key={index}>
                        {currency.code} :{" "}
                        {this.state.dollarValue 
                            ? (
                                  parseFloat(this.state.dollarValue) *
                                  currency.value
                              ).toFixed(2)
                            : "0.00"}
                    </Text>
                ))}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#019031",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    header: {
        fontSize: 50,
        color: "#fff",
        textAlign: "center",
        marginBottom: 5
    },
    subheader: {
        fontSize: 20,
        color: '#FFF2bb',
        textAlign: "center", marginBottom: 10
    },
    currencyInput: {
        fontSize: 20,
        color: "#fff",
        width: 250,
        height: 70,
        backgroundColor: "#000",
        padding: 20,
        textAlign: "center",
        marginBottom: 5
    },
    originalCurrency: {
        fontSize: 22,
        color: '#fff',
        marginBottom: 5
    },
    convertedCurrency: {
        fontSize: 20,
    },
});

export default CurrencyConverter;
