import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
    Header,
    Title,
    View,
    Text,
    Button,
} from "native-base";

class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCrossTurn: false,
            gameOver: false,
            winMessage: "",
            top: ["", "", ""],
            middle: ["", "", ""],
            bottom: ["", "", ""],
        };
    }

    checkWin = () => {
        const { top, middle, bottom, gameOver } = this.state;
        // horizontal wins
        if (
            !gameOver &&
            (top.every((piece) => piece && piece === top[0]) ||
                middle.every((piece) => piece && piece === middle[0]) ||
                bottom.every((piece) => piece && piece === bottom[0]))
        ) {
            this.setState({
                winMessage: `${this.state.isCrossTurn ? "X" : "O"} wins!`,
                gameOver: true,
            });
        }

        // vertical wins
        if (!gameOver) {
            top.forEach((piece, index) => {
                if (
                    piece &&
                    top[index] === middle[index] &&
                    top[index] === bottom[index]
                ) {
                    this.setState({
                        winMessage: `${piece} wins!`,
                        gameOver: true,
                    });
                }
            });
        }

        // diagonal wins
        if (!gameOver) {
            if (
                (top[0] !== "" &&
                    top[0] === middle[1] &&
                    middle[1] === bottom[2]) ||
                (top[2] !== "" &&
                    top[2] === middle[1] &&
                    middle[1] === bottom[0])
            ) {
                this.setState({
                    winMessage: `${middle[1]} wins!`,
                    gameOver: true,
                });
            }
        }

        // ties
        if (!gameOver) {
            if (
                top.every((piece) => piece) &&
                middle.every((piece) => piece) &&
                bottom.every((piece) => piece)
            ) {
                this.setState({
                    gameOver: true,
                    winMessage: "DRAW!",
                });
            }
        }
    };

    takeTurn = ({ row, index }) => {
        const pieceValue = this.state.isCrossTurn ? "X" : "O";
        let currentRow = this.state[row];
        if (currentRow[index] != "" || this.state.gameOver) {
            return;
        }
        currentRow[index] = pieceValue;

        this.setState({
            isCrossTurn: !this.state.isCrossTurn,
            [row]: currentRow,
        });

        this.checkWin();
    };

    resetGame = () => {
        this.setState({
            isCrossTurn: false,
            gameOver: false,
            winMessage: "",
            top: ["", "", ""],
            middle: ["", "", ""],
            bottom: ["", "", ""],
        });
    };

    render() {
        const { top, middle, bottom } = this.state;

        return (
            <View>
                <Header>
                    <Title
                        style={{ width: "100%", textAlignVertical: "center" }}
                    >
                        Tic Tac Toe
                    </Title>
                </Header>

                <View style={styles.gameBoard}>
                    <Text style={styles.turnText}>
                        {this.state.isCrossTurn ? "X's turn" : "O's turn"}
                    </Text>
                    {/* Top Row */}
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() =>
                                this.takeTurn({ row: "top", index: 0 })
                            }
                            style={[styles.gamePiece, styles.bottom]}
                        >
                            <Text style={styles.text}>{top[0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                this.takeTurn({ row: "top", index: 1 })
                            }
                            style={[
                                styles.gamePiece,
                                styles.left,
                                styles.right,
                                styles.bottom,
                            ]}
                        >
                            <Text style={styles.text}>{top[1]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                this.takeTurn({ row: "top", index: 2 })
                            }
                            style={[styles.gamePiece, styles.bottom]}
                        >
                            <Text style={styles.text}>{top[2]}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Middle row */}
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() =>
                                this.takeTurn({ row: "middle", index: 0 })
                            }
                            style={[styles.gamePiece, styles.bottom]}
                        >
                            <Text style={styles.text}>{middle[0]}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>
                                this.takeTurn({ row: "middle", index: 1 })
                            }
                            style={[
                                styles.gamePiece,
                                styles.bottom,
                                styles.left,
                                styles.right,
                            ]}
                        >
                            <Text style={styles.text}>{middle[1]}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>
                                this.takeTurn({ row: "middle", index: 2 })
                            }
                            style={[styles.gamePiece, styles.bottom]}
                        >
                            <Text style={styles.text}>{middle[2]}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Bottom row */}
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() =>
                                this.takeTurn({ row: "bottom", index: 0 })
                            }
                            style={[styles.gamePiece]}
                        >
                            <Text style={styles.text}>{bottom[0]}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>
                                this.takeTurn({ row: "bottom", index: 1 })
                            }
                            style={[
                                styles.gamePiece,
                                styles.left,
                                styles.right,
                            ]}
                        >
                            <Text style={styles.text}>{bottom[1]}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>
                                this.takeTurn({ row: "bottom", index: 2 })
                            }
                            style={[styles.gamePiece]}
                        >
                            <Text style={styles.text}>{bottom[2]}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.winText}>{this.state.winMessage}</Text>
                    <Button style={styles.resetButton} onPress={this.resetGame}>
                        <Text>Reset Game</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gameBoard: {
        marginTop: 300,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        height: 100,
        width: 300,
        flexDirection: "row",
    },
    text: {
        color: "#487EB0",
        fontSize: 50,
        paddingBottom: 10,
    },
    gamePiece: {
        height: 100,
        width: 100,
        backgroundColor: "#fff",
        color: "#000",
        borderColor: "#4BCFFA",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    top: {
        borderTopWidth: 5,
    },
    bottom: {
        borderBottomWidth: 5,
    },
    right: {
        borderRightWidth: 5,
    },
    left: {
        borderLeftWidth: 5,
    },
    resetButton: {
        marginLeft: "35%",
    },
    winText: {
        color: "#019031",
        fontSize: 30,
        marginBottom: 20,
        marginTop: 30,
    },
    turnText: {
        alignSelf: "flex-start",
        marginLeft: 10,
        fontSize: 30,
        marginBottom: 75,
        color: "#30336B",
    },
    winPieces: {
        color: "#67E6DC",
    },
});

export default TicTacToe;
