import React, { Component } from 'react';
import { View } from 'react-native';

class Body extends Component{

    render(){
        return(
            <View style={[this.props.style,{flex:2}]}>
                {this.props.children}
            </View>
        )
    }
}
export default Body;