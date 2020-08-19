import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";

class DiceRoller extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            diceValue: undefined,
            rolling: false,
            dice1: require(`../assets/dice/dice1.png`),
            dice2: require(`../assets/dice/dice2.png`),
            dice3: require(`../assets/dice/dice3.png`),
            dice4: require(`../assets/dice/dice4.png`),
            dice5: require(`../assets/dice/dice5.png`),
            dice6: require(`../assets/dice/dice6.png`),
        };
    }

    rollDice = () => {
        this.setState({ rolling: true });

        const roll = () => {
            const values = [
                this.state.dice1,
                this.state.dice2,
                this.state.dice3,
                this.state.dice4,
                this.state.dice5,
                this.state.dice6,
            ];
            let newDiceValue = Math.floor(Math.random() * values.length);
            this.setState({
                diceValue: values[newDiceValue],
            });
        };

        let rollinDice = setInterval(() => roll(), 50);

        setTimeout(() => {
            clearInterval(rollinDice);
            this.setState({ rolling: false });
        }, 1500);
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: "#E74292",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View
                    style={{
                        height: "auto",
                        flexDirection: "row",
                    }}
                >
                    <Image
                        style={styles.DiceStyle}
                        source={
                            this.state.diceValue === undefined
                                ? this.state.dice6
                                : this.state.diceValue
                        }
                    />
                    <Image
                        style={styles.DiceStyle}
                        source={
                            this.state.diceValue === undefined
                                ? this.state.dice6
                                : this.state.diceValue
                        }
                    />
                </View>
                <TouchableOpacity
                    onPress={this.rollDice}
                    activeOpacity={this.state.rolling ? 0.2 : 1}
                >
                    <Text style={styles.RollStyle}>
                        {this.state.rolling ? "Rolling" : "Roll"}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    DiceStyle: {
        height: 150,
        width: 150,
    },
    RollStyle: {
        height: 50,
        width: 150,
        marginTop: 20,
        color: "#fff",
        backgroundColor: "#E74292",
        fontSize: 30,
        borderRadius: 5,
        textAlign: "center",
        padding: 5,
        borderColor: "#fff",
        borderWidth: 2,
        fontWeight: "bold",
    },
});

export default DiceRoller;
