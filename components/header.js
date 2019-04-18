import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Constants} from 'expo';

class Header extends Component{

    render(){
        return(
            <View style={style.background}>
                <View style={style.flex}>
                    {this.props.left}
                </View>
                <View style={style.flex}>
                    <Text style={style.label}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={style.flex}>
                    {this.props.left}
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    background:{
        backgroundColor:'#8B52C4',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'100%',
        height:90,
        elevation:2
    },
    label:{
        marginTop:Constants.statusBarHeight, 
        color:'white',
        fontWeight:'bold',
        fontSize:24,
    },
    flex:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Header;