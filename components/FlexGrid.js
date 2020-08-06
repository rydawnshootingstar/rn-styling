import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 1.3,
        marginTop: 30,
        backgroundColor: "#01dddd",
        alignItems: "center",
    },
    middle: {
        backgroundColor: "#aa2332",
        flex: 3,
        alignItems: "center",
    },
    bottom: {
        backgroundColor: "#e56d",
        flex: 1,
        alignItems: "center",
    },
    midContainer: {
        flex: 1,
        flexDirection: "row",
    },
    square: {
        height: 100,
        width: 100,
        backgroundColor: "#000fff",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginRight: 20,
        marginTop: 20
    },
});

export default (props) => (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text>{props.top}</Text>
        </View>
        <View style={styles.middle}>
            <View style={styles.midContainer}>
                <View style={styles.square} />
                <View style={styles.square} />
                <View style={styles.square} />
            </View>
        </View>
        <View style={styles.bottom}>
            <Text>{props.bottom}</Text>
        </View>
    </View>
);
