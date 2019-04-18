import React, {Component} from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet, Image, TextInput, KeyboardAvoidingView} from 'react-native';

import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';
import SearchBar from '../components/searchBar';

class Home extends Component{
    
    state = {
        data:[
            {name:'Titulo largo', completed:true},
            {name:'Titulo largo', completed:false},
            {name:'Titulo largo', completed:false},
            {name:'Titulo largo', completed:false},
            {name:'Titulo largo', completed:false},
            {name:'Titulo largo', completed:false},
            {name:'Titulo largo', completed:false},
            {name:'Titulo largo', completed:false},
            {name:'Titulo largo', completed:false},
            {name:'Titulo largo', completed:false},
            {name:'Titulo largo', completed:false},
            {name:'Titulo largo', completed:false},
        ],
        contentAdd:false
    }

    dropItem = (e)=>{
        let state = this.state.data;
        state.splice(e,1)
        this.setState({data:state});
    }

    addItem = ()=>{

    }

render(){
    return(
        <View style={style.flex}>
            <Header title="eso"></Header>
            
            <KeyboardAvoidingView style={style.flex} behavior="padding" enabled>  
            <Body style={{backgroundColor:'#EDEDF4'}}>

                <SearchBar/>
                <View style={style.flex}>  
                    {this.state.data.length == 0 ? (
                    <View style={[style.flex,{display:'flex',justifyContent:'center', alignItems:'center'}]}>
                        <Text style={{fontSize:23, color:'#5E5E5E', fontWeight:'bold'}}>Sin nada aún</Text>
                    </View>) : (
                                            <FlatList
                                            data={this.state.data}
                                            renderItem={({item, index})=>{
                                                return(
                                                    <TouchableOpacity key={index} style={[style.flex,style.flatList]}>
                                                        <View style={style.flatStatus}>
                                                            {item.completed ? (
                                                                <Text style={style.labelCompleted}>.</Text>
                                                            ) : null }
                                                        </View>
                                                        <View style={[style.flatContent,style.flex]}>
                                                            <Text style={style.labelItem}>{item.name}</Text>
                                                            <Text style={style.labelDate}>{item.name}</Text>
                                                        </View>
                                                        <View style={style.flatDrop}>
                                                            <TouchableOpacity onPress={()=>this.dropItem(index)}>
                                                                <Image source={require('../assets/close.png')} style={{width:30, height:30}}/>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </TouchableOpacity>
                                                )
                                            }}
                                        /> 
                    )}           
                </View>


            </Body>

                            {/* Contenedor de add */}
                            {this.state.contentAdd ? (
                                    <View style={style.panelAdd}>  
                                    <View key="input" style={style.childAdd}>
                                        <View style={[style.contentAdd, style.flex]}>
                                            <TextInput
                                                style={{width:'100%', fontSize:20, color:'#C9AEE3', fontWeight:'bold'}}
                                                placeholder="Agrega un titulo"/>
                                        </View>
                                        <View style={style.optionsAdd}>
                                            <Image source={require('../assets/save.png')} style={{width:30,height:30}}/>
                                            <TouchableOpacity onPress={()=>{this.setState({contentAdd:false})}}>
                                                <Image source={require('../assets/close.png')} style={{width:30,height:30}}/>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                ): null}
                </KeyboardAvoidingView>

            <Footer>
                <TouchableOpacity onPress={()=>{this.setState({contentAdd:!this.state.contentAdd})}}>
                    <Image source={require('../assets/add.png')} style={{width:40,height:40}}/>
                </TouchableOpacity>
            </Footer>
        </View>
    )
}
}

const style = StyleSheet.create({
    flex:{
        flex:1
    },
    flatList:{
        borderTopWidth:1,
        backgroundColor:'white',
        borderColor:'#EDEDF4',
        height:61,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    flatStatus:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:40,
        height:40
    },
    flatDrop:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:40
    },
    labelItem:{
        fontSize:21,
        color:'#8B52C4',
        fontWeight:'bold'
    },
    labelDate:{
        color:'#5E5E5E'
    }, 
    labelCompleted:{
        fontSize:90,
        color:'#8B52C4',
        position:'relative',
        bottom:42
    },
    contentAdd:{
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        marginLeft:5
    },
    optionsAdd:{
        width:70,
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row'
    },
    panelAdd:{
        height:61,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#EDEDF4'
    },
    childAdd:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        marginVertical:8,
        marginHorizontal:3,
        flex:1
    }
})
  
export default Home;