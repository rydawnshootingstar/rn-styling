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
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

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
           <NavigationContainer>
               
               {/* <BirbBook /> */}
               {/* <TicTacToe /> */}
               <Drawer.Navigator drawerPosition={"left"} drawerType={'slide'}>
                   <Drawer.Screen name="Tic Tac Toe" component={TicTacToe} />
                   <Drawer.Screen name="Bird Book" component={BirbBook} />
                   <Drawer.Screen name="Currency Converter" component={CurrencyConverter} />
                   <Drawer.Screen name="Dice Roller" component={DiceRoller} />
               </Drawer.Navigator>
         
           </NavigationContainer>
       )
    }
}
