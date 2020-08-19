import React from "react";
import {Container, Text} from 'native-base'
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import FlexGrid from "./components/FlexGrid";
import DiceRoller from './components/DiceRoller';
import CurrencyConverter from './components/CurrencyConverter';
import BirbBook from './components/BirbBook';
import TicTacToe from './components/TicTacToe';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isReady :false
        }
    }

    async componentDidMount(){
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font
        });
        this.setState({isReady: true});
    }

    render() {
       return !this.state.isReady ? <AppLoading /> : (
           <Container>
               {/* <BirbBook /> */}
               <TicTacToe />
           </Container>
       )
    }
}
