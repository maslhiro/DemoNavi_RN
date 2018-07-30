import React, { Component,PureComponent } from 'react'
import {
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native'

import ic_Box from '../../assets/logo/ic_Box.png'

class FavoritesScreen extends PureComponent {
    static navigationOptions = {
        tabBarLabel : "Favorites",
        title : 'Favorites',
        header: null,
        tabBarIcon : <Image source={ic_Box} style={{width:25,height:25}}/>

     };

    render() {
      return (
       <Text>Favorites</Text>
      )
    };

}



export default FavoritesScreen