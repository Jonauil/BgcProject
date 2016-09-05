/*
  *login pages
  *
 */

import React,{Component} from 'React';
import {
    TextInput,
    Text,
    View,
    StyleSheet,
} from 'react-native';

export default class login_page extends Component{
    render(){
        return(
            <View style={styles.container} >
                <View style={styles.header} >
                <Text style={styles.header_text} >手机号</Text>
            </View>
            <View style={styles.body} >
                <Text style={styles.body_text} >请输入手机号码进行注册、登录</Text>
                <TextInput
                    style={styles.telephone_input}
                    placeholder='请输入手机号码'
                    ref='telephone'
                    />
            </View>

                <View style={styles.button_commit} >
                    <Text style={styles.button_text} >下一步</Text>

                </View>

                <View style={styles.info} >
                    <Text style={styles.info_text} >不会在任何地方泄露您的号码</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1
    },header:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#e2241d',
        alignItems:'center',
        height:45,
        marginTop:18
    },
    header_text:{
        fontSize:12,
        color:'#fff'
    },body:{
        marginTop:25
    },body_text:{
        fontSize:14,
        marginLeft:15,
        color:'#5c6578'
    },
    telephone_input:{
        height:40,
        width:380,
        borderRadius:3,
        borderColor:'#e2241d',
        borderWidth:2,
        marginTop:10,
        marginLeft:15,
        textAlign:'center'
    },button_commit:{
        flexDirection:'row',
        backgroundColor:'#e2241d',
        justifyContent:'center',
        alignItems:'center',
        height:40,
        width:380,
        marginTop:30,
        marginLeft:15
    },button_text:{
        fontSize:16,
        borderRadius:3,
        color:'#fff'
    },info:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    info_text:{
        fontSize:12,
        color:'#5c6578',
    }
});
