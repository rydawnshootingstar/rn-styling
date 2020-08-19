import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import {Container, Content} from 'native-base';
import ScreenHeader from './ScreenHeader';

// styling is crazy because of switching from just react native and style sheet to native base, but who cares?

let conversionValues = [];

class CurrencyConverter extends React.Component {
    state = {
        dollarValue: undefined,
        loading: true,
        errorMessage: ''
    };

    componentDidMount(){
        fetch('https://api.exchangeratesapi.io/latest?base=USD').then((res)=> {
        res.json().then((res)=> {
                for(const [key, value]of Object.entries(res.rates)){
                    conversionValues.push({code: key, value});
                    this.setState({loading: false})
                }
            })
        }).catch((err)=> this.setState({errorMessage: "An error occured when fetching conversion values"}))
    }
 
    onChange = (value) => {
        this.setState({
            dollarValue: value,
        });
    };
   
    render() {
        return (
            
            <Container contentContainertyle={styles.container}>
                <ScreenHeader navigation={this.props.navigation} title={"Currency Converter"} />
                {this.state.loading ? 
                <View style={styles.container}>
                    <Image source={require('../assets/moneySpin.gif')} />
                    <Text>Loading...</Text>
                    <Text style={styles.errorText}>{this.state.errorMessage}</Text>
                </View>
                :
              <Content>
                  <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#019031"}}>
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
                    {"USD:"}{" "}
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
                </View>
                </Content> 
              
    }
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
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
    errorText: {
        fontSize: 20,
        color: '#E44236'
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
