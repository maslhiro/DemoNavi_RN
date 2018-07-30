import React, { Component,PureComponent } from 'react'
import {
    Text,
    View,
    ScrollView,
    Button,
    Image,
} from 'react-native'

import ic_Gas from '../../assets/logo/ic_Gas.png'

class LoginScreen extends PureComponent {
    static navigationOptions = {
        tabBarLabel : "LogOut",
        title : 'LogOut',
        header: null,
        tabBarIcon : <Image source={ic_Gas} style={{width:25,height:25}}/>

     };

    render() {
      return (
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Login</Text>
                <Button title="Đăng Nhập" onPress={()=>this.props.navigation.navigate("BottomTab")}/>
          </View>

      )
    };

}



export default LoginScreen