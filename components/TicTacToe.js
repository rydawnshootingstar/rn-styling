import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Container, Header, Title, View, Text, Content } from "native-base";

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
                bottom.every((piece) => piece && piece === top[0]))
        ) {
            console.log("game over");
            this.setState({ winMessage: "x wins", gameOver: true });
        }
        // vertical wins
        if (!gameOver) {
            top.forEach((piece, index) => {
                if (
                    piece &&
                    top[index] === middle[index] &&
                    top[index] === bottom[index]
                ) {
                    console.log("game over");
                    this.setState({
                        winMessage: "x wins again",
                        gameOver: true,
                    });
                }
            });
        }

        // diagonal wins
        if (!gameOver) {
            top.forEach((piece, index) => {
                if (
                    piece &&
                    ((top[index] === middle[1] && top[index] === bottom[2]) ||
                        (top[index] === middle[1] && top[index] === bottom[0]))
                ) {
                    console.log("game over");
                    this.setState({
                        winMessage: "x wins a third time",
                        gameOver: true,
                    });
                }
            });
        }
       
    };

    takeTurn = ({row, index}) => {
        const pieceValue = this.state.isCrossTurn ? "x" : "o";
        let currentRow  = this.state[row];
        if(currentRow[index] != "" || this.state.gameOver){
            return;
        }
        currentRow[index] = pieceValue;
        console.log(pieceValue)

        this.setState({
            isCrossTurn: !this.state.isCrossTurn,
            [row]: currentRow
        })

        this.checkWin();
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
                        <TouchableOpacity onPress={()=>this.takeTurn({row: "top", index: 0})}
                            style={[styles.gamePiece, styles.bottom]}
                        >
                            <Text style={styles.text}>{top[0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>this.takeTurn({row: "top", index: 1})}
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
                        onPress={()=> this.takeTurn({row: "top", index: 2})}
                            style={[styles.gamePiece, styles.bottom]}
                        >
                            <Text style={styles.text}>{top[2]}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Middle row */}
                    <View style={styles.row}>
                        <TouchableOpacity
                        onPress={()=> this.takeTurn({row: "middle", index: 0})}
                            style={[styles.gamePiece, styles.bottom]}
                        >
                            <Text style={styles.text}>{middle[0]}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={()=> this.takeTurn({row: "middle", index: 1})}
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
                        onPress={()=> this.takeTurn({row: "middle", index: 2})}
                            style={[styles.gamePiece, styles.bottom]}
                        >
                            <Text style={styles.text}>{middle[2]}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Bottom row */}
                    <View style={styles.row}>
                        <TouchableOpacity 
                        onPress={()=> this.takeTurn({row: "bottom", index: 0})}
                        style={[styles.gamePiece]}>
                            <Text style={styles.text}>{bottom[0]}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={()=> this.takeTurn({row: "bottom", index: 1})}
                            style={[
                                styles.gamePiece,
                                styles.left,
                                styles.right,
                            ]}
                        >
                            <Text style={styles.text}>{bottom[1]}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={()=> this.takeTurn({row: "bottom", index: 2})}
                        style={[styles.gamePiece]}>
                            <Text style={styles.text}>{bottom[2]}</Text>
                        </TouchableOpacity>
                    </View>
                            <Text>{this.state.isCrossTurn ? "X turn" : "O turn" }</Text>
                    <Text>{this.state.winMessage}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gameBoard: {},
    row: {
        height: 100,
        width: 300,
        flexDirection: "row",
    },
    text: {
        color: "#fff",
        fontSize: 50,
        paddingBottom: 10
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
