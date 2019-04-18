import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Searchbar extends Component{

    render(){ 
        return(
            <View style={[this.props.style,{height:60, display:'flex', justifyContent:'center', alignItems:'center'}]}>
                 <View>
                     <Text>Busca aqui...</Text>
                 </View>
            </View>
        )
    }
}
export default Searchbar;