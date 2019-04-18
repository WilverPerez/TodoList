import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { Constants} from 'expo';

class Footer extends Component{

    render(){
        return(
            <View style={style.background}>
                {this.props.children}
            </View>
        )
    }
}

const style = StyleSheet.create({
    background:{
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:50,
        elevation:4
    },
    label:{
        marginTop:Constants.statusBarHeight, 
        color:'white',
        fontWeight:'bold',
        fontSize:24,
    }
})

export default Footer;