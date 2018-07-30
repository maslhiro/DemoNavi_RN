import React, { Component,PureComponent } from 'react'
import {
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native'

import ic_Gas from '../../assets/logo/ic_Gas.png'

class HomeScreen extends PureComponent {
    static navigationOptions = {
        tabBarLabel : "Home",
        title : 'Home',
        header: null,
        tabBarIcon : <Image source={ic_Gas} style={{width:25,height:25}}/>

     };

    render() {
      return (
       <Text>Home</Text>
      )
    };

}



export default HomeScreen