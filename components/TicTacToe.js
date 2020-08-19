import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
    Container,
    Header,
    Title,
    View,
    Text,
    Button,
    Content,
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
                winMessage: `${this.state.isCrossTurn ? "x" : "o"} wins! horiz`,
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
                        winMessage: `${piece} wins! vert`,
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
                    winMessage: `${middle[1]} wins! diag`,
                    gameOver: true,
                });
            }
        }

        if(!gameOver){
           // TODO: all are full but no winner lol
        }
    };

    takeTurn = ({ row, index }) => {
        const pieceValue = this.state.isCrossTurn ? "x" : "o";
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
                    <Text>{this.state.isCrossTurn ? "X turn" : "O turn"}</Text>
                    <Text>{this.state.winMessage}</Text>
                    <Button onPress={this.resetGame}>
                        <Text>Reset Game</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gameBoard: {
        marginTop: 200,
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
        color: "#fff",
        fontSize: 50,
        paddingBottom: 10,
    },
    gamePiece: {
        height: 100,
        width: 100,
        backgroundColor: "#000",
        color: "#fff",
        borderColor: "#0fa",
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
});

export default TicTacToe;
