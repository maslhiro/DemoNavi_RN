import React, { Component,PureComponent } from 'react'
import {
    Text,
    View,
    ScrollView,
    Button,
    Image,
} from 'react-native'
import PropTypes from 'prop-types'
import ic_Gas from '../../assets/logo/ic_Gas.png'
import { withNavigationFocus } from 'react-navigation-is-focused-hoc'

class LoginScreen extends Component {
    static navigationOptions = {
        tabBarLabel : "LogOut",
        title : 'LogOut',
        header: null,
        tabBarIcon : <Image source={ic_Gas} style={{width:25,height:25}}/>

     };

     static propTypes = {
        isFocused: PropTypes.bool.isRequired,
  
      }
     
      componentWillReceiveProps(nextProps) {
        if (!this.props.isFocused && nextProps.isFocused) {
          // screen enter (refresh data, update ui ...)
        }
        if (this.props.isFocused && !nextProps.isFocused) {
          // screen exit
        }
      }
     
      shouldComponentUpdate(nextProps) {
        // Update only once after the screen disappears
        if (this.props.isFocused && !nextProps.isFocused) {
          return true
        }
     
        // Don't update if the screen is not focused
        if (!this.props.isFocused && !nextProps.isFocused) {
          return false
        }
     
        // Update the screen if its re-enter
        return !this.props.isFocused && nextProps.isFocused
      }
     
      renderView(){
          return(
              <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                    <Text>Login</Text>
                    <Button title="Login" onPress={()=>this.props.navigation.navigate("HomeScreen")}/>
              </View>
          )
      }

      render() {
        console.log("LOGIN")
        console.log("Is Focused: "+this.props.isFocused)

        if (!this.props.isFocused) {
          return null
        }
     
        return (
          
            this.props.isFocused
              ? this.renderView()
              : <Text>I am not focused</Text>
            
        
        )
      }  
  

}



export default withNavigationFocus(LoginScreen,true)